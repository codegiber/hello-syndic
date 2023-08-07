import Box from '@mui/material/Box';
import { DashboardDrawer } from '../DashboardDrawer';
import { Header } from '@/components';
import { mainBox } from './styles';

type LayoutProps = {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: LayoutProps) {
  return (
    <Box display={'flex'} id='component-main' position={'relative'}>
      <Header/>
      <DashboardDrawer />
      <Box
        component='main'
        sx={mainBox}>
        {children}
      </Box>
    </Box>
  );
}
