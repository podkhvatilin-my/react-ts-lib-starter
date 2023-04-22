import { Root } from './Button.styles';

import type { FC, PropsWithChildren } from 'react';
import type { IButton } from './Button.model';

export const Button: FC<PropsWithChildren<IButton>> = ({ children, ...restProps }) => <Root {...restProps}>{children}</Root>;
