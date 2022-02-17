const jwt = require('jsonwebtoken');
require('dotenv').config();

const segredo = process.env.SECRET || '18273hsgdu2837';

const OPTIONS = { expiresIn: '1d', algorithm: 'HS256' };

const newTokenGenerator = (user) => {
    const token = jwt.sign(user, segredo, OPTIONS);
    return token;
};

const verifyToken = (token) => {
    const veriToken = jwt.verify(token, segredo);
    return veriToken;
};

module.exports = { newTokenGenerator, verifyToken };