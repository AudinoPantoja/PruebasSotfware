import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Envios from './envios.js'; // Ruta relativa hacia el archivo "Envios.js"

describe('Envios Component', () => {
  test('renderiza el encabezado y el título correctamente', () => {
    render(
      <MemoryRouter>
        <Envios />
      </MemoryRouter>
    );

    const title = screen.getByText('envios');
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText('Modifica o actualiza la lista de envios y sus estados');
    expect(subtitle).toBeInTheDocument();
  });

  test('renderiza la tabla con datos iniciales', () => {
    render(
      <MemoryRouter>
        <Envios />
      </MemoryRouter>
    );

    const tableHeaders = ['id_factura', 'direccion', 'Precio', 'Editar', 'Habilitado'];
    tableHeaders.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });

    const firstRow = screen.getByText('0425-823');
    expect(firstRow).toBeInTheDocument();
  });

  test('el botón "Agregar" abre el modal', () => {
    render(
      <MemoryRouter>
        <Envios />
      </MemoryRouter>
    );

    const addButton = screen.getByText('Agregar');
    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);
    const modal = screen.getByText('Modal title');
    expect(modal).toBeInTheDocument();
  });

  test('cambia el estado de "habilitado" al interactuar con el checkbox', () => {
    render(
      <MemoryRouter>
        <Envios />
      </MemoryRouter>
    );

    const checkbox = screen.getAllByRole('checkbox')[0];
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test('la barra de búsqueda está presente', () => {
    render(
      <MemoryRouter>
        <Envios />
      </MemoryRouter>
    );

    const searchBar = screen.getByPlaceholderText('Search');
    expect(searchBar).toBeInTheDocument();
  });

  test('el botón "Back" redirige correctamente', () => {
    const mockNavigate = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Envios />
      </MemoryRouter>
    );

    const backButton = screen.getByText('Back');
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('se captura un error al intentar cambiar el estado del checkbox en un índice inválido', () => {
    console.error = jest.fn(); // Mock para evitar que el error se muestre en consola

    render(
      <MemoryRouter>
        <Envios />
      </MemoryRouter>
    );

    const envioComponent = screen.getByText('envios');
    expect(envioComponent).toBeInTheDocument();

    try {
      fireEvent.click(screen.getByText('NonExistingButton'));
    } catch (error) {
      expect(console.error).toHaveBeenCalled();
    }
  });
});
