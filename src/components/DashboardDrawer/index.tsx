import { Icon } from '@iconify/react';
import { palette } from '../../theme/constants';
import Image from 'next/image';
import {
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import { topMenuOptions, bottomMenuOptions } from '../../utils/common';
import logo from '../../../public/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { drawer, listItemButton, list, listItemText, listItem } from './styles';

export const DashboardDrawer = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const setDrawerStatus = () => setOpen((open) => !open);

  return (
    <MuiDrawer
      sx={() => drawer(open)}
      variant='permanent'
      elevation={16}
      anchor='left'
      PaperProps={{ style: { width: open ? '18.75rem' : 90, transition: 'width 0.5s' } }}>
      <Box
        display='flex'
        padding={open ? '1.6875rem 0 0 2rem' : '2.5rem 1.0875rem 0 0.5rem'}
        justifyContent='space-between'
        alignItems='center'
        >
        <Box
          display='flex'
          sx={{
            marginBottom: open ? 'unset' : '0.6rem',
          }}>
          <Image src={logo} alt='logo-drawer' width={!open ? 80 : 30} height={36} quality={100} />
          {open && (
            <Box
              display={'flex'}
              marginLeft={'1rem'}
              flexDirection={'column'}
              justifyContent={'space-between'}
              alignItems={'flex-start'}>
              <Typography variant='h3' color={palette?.black}>
                Dugast Richard
              </Typography>
              <Typography variant='h5' color={palette?.darkGray}>
                SDC 122 Rue Marcadet
              </Typography>
            </Box>
          )}{' '}
        </Box>

        <Box
          position={open ? 'unset' : 'fixed'}
          top={40}
          left={open ? 250 : 85}
          width={30}
          height={30}
          borderRadius={15}
          sx={{ backgroundColor: palette.white, transition: 'left 0.5s, top 0.5s' }}
          zIndex={1101}
          onClick={() => setDrawerStatus()}
          display='flex'
          justifyContent={'center'}
          alignItems={'center'}
          marginRight={'0.5rem'}>
          <Icon
            icon={'heroicons-outline:chevron-right'}
            height={20}
            width={20}
            color={palette?.black}
            style={{ transform: open ? 'rotate(0.5turn)' : '', transition: 'transform 0.3s', cursor: 'pointer' }}
          />
        </Box>
      </Box>

      <List
        disablePadding
        sx={list}>
        {topMenuOptions?.map((option: any) => {
          return (
            <Link key={option?.label} href={option?.route || ''}>
              <ListItem
                disablePadding
                sx={{
                  width: open ? '100%' : '65%',
                  whiteSpace: 'nowrap',
                  marginX: !open ? 'auto' : 0,
                }}>
                <ListItemButton
                  disableGutters
                  sx={{
                    padding: '0.8125rem 1.6875rem 0.8125rem 2rem',
                    bgcolor: router?.pathname == option?.route ? palette?.gray : palette?.white,
                    borderRadius: open ? '0' : '0.75rem',
                    marginX: !open ? 'auto' : 0,
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                  <ListItemIcon sx={{ minWidth: '2.375rem' }}>
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      bgcolor={router?.pathname == option?.route ? palette?.dark : palette?.gray}
                      borderRadius={'0.75rem'}
                      width={'2.25rem'}
                      height={'2.25rem'}>
                      <Image src={`/icons/${option?.icon}.svg`} alt={option?.icon} width={20} height={20} />
                    </Box>
                  </ListItemIcon>
                  {open && (
                    <ListItemText
                      primary={option?.label}
                      sx={{
                        marginLeft: 1,
                        '& .MuiTypography-root': {
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: router?.pathname == option?.route ? palette?.light : palette?.gray,
                        },
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
        <Box sx={{ flexGrow: 1 }} />

        {bottomMenuOptions?.map((option: any) => {
          return (
            <Link key={option?.label} href={option?.route || ''}>
               <ListItem
                disablePadding
                sx={() => listItem(open)}>
                <ListItemButton
                  disableGutters
                  
                  sx={() => listItemButton(router, option, open)}>
                  <ListItemIcon sx={{ minWidth: '2.375rem' }}>
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                      bgcolor={router?.pathname == option?.route ? palette?.dark : palette?.gray}
                      borderRadius={'0.75rem'}
                      width={'2.25rem'}
                      height={'2.25rem'}>
                      <Image src={`/icons/${option?.icon}.svg`} alt={option?.icon} width={20} height={20} />
                    </Box>
                  </ListItemIcon>
                  {open && (
                    <ListItemText
                      primary={option?.label}
                      sx={() => listItemText(router, option)}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </MuiDrawer>
  );
};
