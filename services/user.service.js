const User = require('../model/User');
const {hashPassword} = require('../helpers');

module.exports = {
    getUsers: () => {
        return User.find({});
    },
    createUser: async (user) => {
        const {email, password, username} = user;
        const hashedPassword = await hashPassword(password);
        const newUser = new User ({email, password:hashedPassword, username});
        return await newUser.save(user);
    }
};
