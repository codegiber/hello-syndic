import { Box, Typography } from '@mui/material';
import { GridRow } from '@/components';
import { palette } from '@/theme/constants';

export const Dashboard = () => {
  return (
    <Box sx={boxStyles}>
      <Typography sx={titleStyles} variant='h3'>Vos dernières interventions en cours</Typography>
      <GridRow />
    </Box>
  );
};

const boxStyles = {
  padding: "3.31rem 2.75rem", 
  boxSizing: "border-box"
}

const titleStyles = { 
  textTransform: "uppercase", 
  color: palette.dark,
}