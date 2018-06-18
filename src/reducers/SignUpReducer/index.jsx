import {
    SIGN_UP_SUCCESSFUL,
    SIGN_UP_FAILED,
    EMAIL_IS_EMPTY,
    EMAIL_IS_NOT_VALID,
    PASSWORD_IS_EMPTY,
    PASSWORD_IS_NOT_CORRECT,
    PASSWORD_CONFIRMATION_IS_EMPTY,
    PASSWORD_CONFIRMATION_IS_NOT_EQUAL_TO_PASSWORD, EMAIL_IS_CORRECT, PASSWORD_IS_CORRECT,
    PASSWORD_CONFIRMATION_IS_CORRECT, REQUEST_BEGIN
} from "../../constants/index";

const signUpReducer = (state = {}, action) => {

    switch (action.type) {

        case REQUEST_BEGIN:
            return {
                ...state,
                isRequestBegin: true
            };
        case SIGN_UP_SUCCESSFUL:
            return {
                ...state,
                isRequestBegin: false,
                data: action.payload
            };
        case SIGN_UP_FAILED:
            return {
                ...state,
                isRequestBegin: false,
                isEmailValid: false,
                errorMessage: action.payload
            };
        case EMAIL_IS_EMPTY:
            return {
                ...state,
                isEmailValid: false,
                errorMessage: "Email is empty!"
            };
        case EMAIL_IS_NOT_VALID:
            return {
                ...state,
                isEmailValid: false,
                errorMessage: "Email is not valid!"
            };
        case EMAIL_IS_CORRECT:
            return {
                ...state,
                isEmailValid: true,
                errorMessage: ""
            };
        case PASSWORD_IS_EMPTY:
            return {
                ...state,
                isPasswordCorrect: false,
                errorMessage: "Password field is empty!"
            };
        case PASSWORD_IS_NOT_CORRECT:
            return {
                ...state,
                isPasswordCorrect: false,
                errorMessage: "Password should containt at least 6 letters and a number"
            };
        case PASSWORD_IS_CORRECT:
            return {
                ...state,
                isPasswordCorrect: true,
                errorMessage: ""
            };
        case PASSWORD_CONFIRMATION_IS_EMPTY:
            return {
                ...state,
                isPasswordConfrimationCorrect: false,
                errorMessage: "Password confirmation is empty!"
            };
        case PASSWORD_CONFIRMATION_IS_NOT_EQUAL_TO_PASSWORD:
            return {
                ...state,
                isPasswordConfrimationCorrect: false,
                errorMessage: "Password confirmation is not equal to password!"
            };
        case PASSWORD_CONFIRMATION_IS_CORRECT:
            return {
                ...state,
                isPasswordConfrimationCorrect: true,
                errorMessage: ""
            };
        default:
            return state;
    }
};

export default signUpReducer;