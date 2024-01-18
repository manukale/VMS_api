import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
    task_number : {type:String} , 
    vendor_name:{type: String},
    task_name: { type: String },
    task_description: { type: String },
    assign_by_org: {type:String},
    assignedBy: { type: Schema.Types.ObjectId, ref: 'users' },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'users' },
    floor: { type: String },
    area: { type: String },
    department: { type: String },
    priority: {type:String},
    status: { type: String, default: "Pending" },
    expected_comp_date : {type: Date},
    resolution: {type: String} ,
    created_date: { type: Date, default: Date.now() },
    file:String,
})

export default mongoose.model('task', taskSchema)