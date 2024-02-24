import mongoose, { Schema } from "mongoose";

const complainSchema = new mongoose.Schema({
    name: {type: String},
    complaint_number : {type: String},
    by: { type: Schema.Types.ObjectId, ref: 'vendors' },
    against: { type: Schema.Types.ObjectId, ref: "vendors" },
    description: { type: String },
    complain_doc: { type: String },
    resolve : {type:String} ,
    status: { type: String },
    floor: { type: String },
    area: { type: String },
    department: { type: String },
    priority: {type:String},
    created: { type: Date, default: Date.now() },
    modified_date: { type: Date }
})

export default mongoose.model('Complain', complainSchema)