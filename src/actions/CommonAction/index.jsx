import {
    REQUEST_SUCCESSFUL, REQUEST_BEGIN, REQUEST_FAILED
} from "../../constants"

export let requestBegin = () => {
    return {
        type: REQUEST_BEGIN
    }
};

export let requestSuccessful = (data) => {
    return {
        type: REQUEST_SUCCESSFUL,
        payload: data
    }
};

export let requestFailed = (error) => {
    return {
        type: REQUEST_FAILED,
        payload: error
    }
};