import { Box, Typography } from '@mui/material';
import { GridRow } from '@/components';

export const Dashboard = () => {
  return (
    <Box sx={{ padding: "3.31rem 2.75rem", boxSizing: "border-box"}}>
      <Typography sx={{ textTransform: "uppercase", color: "rgba(24, 58, 96, 1)" }} variant='h3'>Vos dernières intervenciones en curso</Typography>
      <GridRow />
    </Box>
  );
};
