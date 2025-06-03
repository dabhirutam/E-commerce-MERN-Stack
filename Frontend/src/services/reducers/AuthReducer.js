const initialState = {
    auth: null,
    isSignUp: false,
    isSigIn: false,
    msg: null,
    isLoading: false
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUC':
            return {
                ...state,
                isSignUp: true,
                msg: action.payload,
                isLoading: false
            }

        case 'SIGNUP_REJ':
            return {
                ...state,
                msg: action.payload,
                isLoading: false
            }

        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }

        default:
            return state;
    }
}

export default AuthReducer;