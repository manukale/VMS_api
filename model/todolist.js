import mongoose, { Schema } from "mongoose";

const todolistSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: "users" },
    vendor: { type: Schema.Types.ObjectId, ref: "vendors" },
    checklistid:{ type: Schema.Types.ObjectId, ref: "createChecklist" },
    checklistname:String,
    todochecklist: [{
        check: String,
        status: String,
        comment: String
    }],
    created_date: { type: Date, default: Date.now },
    status:{type:String,default:'Completed'}
})

export default mongoose.model('todolist', todolistSchema)