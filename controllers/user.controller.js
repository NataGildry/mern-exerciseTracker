const {userService} = require('../services');
const User = require('../model/User');


module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userService.getUsers();
        res.json(users)
    },
    createUser: async (req, res) => {
        try {
            const user = req.body;
            const {email, password, username} = user;
            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json(
                    {message: 'Username already exists'})
            }
            await userService.createUser(user);

        } catch (e) {
            res.status(500).json({message: 'Something went wrong. User Registration failed'})
        }
        res.status(201).json({message: 'User have been created'});
    }
};
