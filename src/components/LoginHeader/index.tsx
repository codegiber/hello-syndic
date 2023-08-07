import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Image from 'next/image'

export const LoginHeader = () => {
  return (
    <AppBar position='fixed' elevation={0} sx={appbarStyles}>
      <Toolbar disableGutters  sx={loginStyles}>
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

const loginStyles = {
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center" 
}

const appbarStyles = {
  height: "4.375rem"
}