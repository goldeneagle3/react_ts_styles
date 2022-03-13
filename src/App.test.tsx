import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('test the App comp', function () {
  it('should render the awasome text', () => {
    render(<App />);
    expect(screen.getByText(/awesome text/)).toBeDefined();
  });
});
