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
        add: '/books/add',
        own: '/books/own',
        remove: '/books/remove',
        get: '/books',
    },
};

export default ENDPOINTS;
