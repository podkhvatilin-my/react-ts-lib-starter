import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.component';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Example  button',
  },
};
