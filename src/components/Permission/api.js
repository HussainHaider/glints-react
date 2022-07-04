import instance from '../../utilities/axios';

import {PERMISSION_API} from '../../constants/restEndPoints';

export function getPermissions(id) {
    let URL = PERMISSION_API.DEFAULT.replace(':id', id);
    return instance.get(URL);
};

export function updatePermissions(id, data) {
    let URL = PERMISSION_API.DEFAULT.replace(':id', id);
    return instance.put(URL, {
        ...data,
    });
};