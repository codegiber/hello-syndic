import { palette } from '@/theme/constants';

export const drawer = (open: boolean) => ({
    boxShadow: '2px 70px 10px -1px rgba(0, 0, 0, 0.1)',
    width: open ? '18.75rem' : 90,
    transition: 'width 0.5s',
    display: 'flex',
});

export const listItemButton = (router: any, option: any, open: boolean) => ({
    padding: '0.8125rem 1.6875rem 0.8125rem 2rem',
    bgcolor: router?.pathname == option?.route ? palette?.gray : palette?.white,
    borderRadius: open ? '0' : '0.75rem',
    marginX: !open ? 'auto' : 0,
    display: 'flex',
    justifyContent: 'center',
});

export const list = {
    mt: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
}

export const listItemText = (router: any, option: any) => ({
    marginLeft: 1,
    '& .MuiTypography-root': {
        fontSize: '0.875rem',
        fontWeight: '600',
        color: router?.pathname == option?.route ? palette?.light : palette?.gray,
    }
});

export const listItem = (open: boolean) => ({
    width: open ? '100%' : '65%',
    whiteSpace: 'nowrap',
    marginX: !open ? 'auto' : 0,
});

export const icon: any = (open: boolean) => ({
    transform: open ? 'rotate(0.5turn)' : '', transition: 'transform 0.3s', cursor: 'pointer'
})