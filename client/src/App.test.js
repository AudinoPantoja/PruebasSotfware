import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the App component correctly', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Asegúra que algo esperado en la página se renderiza, por ejemplo, un título
  // o un componente específico. Ajusta según el contenido de AppRouter.
  const appElement = screen.getByRole('main', { name: /app/i });
  expect(appElement).toBeInTheDocument();
});
