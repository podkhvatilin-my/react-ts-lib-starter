import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { DARK_THEME, LIGHT_THEME } from '@themes';

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) =>  theme.colors.background};
  }
`;

export const ThemeDecorator = withThemeFromJSXProvider({
  themes: {
    light: LIGHT_THEME ,
    dark: DARK_THEME,
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles
})
