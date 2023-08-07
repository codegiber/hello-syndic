import React from 'react';
import { AppBar, Toolbar, Box, Divider, IconButton } from '@mui/material';
import { palette } from '@/theme/constants';
import { Icon } from '@iconify/react';
import { DropdownButton } from '../DropdownButton';
import { Dropdown } from '../Dropdown';

const dropdownButtonOptions = [
  { text: 'Demander une intervention', icon: 'charm:bell', method: () => {} },
  { text: "J'ai une question comptable", icon: 'solar:dollar-broken', method: () => {} },
];

const dropdownOptions = [
  { text: 'Dugast Richard', subtitle: 'SDC 122 rue  Marcadet', method: () => {} },
  { text: 'Faciliti', subtitle: '404 rue de la démonstration', method: () => {} },
];

export const Header = () => {
  return (
    <AppBar position='fixed' elevation={0}>
      <Toolbar disableGutters>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          marginLeft='18.5rem'
          width='100%'>
          <Box>
            <Dropdown text='Mes copros' options={dropdownOptions} />
          </Box>

          <Box display='flex' justifyContent='flex-start' alignItems='center' gap={2}>
            <DropdownButton text='Demander une intervention' options={dropdownButtonOptions} />
            <Divider sx={styles?.divider} orientation='vertical' variant='middle' flexItem />
            <IconButton>
              <Icon id='icon' icon='solar:bell-broken' width='1.6875rem' height='1.4375rem' color={palette?.black} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  divider: {
    borderColor: palette?.gray,
    height: '2.5rem',
  },
};
