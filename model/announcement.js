import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    // created_client: String,
    created_by:String,
    vendor_note: String,
    client_note: String,
    date: {type:Date, default:Date.now()}
})

export default mongoose.model('announcement',announcementSchema)