import * as types from '../Actions/type';

const initialState = {
    userDetails: ''
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_USER_DETAILS:
            return {
                ...state,
                userDetails: action.data
            }
        case types.SAVE_USER_TOKEN:
            return {
                ...state,
                userToken: action.data
            }
        default:
            return state;
    }
}