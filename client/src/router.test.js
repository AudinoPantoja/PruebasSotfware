import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Router from './Router';

test('renders the correct component for a route', () => {
  render(
    <MemoryRouter initialEntries={['/home']}>
      <Router />
    </MemoryRouter>
  );
  const homeElement = screen.getByText(/homepage/i); // Ajusta según el texto visible en tu componente de inicio
  expect(homeElement).toBeInTheDocument();
});
