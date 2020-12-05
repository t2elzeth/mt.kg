import {email, maxLength, minLength, required} from "@vuelidate/validators/dist/raw.esm";
import {isAlpha, getValidator} from "@/utils/validators";

export const constants = {
    minLength: {
        phone: 8,
        username: 5,
        password: 8,
    },
    maxLength: {
        comment: 1200
    }
};

export const rules = {
    email: {
        email,
        required
    },
    first_name: {
        required,
        isAlpha
    },
    last_name: {
        required,
        isAlpha
    },
    phone: {
        required,
        minLength: minLength(constants.minLength.phone)
    },
    comment: {
        maxLength: maxLength(constants.maxLength.comment),
    },
    contactUs: function () {
        return {
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            phone: this.phone,
            comment: this.comment,
        }
    },

    username: {
        required,
        minLength: minLength(constants.minLength.username)
    },
    password: {
        required,
        minLength: minLength(constants.minLength.password)
    },
    login: function () {
        return {
            username: this.username,
            password: this.password
        }
    },
}

export const messages = {
    email: [
        getValidator.required('Email адрес'),
        getValidator.email()
    ],
    first_name: [
        getValidator.required(),
        getValidator.isAlpha()
    ],
    last_name: [
        getValidator.required(),
        getValidator.isAlpha()
    ],
    phone: [
        getValidator.required(),
        getValidator.minLength('phone')
    ],
    comment: [
        getValidator.maxLength('comment'),
    ],
    username: [
        getValidator.required(),
        getValidator.minLength('username')
    ],
    password: [
        getValidator.required(),
        getValidator.minLength('password')
    ]
}
