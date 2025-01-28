const initialState = {
    isLoggedIn: false,
    user: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        case 'LOGOUT_USER':
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        default:
            return state;
    }
};

export default authReducer;
