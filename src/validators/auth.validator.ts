import Joi from "joi";
import { UserType } from "../types/enums/user";

export default class AuthValidator {
    
    static signup(data: any): Joi.ValidationResult {
        const schema = Joi.object().keys({
            fullname: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            userType: Joi.string().valid('Lecturer', 'Student').required(),
        });
        return schema.validate(data);
    }
    
    static verify(data: any): Joi.ValidationResult {
        const schema = Joi.object().keys({
            otpCode: Joi.string().required(),
        });
        return schema.validate(data);
    }

    static login(data: any): Joi.ValidationResult {
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        });
        return schema.validate(data);
    }
    static forgotPassword(data: any): Joi.ValidationResult {
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
        });
        return schema.validate(data);
    }

    static resetPassword(data: any): Joi.ValidationResult {
        const schema = Joi.object().keys({
            otpCode: Joi.string().required(),
            password: Joi.string().required(),
            passwordConfirm: Joi.string().required(),
        });
        return schema.validate(data);
    }

}
