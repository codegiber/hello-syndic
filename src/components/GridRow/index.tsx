import { Box, Grid, Button, Typography } from "@mui/material";
import { boxContainer, btnStyle, btnStyleLight } from "./styles";
import { palette } from '@/theme/constants';

export const GridRow = () => {
	return (
		<Box sx={boxContainer}>
			<Grid container>
				<Grid item md={3}> 
				<Button variant="contained" size="small" sx={btnStyle} disabled >
					<Typography variant="body2" color={palette.black} fontWeight="600">#90031</Typography>
				</Button>
				</Grid>
				<Grid item md={4} display='flex' alignItems='center'> 
					<Typography variant="subtitle1"  >Suite au préticket 5949 créé</Typography>
				</Grid>
				<Grid item md={3}> 
				<Button variant="contained" size="small" sx={btnStyle} >
					<Typography variant="body2" color={palette.white} fontWeight="600">Petites demandes Standard (T2)</Typography>
				</Button>
				</Grid>
				<Grid item md={2}> 
				<Button variant="contained" size="small" sx={btnStyleLight} >
					<Typography variant="body2" color={palette.white} fontWeight="600" >1-Demande créée</Typography>
				</Button>
				</Grid>
			</Grid>
		</Box>
	)
};