import mongoose, { Schema } from "mongoose";

const complainSchema = new mongoose.Schema({
    by: { type: Schema.Types.ObjectId, ref: "users" },
    against: { type: Schema.Types.ObjectId, ref: "vendors" },
    description: { type: String },
    status: { type: String },
    created: { type: Date, default: Date.now() },
    modified_date: { type: Date }
})

export default mongoose.model('Complain', complainSchema)