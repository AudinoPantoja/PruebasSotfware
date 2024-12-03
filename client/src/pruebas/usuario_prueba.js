import { render, screen, fireEvent, act } from '@testing-library/react';
import Usuario from './usuario.js';
import { BrowserRouter as Router } from 'react-router-dom'; // Necesario para usar useNavigate

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(), // Mock de useNavigate
}));

describe('Usuario Component', () => {
  test('should update hora, minuto and amPm states', () => {
    render(
      <Router>
        <Usuario />
      </Router>
    );

    // Verificar que la hora y minuto iniciales son 20:00 AM
    expect(screen.getByDisplayValue('20')).toBeInTheDocument();
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    expect(screen.getByText('AM')).toBeInTheDocument();
  });

  test('should change the time when AM/PM buttons are clicked', () => {
    render(
      <Router>
        <Usuario />
      </Router>
    );

    // Cambiar de AM a PM
    fireEvent.click(screen.getByText('PM'));
    expect(screen.getByText('PM')).toHaveClass('active');
    expect(screen.getByText('AM')).not.toHaveClass('active');
  });

  test('should change form input values when typed', () => {
    render(
      <Router>
        <Usuario />
      </Router>
    );

    const nombreInput = screen.getByLabelText(/nombre/i);
    fireEvent.change(nombreInput, { target: { value: 'Nuevo Nombre' } });

    // Verificar que el valor del input cambió
    expect(nombreInput.value).toBe('Nuevo Nombre');
  });

  test('should navigate to home when "Atrás" is clicked', () => {
    const mockNavigate = require('react-router-dom').useNavigate;
    mockNavigate.mockClear();

    render(
      <Router>
        <Usuario />
      </Router>
    );

    const backButton = screen.getByText(/Atrás/i);
    fireEvent.click(backButton);

    // Verificar que useNavigate fue llamado
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('should display initial form data correctly', () => {
    render(
      <Router>
        <Usuario />
      </Router>
    );

    // Verificar los valores iniciales en los campos del formulario
    expect(screen.getByLabelText(/nombre/i).value).toBe('user');
    expect(screen.getByLabelText(/usuario/i).value).toBe('username');
    expect(screen.getByLabelText(/email/i).value).toBe('email@gmail.com');
    expect(screen.getByLabelText(/descripción/i).value).toBe('Value');
  });

  test('should update form data on input change', () => {
    render(
      <Router>
        <Usuario />
      </Router>
    );

    const descripcionInput = screen.getByLabelText(/descripción/i);
    fireEvent.change(descripcionInput, { target: { value: 'Nueva Descripción' } });

    expect(descripcionInput.value).toBe('Nueva Descripción');
  });
});
