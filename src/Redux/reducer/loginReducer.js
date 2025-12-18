
import { FETCH_LOGIN, LOGOUT_SUCCESS } from '../action/loginAction';

const INITIAL_STATE = {
    account: {
        id: '',
        email: '',
        password: '',
        username: '',
        image: ''
    },
    isAuthenticated: false
};

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOGIN:
            return {
                ...state, 
                account: {
                    id: action?.payload?.khanh?.id,
                    email: action?.payload?.khanh?.email,
                    password: action?.payload?.khanh?.password,
                    username: action?.payload?.khanh?.username,
                    image: action?.payload?.khanh?.image
                }, 
                isAuthenticated: true
            };
        case LOGOUT_SUCCESS:
            return {
                ...state, 
                account: {
                    id: '',
                    email: '',
                    password: '',
                    username: '',
                    image: ''
                },
                isAuthenticated: false
            };
        default: return state;
    }
};

export default loginReducer;