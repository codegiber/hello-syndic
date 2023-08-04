import { palette } from '../constants';

const drawerWidth = '19rem';

export const MuiDrawer = {
  styleOverrides: {
    root: {
      width: drawerWidth,
      flexShrink: 0,
      zIndex: 1100,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        background: palette?.white,
      },
    },
  },
};
