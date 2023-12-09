const userModel = require('../models/user');


// LoginAPI
const login = async (req, res) => {
    try {
        const userData = req.body;
        const user = await userModel.findOne({username: userData.username, password: userData.password, role:'admin'});
        
        if (!user) {
            return res.status(404).send('Blog not found');
        }
        
        res.status(200).send({status: "Blog data get Sucessfully", data: user});
    } catch (error) {
        console.error('Error getting blog:', error);
        res.status(500).send('Internal Server Error');
    }
};


module.exports = {login}