import { palette } from '../constants';

export const MuiInputBase = {
  styleOverrides: {
    root: {
      '&.MuiOutlinedInput-root': {
        borderRadius: '60px',
        fontSize: '0.875rem',
        textAlign: 'left',
        boxShadow: "0px 0px 10px -1px rgba(159, 158, 158, 0.25)",

        '& .MuiOutlinedInput-input': {
          padding: '16px 24px',
         
        },

        '&.MuiInputBase-multiline': {
          padding: 0,
        },

        '& .MuiOutlinedInput-notchedOutline': {
          borderWidth: 0,
        },

        '&:not(.Mui-error):not(.Mui-focused):hover': {
          '& > fieldset': {
            borderColor: palette.gray,
            borderWidth: 2,
          },
        },

        '&:not(.Mui-error):focus': {
          '& > fieldset': {
            borderColor: palette.gray,
            borderWidth: 2,
          },
        },

        '&.Mui-focused': {
          '& > fieldset': {
            color: palette.black,
            borderWidth: 2,
          },
        },
        '&.Mui-focused:not(.Mui-error)': {
          '& > fieldset': {
            borderColor: palette?.gray,
            borderWidth: 2,
          },
        },
        '& .MuiInputBase-input.Mui-disabled': {
          WebkitTextFillColor: palette?.black,
        },
      },
    },
  },
};
