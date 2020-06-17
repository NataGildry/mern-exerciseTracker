const {exerciseService} = require('../services');
const Exercise = require('../model/Exercise');

module.exports = {
    getAllExercises: async (req, res) => {
        const exercises = await exerciseService.getExercises();
        res.json(exercises)
    },
    getExercise: async (req, res) => {
        const params = req.params.id;
        const exercise = await exerciseService.getExerciseById(params);
        res.json(exercise)
    },
    createExercise: async (req, res) => {
        try {
            console.log(req.body);
            const exercise = req.body;
            const {username,
                description,
                duration,
                date} = exercise;
            const candidate = await Exercise.findOne({username});
            if (candidate) {
                return res.status(400).json(
                    {message: 'Username already exists'})
            }
            await exerciseService.create(exercise);

        } catch (e) {
            res.status(500).json({message: 'Something went wrong. User Registration failed'})
        }
        res.status(201).json({message: 'Exercise have been created'});
    },
    deleteExercise: async (req, res) => {
        try {
            const params = req.params.id;
            await exerciseService.getExerciseByIdAndDelete(params);
        } catch (e) {
            res.status(500).json({message: 'Something went wrong.'} + e)
        }
        res.status(201).json({message: 'Exercise have been deleted'});
    },
    updateExercise: async (req, res) => {
        try {
           const id = req.params.id;
            const exercise = req.body;
            await exerciseService.update(id, exercise);
        } catch (e) {
            res.status(500).json({message: 'Something went wrong. Exercise updating failed'})
        }
        res.status(201).json({message: 'Exercise have been updated'});
    },
};
