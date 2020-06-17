const {Schema, model} = require('mongoose');

const schema = new Schema ({
        username:{type:String, required:true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}
        },
    {
        timestamps:true,
    }
    );
module.exports = model('Exercise', schema);
