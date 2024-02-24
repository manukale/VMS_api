import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    // created_client: String,
    sr_no:Number,
    question:String,
   vendor:String,
    date: {type:Date, default:Date.now()}
})

export default mongoose.model('feedback',feedbackSchema)