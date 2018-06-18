import {
    SIGN_IN_SUCCESSFUL, SIGN_IN_FAILED
} from "../../constants/index";


const signInReducer = (state = {}, action) => {
    switch (action.types) {
        case SIGN_IN_SUCCESSFUL:
            return {
                ...state
            };
        case SIGN_IN_FAILED:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default signInReducer;