


import {
    REQUEST_BEGIN, REQUEST_FAILED, REQUEST_SUCCESSFUL
} from "../../constants/index";

const commonReducer = (state = {}, action) => {
    switch (action.type) {
        case REQUEST_BEGIN:
            return {
                ...state,
                isRequestBegin: true,
                isRequestSuccessful: false,
                isRequestFailed: false,
                message: "Message"
            };
        case REQUEST_SUCCESSFUL:
            return {
                ...state,
                isRequestBegin: false,
                isRequestSuccessful: true,
                isRequestFailed: false
            };
        case REQUEST_FAILED:
            return {
                ...state,
                isRequestBegin: false,
                isRequestSuccessful: false,
                isRequestFailed: true
            };
        default:
            return state;
    }
};

export default commonReducer;