import {ref} from "vue";

export const getInputFieldValidationClasses = function (field) {
    return {
        valid: field.$dirty && !field.$invalid,
        invalid: field.$dirty && field.$invalid
    };
};

export const formData = {
    contactUs: {
        first_name: ref(""),
        last_name: ref(""),
        phone: ref(""),
        email: ref(""),
        comment: ref("")
    },
    login: {
        username: ref(""),
        password: ref("")
    }
};

