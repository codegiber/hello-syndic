import { palette } from '@/theme/constants';

export const menuContainer = {
	borderRadius: ' 0 0 0.75rem 0.75rem ',
	boxShadow: '0px 10px 20px lightgray',
	background: palette?.white,
};

export const menuItem = {
	'&:hover': {
		backgroundColor: palette.gray,
	},
};

export const menuItemBox = {
	display: 'flex',
	justifyContent: 'flex-start',
	flexDirection: 'column',
	alignItems: 'flex-start',
};