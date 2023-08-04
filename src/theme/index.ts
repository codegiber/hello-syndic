import { createTheme } from '@mui/material/styles';
import { OverridesComponents } from './components';
import { palette } from './constants';

// Generate defualt MUI theme for breakpoints
export const defaultTheme = createTheme();

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
      dark: palette.dark,
    },
    secondary: {
      main: palette.light,
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: '600',
    },
    subtitle2: {
      fontSize: '1.125rem',
      fontWeight: '600',
    },
    //h2 and h3 are the same, only the weight varies
    h2: {
      fontSize: '1rem',
      fontWeight: '600',
    },
    h3: {
      fontSize: '1rem',
      fontWeight: '400',
    },
    //h2 and h3 are the same, only the weight varies

    //h4, h5, h6 are the same, only the weight varies
    h4: {
      fontSize: '0.875rem',
      fontWeight: '400',
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: '500',
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: '600',
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: '700',
    },
    button: {
      textTransform: 'none',
      fontSize: '0.95rem',
      fontWeight: '600',
    },
  },
  components: OverridesComponents,
});
