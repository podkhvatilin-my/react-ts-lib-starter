import type { FC, PropsWithChildren } from 'react';
import type { IButton } from './Button.model';

import { Root } from './Button.styles';

export const Button: FC<PropsWithChildren<IButton>> = (props) => {
  const { children, ...restProps } = props;

  return <Root {...restProps}>{children}</Root>;
};
