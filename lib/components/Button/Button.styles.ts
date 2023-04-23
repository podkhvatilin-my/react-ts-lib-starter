import styled, { css } from 'styled-components';

import { VARIANT, IButton } from './Button.model';

export const Root = styled.button<IButton>`
  padding: 6px 12px;
  color: white;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${(props) => {
    switch (props.variant) {
      case VARIANT.secondary:
        return css`
          background-color: ${({ theme }) => theme.colors.secondary};
        `;
      case VARIANT.primary:
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.primary};
        `;
    }
  }}
`;
