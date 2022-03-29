import * as types from './type';

export const saveUserDetail = data => (
    {
        type: types.SAVE_USER_DETAILS,
        data: data
    }
)

export const saveUserToken = data => (
    {
        type: types.SAVE_USER_TOKEN,
        data: data
    }
)