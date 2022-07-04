import React from "react";
import {useState} from "react";

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

import * as api from './api';
import {Root} from './styles';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Permission() {
    const [isLoading, setLoading] = useState(true);
    const [permissionList, setPermissionList] = useState([
        {
            name: 'Name',
            value: 'name',
            isPublic: true,
        },
        {
            name: 'Profile picture',
            value: 'picture',
            isPublic: true,
        },
        {
            name: 'Age',
            value: 'age',
            isPublic: true,
        },
        {
            name: 'Work Experience',
            value: 'experience',
            isPublic: true,
        }
    ]);

    React.useEffect(()=>{
        api.getPermissions(1).then((response) => {
            let data = response.data.data;
            let newPermission = permissionList.map((item) => {
                let value = data[item.value];
                return {
                    ...item,
                    isPublic: value
                }
            })
            setPermissionList(newPermission);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);

    function savePermissions() {
        let updatedPermissions = {};
        permissionList.forEach((permission)=>{
            updatedPermissions[permission.value] = permission.isPublic;
        });
        setLoading(true);
        api.updatePermissions(1, updatedPermissions).then((response) => {
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }

    return (
        <Root>
            <Typography variant="h5">Set what you want to Show!</Typography>
            {
                isLoading ? (<Box sx={{flexDirection: 'column'}}>
                    <Skeleton animation="wave" sx={{width: '100%'}}/>
                    <Skeleton animation="wave" sx={{width: '100%'}}/>
                    <Skeleton animation="wave" sx={{width: '100%'}}/>
                </Box>) : (<>
                    {
                        permissionList.map((permission, index)=>{
                        return (<div key={index}>
                            <Typography variant="body1">{permission.name}</Typography>
                            <Switch
                                checked={permission.isPublic}
                                onChange={(e, value) => {
                                    let newPermission = [...permissionList]
                                    newPermission[index] = {
                                        ...newPermission[index],
                                        isPublic: value
                                    }
                                    setPermissionList(newPermission);
                                }}
                                {...label} 
                            />
                        </div>)
                    })}
                    <Button variant="contained" onClick={savePermissions}>Save Changes</Button>
                </>)
            }
        </Root>
    );
}

export default Permission;