const ApiError = require('../error/error');
const { newTokenGenerator } = require('../controllers/jwt/jwt');
const User = require('../models/user.model');

const { NewError } = ApiError;

const isNameValid = (req, _res, next) => {
    const { name } = req.body;
    if (name.length < 4 || typeof name !== 'string') {
        return NewError(400, 'Name must be at least 4 characters long');
    }
    return next();
};

const isEmailValid = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[a-zA-Z0-9.\-_]+@[a-z]+\.[a-z]+$/;
   
    if (!email) {
        NewError(400, 'Email field is required');
    }

    if (!emailRegex.test(email)) {
        NewError(400, 'The inserted email must be valid');
    }
    return next();
};

const isPasswordValid = async (req, res, next) => {
    const { password, email } = req.body;
    if (!password) {
        NewError(400, 'Password field cannot to be empty');
    }
    if (!password.length >= 6) {
        NewError(400, 'Password length must at least 6 characters long');
    }
    const user = await User.findOne({ where: { email: email} });

    if (user.email === email) {
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
        NewError(400, 'Email field cannot to be empty');
    }
    if (!email) {
        NewError(400, 'Email is required');
    }

    return next();
};

const passwordLoginValidation = (req, res, next) => {
    const { password } = req.body;
    if (password === '') {
        NewError(400, 'Password field cannot to be empty');
    }
    if (!password) {
        NewError(400, 'Password is required');
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

const taskNameValidation = (req, res, next) => {
    const { taskName } = req.body;
    if (!taskName) {
        return NewError(400, 'You must give your task a name');
    }
    return next();
};

const taskContentValidation = (req, res, next) => {
    const { taskContent } = req.body;
    if (!taskContent) {
        return NewError(400, 'You must write some content in this field');
    }
    return next();
};

const taskPriorityValidation = (req, res, next) => {
    const { priority } = req.body;
    if (priority.toLowerCase() !== 'yes' && priority.toLowerCase() !== 'no') {
        return NewError(400, 'This field must receive yes or no');
    }
    return next();
};

const taskCategoryValidation = (req, res, next) => {
    const { taskCategory } = req.body;
    if (!taskCategory) {
        return NewError(400, 'You must inform a category');
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
    taskNameValidation,
    taskContentValidation,
    taskPriorityValidation,
    taskCategoryValidation
}