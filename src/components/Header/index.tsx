import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Image from 'next/image'

export const LoginHeader = () => {
  return (
    <AppBar position='fixed' elevation={0} sx={{ height: "4.375rem" }}>
      <Toolbar disableGutters  sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image 
        src='/hellosyndic_logo.svg'
        alt='logo'
        width={140}
        height={42}
        />
      </Toolbar>
    </AppBar>
  );
};
