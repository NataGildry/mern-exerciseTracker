const {Router} = require('express');
const userRouter = Router();

const {userController} = require('../controllers');


userRouter.get('/', userController.getAllUsers);
userRouter.post('/add', userController.createUser);

module.exports = userRouter;
