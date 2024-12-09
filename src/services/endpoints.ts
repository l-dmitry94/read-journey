const ENDPOINTS = {
    auth: {
        signup: '/users/signup',
        signin: '/users/signin',
        current: '/users/current',
        refresh: '/users/current/refresh',
        signout: '/users/signout',
    },
    books: {
        recommend: '/books/recommend',
    },
};

export default ENDPOINTS;
