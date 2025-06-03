import APIBaseURL from "../helper/APIBaseUrl";

// Actions
export const SignUpSuc = (msg) => {
    return {
        type: 'SIGNUP_SUC',
        payload: msg
    };
}

export const SignUpRej = (msg) => {
    return {
        type: 'SIGNUP_REJ',
        payload: msg
    }
}

export const Loading = () => {
    return{
        type: 'LOADING'
    }
}

// Thunk Actions

export const SignUpAsync = (data) => async dispatch => {
    try {
        dispatch(Loading());

        const res = await APIBaseURL.post('/signup', data);
        dispatch(SignUpSuc({
            msg: res.data.msg,
            status: res.status
        }));
    } catch (error) {
        dispatch(SignUpRej({
            msg: error.response.data.msg,
            status: error.response.status
        }));
    }
}