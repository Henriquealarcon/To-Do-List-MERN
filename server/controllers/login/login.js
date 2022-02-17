const newLogin = async (req, res) => {
    const {token} = req;
    return res.status(200).json({ token });
    }

module.exports = {newLogin}