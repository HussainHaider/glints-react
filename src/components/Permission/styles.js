import {styled} from '@mui/material/styles';

export const Root = styled('div')(({theme}) => ({
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    '& > div': {
        display: 'flex',
        alignItems: 'center',
    }
}));