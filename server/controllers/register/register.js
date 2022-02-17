const User = require('../../models/user.model');
const ApiError = require('../../error/error');

const {NewError} = ApiError;

const createUser = async (req, res) => {
    console.log(req.body, 'reqbody')
    const {name, email, password} = req.body;
       const user = await User.create({
            name,
            email,
            password
        })
        return res.status(201).json(user);
};

module.exports = { createUser };