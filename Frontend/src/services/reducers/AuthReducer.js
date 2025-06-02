const initialState = {
    auth: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            console.log("SIGNUP");

        default:
            return state;
    }
}

export default AuthReducer;