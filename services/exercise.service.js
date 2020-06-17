const Exercise = require('../model/Exercise');

module.exports = {
    getExercises: () => {
        return Exercise.find({});
    },
    getExerciseById: (id) => {
        return Exercise.findById(id);
    },
    getExerciseByIdAndDelete: (params) => {
        return Exercise.findByIdAndDelete(params);
    },
    create: async (exercise) => {
        const {username,
            description,
            duration,
            date} = exercise;
        const newExercise = new Exercise ({username,
            description,
            duration,
            date});
        return await newExercise.save(exercise);
    },
    update:  (id, exercise) => {
        return Exercise.findByIdAndUpdate(
            {_id:id},
            {username:exercise.username,
                description:exercise.description,
                    duration: exercise.duration,
                    date:exercise.date},
            {upsert: true},
         function (err, res) {
            if(err){
                throw new Error('No updating')
            }else{
                console.log(res);
            }
        });
    }
};
