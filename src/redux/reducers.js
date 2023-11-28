// reducers.js
import { SET_USER_NAME } from './actions';

const initialState = {
    userName: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
