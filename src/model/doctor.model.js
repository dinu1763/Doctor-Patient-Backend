const { Schema, model } = require('mongoose');

const doctorSchema = new Schema({
    "first_name": { type: String, required: true },
    "last_name": { type: String, required: true },
    "email": { type: String, required: true },
    patient_id: [{
        type: Schema.Types.ObjectId,
        ref: 'patient',
        required: true
    }],
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model("doctor", doctorSchema); //doctor