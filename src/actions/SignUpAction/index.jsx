import axios from "axios";

import { verifyEmail, passwordValidation } from '../../utils'

import {
    BASE_URL,
    EMAIL_IS_CORRECT,
    EMAIL_IS_EMPTY,
    EMAIL_IS_NOT_VALID,
    PASSWORD_CONFIRMATION_IS_CORRECT,
    PASSWORD_CONFIRMATION_IS_EMPTY,
    PASSWORD_CONFIRMATION_IS_NOT_EQUAL_TO_PASSWORD,
    PASSWORD_IS_CORRECT,
    PASSWORD_IS_EMPTY,
    PASSWORD_IS_NOT_CORRECT,
    REQUEST_BEGIN,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESSFUL
} from "../../constants/index";

const signUpSuccessful = (data) => {
    return {
        type: SIGN_UP_SUCCESSFUL,
        payload: data
    }
};

const signUpError = (errorMessage) => {
    return {
        type: SIGN_UP_FAILED,
        payload: errorMessage
    }
};

export const signUp = (username, password, passwordConfirmation) => {
    return (dispatch, getState) => {

        if (username.length === 0) {
            dispatch({
                type: EMAIL_IS_EMPTY
            });
            return
        } else if (!verifyEmail(username)) {
            dispatch({
                type: EMAIL_IS_NOT_VALID
            });
            return
        }

        if (password.length === 0) {
            dispatch({
                type: PASSWORD_IS_EMPTY
            });
            return;
        }
        console.log( passwordValidation(password) === false );
        if (!passwordValidation(password)) {
            console.log("test");
            dispatch({
                type: PASSWORD_IS_NOT_CORRECT
            });
            return;
        }

        if (passwordConfirmation.length !== 0 && passwordConfirmation !== password) {
            dispatch({
                type: PASSWORD_CONFIRMATION_IS_NOT_EQUAL_TO_PASSWORD
            });
            return;
        }

        if (passwordConfirmation.length === 0) {
            dispatch({
                type: PASSWORD_CONFIRMATION_IS_EMPTY
            });
            return;
        }
        if (passwordConfirmation !== password) {
            dispatch({
                type: PASSWORD_CONFIRMATION_IS_NOT_EQUAL_TO_PASSWORD
            });
            return;
        }

        dispatch({ type: REQUEST_BEGIN });
        axios
            .post(BASE_URL + '/api/v1/sign-up',
                {
                    mail: username,
                    password: password
                }
            )
            .then((response) => {
                dispatch(signUpSuccessful(response.data))
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                let message = error.response.data.message;
                dispatch(signUpError(message))
            });
    }
};

export const rtEmailValidation = (fieldValue) => {
    return (dispatch, getState) => {
        if (fieldValue.length === 0) {
            dispatch({
                type: EMAIL_IS_EMPTY
            })
        } else if (verifyEmail(fieldValue)) {
            dispatch({
                type: EMAIL_IS_CORRECT
            });
        } else {
            dispatch({
                type: EMAIL_IS_NOT_VALID
            })
        }
    };
};


export const rtPasswordValidation = (password, passwordConfirmation) => {
    return (dispatch, getState) => {
        if (password.length === 0) {
            dispatch({
                type: PASSWORD_IS_EMPTY
            });
            return;
        }
        console.log( passwordValidation(password) === false );
        if (!passwordValidation(password)) {
            console.log("test");
            dispatch({
                type: PASSWORD_IS_NOT_CORRECT
            });
            return;
        }

        if (passwordConfirmation.length !== 0 && passwordConfirmation !== password) {
            dispatch({
                type: PASSWORD_CONFIRMATION_IS_NOT_EQUAL_TO_PASSWORD
            });
            return;
        }

        dispatch({
            type: PASSWORD_IS_CORRECT
        });
    };

};

export const rtPasswordConfirmationValidation = (confirmationPassword, password) => {
    return (dispatch, getState) => {
        if (confirmationPassword.length === 0) {
            dispatch({
                type: PASSWORD_CONFIRMATION_IS_EMPTY
            });
            return;
        }
        if (confirmationPassword !== password) {
            dispatch({
                type: PASSWORD_CONFIRMATION_IS_NOT_EQUAL_TO_PASSWORD
            });
            return;
        }
        dispatch({
            type: PASSWORD_CONFIRMATION_IS_CORRECT
        });
    };
};