const COHORT_NAME = '2302-ACC-CT-WEB-PT-B';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
const POST_API_URL = `${BASE_URL}/posts`;
const LOGIN_API_URL = `${BASE_URL}/users/login`;
const LOGGEDIN_API_URL = `${BASE_URL}/users/me`;
const REGISTER_API_URL = `${BASE_URL}/users/register`;

export { POST_API_URL, LOGIN_API_URL, LOGGEDIN_API_URL, REGISTER_API_URL };