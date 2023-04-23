import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { THEMES } from '../lib';

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) =>  theme.colors.background};
  }
`;

export const ThemeDecorator = withThemeFromJSXProvider({
  themes: {
    light: THEMES.lightTheme,
    dark: THEMES.darkTheme,
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles
})
