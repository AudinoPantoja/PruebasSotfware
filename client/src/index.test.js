import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn(),
  })),
}));

test('renders the root component without crashing', () => {
  const rootElement = document.createElement('div');
  rootElement.id = 'root';
  document.body.appendChild(rootElement);

  const createRoot = ReactDOM.createRoot;
  require('./index'); // Importa el archivo `index.js` después de configurar el mock

  expect(createRoot).toHaveBeenCalledWith(rootElement);
  expect(createRoot().render).toHaveBeenCalledWith(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
