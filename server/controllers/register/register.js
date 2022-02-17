const User = require('../../models/user.model');

const createUser = async (req, res) => {
    console.log(req.body, 'reqbody')
    const {name, email, password} = req.body;
       const user = await User.create({
            name,
            email,
            password
        })
        req.user = user.id;
        return res.status(201).json(user);
};

module.exports = { createUser };