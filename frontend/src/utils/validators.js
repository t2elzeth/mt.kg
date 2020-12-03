import {required, minLength, email, maxLength, alpha} from "@vuelidate/validators/dist/raw.esm";

export const constants = {
    minLength: {
        phone: 8,
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
        alpha
    },
    last_name: {
        required,
        alpha
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
    }
}

const getValidator = {
    minLength: function (formField) {
        return {
            name: "minLength",
            message: `Это поле должно быть минимум ${constants.minLength[formField]} символов в длину`
        };
    },
    required: function () {
        return {
            name: "required",
            message: `Это поле не может быть пустым`
        };
    },
    email: function () {
        return {
            name: "email",
            message: "Введите корректный email"
        };
    },
    maxLength: function (formField) {
        return {
            name: "maxLength",
            message: `Это поле должно быть максимум ${constants.maxLength[formField]} символов в длину`
        };
    },
    alpha: function () {
        return {
            name: "alpha",
            message: `Это поле должно содержать только буквы`
        };
    },
    sameAs: function (what) {
        return {
            name: "sameAs",
            message: `Your ${what.toLowerCase()} did not match`
        };
    }
};

export const messages = {
    email: [
        getValidator.required('Email адрес'),
        getValidator.email()
    ],
    first_name: [
        getValidator.required(),
        getValidator.alpha()
    ],
    last_name: [
        getValidator.required(),
        getValidator.alpha()
    ],
    phone: [
        getValidator.required(),
        getValidator.minLength('phone')
    ],
    comment: [
        getValidator.maxLength('comment'),
    ]
}
