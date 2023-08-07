import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Popper,
  Grow,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Divider,
} from '@mui/material';
import { palette } from '@/theme/constants';
import { Icon } from '@iconify/react';
import { chevron, menuContainer, menuItem, menuItemBox, divider } from './styles';


export const DropdownButton = ({ text, options }: any) => {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (_: React.MouseEvent<EventTarget>) => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box
      ref={anchorRef}
      sx={chevron}
      onClick={handleToggle}
      bgcolor={palette?.primary}
      aria-controls={open ? 'menu-list-grow' : undefined}
      aria-haspopup='true'
      height={'2rem'}
      width={'17.188rem'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      padding={'1.3rem 1rem'}
      borderRadius={'2rem'}>
      <Icon color={palette?.white} icon={'heroicons-outline:chevron-down'} />
      <Divider sx={divider} orientation='vertical' variant='middle' flexItem />
      <Typography variant='subtitle1' color={palette?.white}>
        {text}
      </Typography>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'start top' : 'start bottom',
              width: '17.188rem',
              marginTop: '0.5rem',
            }}>
            <Paper sx={menuContainer}>
              <ClickAwayListener onClickAway={handleClose as any}>
                <MenuList id='menu-list-grow' sx={{ paddingX: '10px' }}>
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
                        <Icon icon={item?.icon} width={'20px'} height={'20px'} />
                        <Typography variant='h6'>{item?.text}</Typography>
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
