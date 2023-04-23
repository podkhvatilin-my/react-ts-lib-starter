/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button.component';

describe('Button', () => {
  const getComponent = () => {
    return <Button>Hello World</Button>;
  };
  const getButton = () => {
    return screen.getAllByRole('button', { name: /Hello World/i })[0];
  };

  it('should render correctly', () => {
    render(getComponent());

    expect(getButton()).toBeInTheDocument();
  });
});
