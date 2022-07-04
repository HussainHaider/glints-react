import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

export const LoginBlock = styled(Paper)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
}));

export const LoginForm = styled('form')(({theme}) => ({
    width: '30%',
    marginTop: theme.spacing(3),
    '& > *': {
        marginBottom: `${theme.spacing(2)} !important`,
    }
}));