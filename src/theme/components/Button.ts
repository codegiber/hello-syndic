import { palette } from '../constants';
import { theme } from '..';

export const MuiButton = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ ownerState }: any) => ({
      fontSize: theme?.typography?.h2,
      borderRadius: '60px',
      height: '48px',
      boxShadow: 'none',

      ...(ownerState.variant === 'contained' && {
        color: palette.white,
        background: palette.primary,
      }),
      ...(ownerState.variant === 'outlined' && {
        color: palette.primary,
        border: `2px solid ${palette.primary}`,
      }),
     
      '&:hover': {
        boxShadow: 'none',
        ...(ownerState.variant === 'contained' && {
          background: palette.primary,
        }),
        ...(ownerState.variant === 'outlined' && {
          color: palette.primary,
          border: `2px solid ${palette.primary}`,
          backgroundColor: 'transparent',
        }),
        ...(ownerState.variant === 'text' && {
          color: palette.primary,
          backgroundColor: 'transparent',
        }),
       
      },

    }),
  },
};
