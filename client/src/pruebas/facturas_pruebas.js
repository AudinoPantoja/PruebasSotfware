import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Facturas from './facturas.js'; // Ruta relativa hacia el archivo "Facturas.js"

describe('Facturas Component', () => {
  test('renderiza el encabezado y el título correctamente', () => {
    render(
      <MemoryRouter>
        <Facturas />
      </MemoryRouter>
    );

    const title = screen.getByText('Facturas');
    expect(title).toBeInTheDocument();

    const searchPlaceholder = screen.getByPlaceholderText('Buscar...');
    expect(searchPlaceholder).toBeInTheDocument();
  });

  test('renderiza los filtros correctamente', () => {
    render(
      <MemoryRouter>
        <Facturas />
      </MemoryRouter>
    );

    const categoriaHeader = screen.getByText('Categoría');
    expect(categoriaHeader).toBeInTheDocument();

    const tags = ['Spring', 'Smart', 'Modern'];
    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });

    const checkboxes = ['Comestibles', 'Aseo', 'Herramientas'];
    checkboxes.forEach((label) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });

    const sliderLabel = screen.getByLabelText('Precio');
    expect(sliderLabel).toBeInTheDocument();
  });

  test('la lista de productos se renderiza correctamente', () => {
    render(
      <MemoryRouter>
        <Facturas />
      </MemoryRouter>
    );

    const productNames = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5', 'Producto 6'];
    productNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test('se puede interactuar con los botones de control', () => {
    render(
      <MemoryRouter>
        <Facturas />
      </MemoryRouter>
    );

    const searchBar = screen.getByPlaceholderText('Buscar...');
    fireEvent.change(searchBar, { target: { value: 'Producto 1' } });
    expect(searchBar.value).toBe('Producto 1');

    const sortButton = screen.getByText('Precio ascendente');
    expect(sortButton).toBeInTheDocument();
    fireEvent.click(sortButton);
    // No hay lógica de ordenamiento implementada, pero el botón debe existir

    const backButton = screen.getByText('Volver');
    fireEvent.click(backButton);
    // No se puede verificar directamente la acción, pero se asegura que el botón esté presente
  });

  test('el botón "Volver" redirige correctamente', () => {
    const mockNavigate = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Facturas />
      </MemoryRouter>
    );

    const backButton = screen.getByText('Volver');
    fireEvent.click(backButton);

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('se captura un error al intentar cambiar un estado inválido', () => {
    console.error = jest.fn(); // Mock para evitar que el error se muestre en consola

    render(
      <MemoryRouter>
        <Facturas />
      </MemoryRouter>
    );

    const productoComponent = screen.getByText('Facturas');
    expect(productoComponent).toBeInTheDocument();

    try {
      fireEvent.click(screen.getByText('NonExistingButton'));
    } catch (error) {
      expect(console.error).toHaveBeenCalled();
    }
  });
});
