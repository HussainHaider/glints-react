import instance from '../../utilities/axios';

import {EXPERIENCE_API} from '../../constants/restEndPoints';

export function addExperience(id, data) {
    let URL = EXPERIENCE_API.DEFAULT.replace(':id', id);
    return instance.post(URL, data);
};

export function updateExperience(id, data) {
    let URL = EXPERIENCE_API.DEFAULT.replace(':id', id);
    return instance.put(URL, data);
};