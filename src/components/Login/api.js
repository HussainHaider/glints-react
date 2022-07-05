import instance from '../../utilities/axios';

import {AUTH_API} from '../../constants/restEndPoints';

export function signIn(data) {
    return instance.post(AUTH_API.SIGN_IN, data);
};