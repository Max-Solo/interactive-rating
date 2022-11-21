import { RAITING_SUBMIT, RAITING_RESULT } from '../types';

export const reitingReducer = (state, { type, payload }) => {
    switch (type) {
        case RAITING_SUBMIT:
            return {
                ...state,
                submit: true,
            };
        case RAITING_RESULT:
            return {
                ...payload,
            };
        default:
            return { ...state };
    }
};
