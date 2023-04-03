const joi = require("@hapi/joi");

const signupValidation = (data)=>{
    const schema =joi.object({
        name:joi.string().required(),
        email:joi.string().min(6).required(),
        password:joi.string().min(6).required(),
    })
    return schema.validate(data)
}
const loginValidation = (data)=>{
    const schema =joi.object({
        email:joi.string().min(6).required(),
        password:joi.string().min(6).required()
    })
    return schema.validate(data)
}

module.exports.signupValidation = signupValidation;
module.exports.loginValidation = loginValidation;
