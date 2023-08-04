import { palette } from '../constants';

export const MuiInputLabel = {
  styleOverrides: {
    root: {
      fontWeight: 700,
      fontSize: '0.875rem',
      color: palette.black,
      '&.Mui-error': {
        color: palette.black,
      },

      '&.Mui-focused': {
        color: palette.black,
      },
    },
  },
};
