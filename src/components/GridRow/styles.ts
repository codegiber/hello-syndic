import { palette } from '@/theme/constants';

export const boxContainer = {
    padding: '1.69rem 2.06rem',
    boxShadow: '0px 0px 10px -1px rgba(159, 158, 158, 0.25)',
    borderRadius: '1.25rem',
    marginTop: '2rem'
}

export const btnStyle = {
    bgcolor: palette.dark, 
    padding: '0.75rem 1.25rem', 
    height: '2.2rem',
    boxSizing: 'border-box'
}

export const btnStyleLight = {
    ...btnStyle,
    bgcolor: palette.light,
}