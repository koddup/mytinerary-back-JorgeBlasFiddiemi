import joi from "joi";
import joiPwd from "joi-password-complexity";


export const signupSchema = joi.object({
    firstName: joi.string().required().min(3).max(15).messages({
        "string.empty": "Name is required ",
        "string.min": "Name must be 3 characters minimum",
        "string.max": "Name must be 15 characters maximum",
    }),
    lastName: joi.string().required().min(3).max(15).messages({
        "string.empty": "Last name is required",
        "string.min": "Last name must be 3 characters minimum",
        "string.max": "Last name must be 15 characters maximum",
    }),
    mail: joi.string().email().required().messages({
        "string.empty": "The e-mail is required",
        "string.email": "It must be a valid email",
    }),
    photo: joi.string().uri().messages({
        "string.uri": "Photo must be a valid URL"
    }),
    password: joiPwd({
        min: 4,
        max: 26,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        requirementCount: 4,
    }).messages({
        "string.empty": "Password is required",
        "passwordComplexity.tooShort": "The password should be at least 4 characters long",
        "passwordComplexity.uppercase": "The password should contain at least 1 upper-cased letter",
        "passwordComplexity.lowercase": "The password should contain at least 1 lower-cased letter",
        "passwordComplexity.numeric": "The password should contain at least 1 number",
    }),
    country: joi.string().min(0),
})