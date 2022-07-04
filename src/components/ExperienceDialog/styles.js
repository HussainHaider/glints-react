import {styled} from '@mui/material/styles';


export const Form = styled('form')(({theme}) => ({
    '& > div': {
        marginTop: theme.spacing(1)
    }
}));