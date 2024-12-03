import { render, screen, fireEvent } from '@testing-library/react';
import Clientes from './clientes.js';

describe('Componente Clientes', () => {
  it('debería renderizar el título del componente', () => {
    render(<Clientes />);
    const titulo = screen.getByRole('heading', { name: /Clientes/i });
    expect(titulo).toBeInTheDocument();
  });

  it('debería tener los campos de entrada requeridos', () => {
    render(<Clientes />);
    const campos = [
      screen.getByPlaceholderText(/Nombre/i),
      screen.getByPlaceholderText(/Apellido/i),
      screen.getByPlaceholderText(/Dirección/i),
      screen.getByPlaceholderText(/NIT/i),
      screen.getByPlaceholderText(/Teléfono/i),
    ];
    campos.forEach((campo) => expect(campo).toBeInTheDocument());
  });

  it('debería mostrar un mensaje de alerta si faltan campos obligatorios', () => {
    render(<Clientes />);
    const botonAgregar = screen.getByRole('button', { name: /Agregar Cliente/i });

    fireEvent.click(botonAgregar);

    const alerta = screen.getByText(/Por favor, llena todos los campos necesarios/i);
    expect(alerta).toBeInTheDocument();
  });

  it('debería permitir escribir en los campos de entrada', () => {
    render(<Clientes />);
    const nombreCampo = screen.getByPlaceholderText(/Nombre/i);
    fireEvent.change(nombreCampo, { target: { value: 'Juan' } });

    expect(nombreCampo).toHaveValue('Juan');
  });

  it('debería renderizar la tabla de clientes', () => {
    render(<Clientes />);
    const tabla = screen.getByRole('table');
    expect(tabla).toBeInTheDocument();

    const encabezados = screen.getAllByRole('columnheader');
    const nombresEncabezados = encabezados.map((encabezado) => encabezado.textContent);
    expect(nombresEncabezados).toEqual(['Nombre', 'Apellido', 'NIT', 'Teléfono', 'Dirección']);
  });

  it('debería renderizar los clientes en la tabla después de cargarlos', async () => {
    const clientesMock = [
      { nombre: 'Juan', apellido: 'Pérez', nit: '123456', telefono: '987654321', direccion: 'Calle 123' },
      { nombre: 'Ana', apellido: 'Gómez', nit: '654321', telefono: '123456789', direccion: 'Avenida 456' },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(clientesMock),
    });

    render(<Clientes />);

    const filas = await screen.findAllByRole('row');
    expect(filas).toHaveLength(clientesMock.length + 1);

    global.fetch.mockRestore();
  });

  it('debería mostrar un mensaje de error si ocurre un fallo al cargar clientes', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Error al cargar'));

    render(<Clientes />);

    const mensajeError = await screen.findByText(/Error al cargar los clientes/i);
    expect(mensajeError).toBeInTheDocument();

    global.fetch.mockRestore();
  });

  it('debería resetear los campos después de agregar un cliente', () => {
    render(<Clientes />);

    const nombreCampo = screen.getByPlaceholderText(/Nombre/i);
    const nitCampo = screen.getByPlaceholderText(/NIT/i);
    const botonAgregar = screen.getByRole('button', { name: /Agregar Cliente/i });

    fireEvent.change(nombreCampo, { target: { value: 'Juan' } });
    fireEvent.change(nitCampo, { target: { value: '123456' } });
    fireEvent.click(botonAgregar);

    expect(nombreCampo).toHaveValue('');
    expect(nitCampo).toHaveValue('');
  });
});
