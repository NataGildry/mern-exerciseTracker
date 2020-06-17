const {Router} = require('express');
const exerciseRouter = Router();
const {exerciseController} = require('../controllers');


exerciseRouter.get('/', exerciseController.getAllExercises);
exerciseRouter.post('/add', exerciseController.createExercise);
exerciseRouter.get('/:id', exerciseController.getExercise);
exerciseRouter.delete('/:id', exerciseController.deleteExercise);
exerciseRouter.post('/update/:id', exerciseController.updateExercise);



module.exports = exerciseRouter;
