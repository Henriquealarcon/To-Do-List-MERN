const ApiError = require('../../error/error');
const { newTokenGenerator } = require('../jwt/jwt');
const User = require('../../models/user.model');

const { NewError } = ApiError;

const isNameValid = (req, _res, next) => {
    const { name } = req.body;
    if (name.length < 4 || typeof name !== 'string') {
        return NewError(400, '"name" length must be at least 4 characters long');
    }
    return next();
};

const isEmailValid = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[a-zA-Z0-9.\-_]+@[a-z]+\.[a-z]+$/;
   
    if (!email) {
        NewError(400, '"email" is required');
    }

    if (!emailRegex.test(email)) {
        NewError(400, '"email" must be a valid email');
    }
    return next();
};

const isPasswordValid = async (req, res, next) => {
    const { password, email } = req.body;
    if (!password) {
        NewError(400, '"password" is required');
    }
    if (password.length !== 6) {
        NewError(400, '"password" length must be 6 characters long');
    }
    const user = await User.findOne({ where: { email } });

    if (user) {
        return NewError(409, 'User already registered');
    }
    return next();
};

const tokenGenerator = (req, res, next) => {
    const { email, password } = req.body;
       req.token = newTokenGenerator({ email, password });
       return next();
   };

   const emailLoginValidation = (req, res, next) => {
    const { email } = req.body;
    console.log(email);
    if (email === '') {
        NewError(400, '"email" is not allowed to be empty');
    }
    if (!email) {
        NewError(400, '"email" is required');
    }

    return next();
};

const passwordLoginValidation = (req, res, next) => {
    const { password } = req.body;
    if (password === '') {
        NewError(400, '"password" is not allowed to be empty');
    }
    if (!password) {
        NewError(400, '"password" is required');
    }
    console.log(req.body, 'pass');
    return next();
};

const loginValidation = async (req, _res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!email || !password || !user) {
        return NewError(400, 'Invalid fields');
    }
    return next();
};

module.exports = {
    isNameValid,
    isEmailValid,
    isPasswordValid,
    tokenGenerator,
    loginValidation,
    emailLoginValidation,
    passwordLoginValidation,
}