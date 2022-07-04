import instance from '../../utilities/axios';

import {CANDIDATE_API} from '../../constants/restEndPoints';

export function getCandidate(id) {
    let URL = CANDIDATE_API.DEFAULT.replace(':id', id);
    return instance.get(URL);
};

export function updateCandidate(id, data) {
    let URL = CANDIDATE_API.DEFAULT.replace(':id', id);
    return instance.put(URL, {
        ...data,
    });
};