import * as React from 'react';

import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import {PersonalInfoSkeleton} from './styles';


function ProfileSkeleton() {
    return (<>
            <div>
                <Typography variant="h5" component='strong'>Personal Information</Typography>
            </div>
            <PersonalInfoSkeleton>
                <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                    style={{ marginRight: 6 }}
                />
                <div>
                    <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                    />
                    <Skeleton
                        animation="wave"
                        height={10}
                        width="60%"
                        style={{ marginBottom: 6 }}
                    />
                </div>
            </PersonalInfoSkeleton>
            <div>
                <Typography variant="h5" component='strong'>Work Experiences</Typography>
            </div>
            <div>
                <Skeleton
                    animation="wave"
                    height={20}
                    width="80%"
                    style={{ marginBottom: 6 }}
                />
                <PersonalInfoSkeleton>
                    <Skeleton
                        animation="wave"
                        variant="circular"
                        width={40}
                        height={40}
                        style={{ marginRight: 6 }}
                    />
                    <div>
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    </div>
                </PersonalInfoSkeleton>
                <Skeleton
                    animation="wave"
                    height={20}
                    width="80%"
                    style={{ marginTop: 6 }}
                />
            </div>
    </>);
}

export default ProfileSkeleton;