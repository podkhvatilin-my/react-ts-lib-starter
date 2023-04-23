/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '@themes';
import { Button } from './Button.component';

describe('Button', () => {
  const getComponent = () => {
    return (
      <ThemeProvider theme={LIGHT_THEME}>
        <Button>Hello World</Button>
      </ThemeProvider>
    );
  };
  const getButton = () => {
    return screen.getAllByRole('button', { name: /Hello World/i })[0];
  };

  it('should render correctly', () => {
    render(getComponent());

    expect(getButton()).toBeInTheDocument();
  });
});
