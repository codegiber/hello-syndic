import React, { useState, useRef } from 'react';
import { Box, Typography, Popper, Grow, Paper, MenuList, MenuItem, ClickAwayListener } from '@mui/material';
import { palette } from '@/theme/constants';
import { DropdowType } from './type';
import { menuContainer, menuItem, menuItemBox } from './styles';

export const Dropdown = ({ text, options }: DropdowType) => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = (_: React.MouseEvent<EventTarget>) => setOpen(false);
  const handleToggle = () => setOpen((prevOpen) => !prevOpen);

  return (
    <Box
      sx={{ cursor: 'pointer' }}
      ref={anchorRef}
      onClick={handleToggle}
      bgcolor={palette?.white}
      boxShadow='2px 0px 10px -1px rgba(0, 0, 0, 0.2)'
      aria-controls={open ? 'menu-list-grow' : undefined}
      aria-haspopup='true'
      height='2.5rem'
      width='12.5rem'
      display='flex'
      justifyContent='flex-start'
      alignItems='center'
      padding='1rem'
      borderRadius={!open ? '0.75rem' : '0.75rem 0.75rem 0 0'}
      >
      <Typography variant='subtitle1' color={palette?.black}>
        {text}
      </Typography>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'start top' : 'start bottom',
              width: '12.5rem',
            }}>
            <Paper sx={menuContainer}>
              <ClickAwayListener onClickAway={handleClose as any}>
                <MenuList id='menu-list-grow'>
                  {options?.map((item: any, index: number | string) => (
                    <MenuItem
                      key={index}
                      onClick={() => {
                        item?.method;
                        setOpen(false);
                      }}
                      sx={menuItem}
                      disableRipple>
                      <Box sx={menuItemBox}>
                        <Typography variant='subtitle1'>{item?.text}</Typography>
                        <Typography color={palette?.darkGray} variant='body2'>
                          {item?.subtitle}
                        </Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};
