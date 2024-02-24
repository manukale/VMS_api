import mongoose, { Schema } from "mongoose";

const feedbackDataSchema = new mongoose.Schema({

    date: Date,
    feedback_by: { type: Schema.Types.ObjectId, ref: 'vendors' },
    feedback_to: { type: Schema.Types.ObjectId, ref: 'vendors' },
    avrg_score: Number,
    feedback: [{
        question: String,
        answer: String
    }]
})

export default mongoose.model('feedbackData', feedbackDataSchema)