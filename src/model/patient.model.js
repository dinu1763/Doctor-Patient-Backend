const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
    "first_name": { type: String, required: true },
    "last_name": { type: String, required: true },
    "medicine": [{ type: String }],
    "medicine_count": { type: Number },
    "gender": { type: String, required: true },
    "age": { type: Number, required: true },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("patient", patientSchema); //patients