// function that returns true if value is email, false otherwise
//validation
export const verifyEmail = (value) => {
    let emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
        return true;
    }
    return false;
};

export const passwordValidation = (value) => {
    let letter = /[a-zA-Z]/;
    let number = /[0-9]/;
    let result = (value.length >= 6 && letter.test(value) && number.test(value));
    return result
};

