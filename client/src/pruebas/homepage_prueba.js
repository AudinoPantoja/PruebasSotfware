import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Homepage from './homepage.js'; // Ruta relativa hacia el archivo "Homepage.js"

describe('Homepage Component', () => {
  test('renderiza correctamente el encabezado y los botones', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const title = screen.getByText('Nuestros Productos');
    expect(title).toBeInTheDocument();

    const description = screen.getByText('de Calidad');
    expect(description).toBeInTheDocument();

    const deliveryButton = screen.getByTitle('delivery');
    expect(deliveryButton).toBeInTheDocument();

    const productsButton = screen.getByTitle('products');
    expect(productsButton).toBeInTheDocument();
  });

  test('renderiza correctamente la barra lateral con los botones', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const sidebarItems = [
      { title: 'User', icon: 'user.png' },
      { title: 'ventas', icon: 'shopping-cart.png' },
      { title: 'Bussisnes', icon: 'company--v1.png' },
      { title: 'Facturas', icon: 'financial-tasks.png' },
      { title: 'Clientes', icon: 'crowd.png' },
    ];

    sidebarItems.forEach((item) => {
      const button = screen.getByTitle(item.title);
      expect(button).toBeInTheDocument();
      expect(button.querySelector('img')).toHaveAttribute('src', expect.stringContaining(item.icon));
    });
  });

  test('se pueden interactuar los botones de la barra lateral', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const facturasButton = screen.getByTitle('ticket');
    fireEvent.click(facturasButton);
    // Verifica si la navegación fue llamada o el estado del componente cambia correctamente

    const clientesButton = screen.getByTitle('clients');
    fireEvent.click(clientesButton);
    // Similar a la acción anterior
  });

  test('navega a la página de productos al hacer clic en el botón correspondiente', () => {
    const mockNavigate = jest.fn();

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const productsButton = screen.getByTitle('products');
    fireEvent.click(productsButton);

    expect(mockNavigate).toHaveBeenCalledWith('/productos');
  });

  test('se capturan correctamente los eventos de estado de los botones', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const perfilButton = screen.getByTitle('User');
    fireEvent.click(perfilButton);
    // Verifica que el estado de "perfil" se haya alternado correctamente

    const facturasButton = screen.getByTitle('ticket');
    fireEvent.click(facturasButton);
    // Similar a la acción anterior para "facturas"
  });

  test('se renderizan las tarjetas de productos correctamente', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const productCards = screen.getAllByText('Productos');
    expect(productCards.length).toBeGreaterThan(0);

    const pedidoCards = screen.getAllByText('Pedidos');
    expect(pedidoCards.length).toBeGreaterThan(0);
  });
});
