
import { palette } from '../../theme/constants';

export const chevron = {
	color: palette.black,
	'&:hover': {
		cursor: 'pointer',
	},
};

export const menuContainer = {
	borderRadius: '12px',
	boxShadow: '0px 10px 20px lightgray',
};

export const menuItem = {
	'&:hover': {
		backgroundColor: palette.gray,
		borderRadius: '0.75rem',
	},
};

export const menuItemBox = {
	display: 'flex',
	alignItems: 'center',
	gap: 1,
};

export const submitButton = {
	bgcolor: palette?.primary,
	color: palette?.white,
	borderRadius: '8px',
	'&:hover': { bgcolor: palette?.primary, color: palette?.white },
	width: '10rem',
};

export const divider = {
	borderColor: palette?.white,
	height: '2rem',
	marginX: '0.5rem',
	marginY: '-0.9rem',
};

