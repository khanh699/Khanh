export const FETCH_LOGIN = 'FETCH_LOGIN';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const loginAction = (stateData) => {
    return {
        type: FETCH_LOGIN,
        payload: stateData
    };
};

export const logoutAction = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};