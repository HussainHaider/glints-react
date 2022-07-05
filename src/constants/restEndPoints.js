export const env = process.env;

const PROTOCOL = env.REACT_APP_PROTOCOL;
const ADDRESS = env.REACT_APP_ADDRESS;
const PORT = env.REACT_APP_PORT;

const BASE_URL = `${PROTOCOL}://${ADDRESS}:${PORT}/api`;

const CANDIDATE = 'candidate'
export const CANDIDATE_API = {
    DEFAULT: `${BASE_URL}/${CANDIDATE}/:id`,
};

const EXPERIENCE = 'experience'
export const EXPERIENCE_API = {
    DEFAULT: `${BASE_URL}/${EXPERIENCE}/:id`,
};

const PERMISSION = 'permission'
export const PERMISSION_API = {
    DEFAULT: `${BASE_URL}/${PERMISSION}/:id`,
};

export const AUTH_API = {
    SIGN_IN: `${BASE_URL}/signIn`,
};



