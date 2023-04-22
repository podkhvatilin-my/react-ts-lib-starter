import type { FC, PropsWithChildren } from 'react';
import { Root } from './Button.styles';

import type { IButton } from './Button.model';

export const Button: FC<PropsWithChildren<IButton>> = (props) => {
  const { children, type } = props;

  console.log('test');

  return <Root type={type}>{children}</Root>;
};
