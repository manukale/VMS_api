import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    vendor_name: String,
    vendor_note: String,
    client_note: String,
    date: {type:Date, default:Date.now()}
})

export default mongoose.model('announcement',announcementSchema)