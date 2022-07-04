import Avatar from '@mui/material/Avatar';
import {styled} from '@mui/material/styles';


export const ProfilePicture = styled(Avatar)(({theme}) => ({
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight: theme.spacing(2)
}));

export const PersonalInfoSection = styled('section')(({theme}) => ({
    marginBottom: theme.spacing(2),
    '& > div': {
        display: 'flex'
    }
}));

export const ExperienceSection = styled('section')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column'
}));

export const ExperienceBlock = styled('article')(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    '& div': {
        display: 'flex',
        alignItems: 'center',
    },
    '& > div:not(:first-of-type)': {
        justifyContent: 'space-between',
    }
}));

export const CompanyLogo = styled(Avatar)(({theme}) => ({
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(2)
}));


export const PersonalInfoSkeleton = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    '& > div': {
        width: '100%'
    }
}));

