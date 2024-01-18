import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    vendor_name: String,
    contact_no:Number,
    email: String,
    service:String,
    address:String
})

export default mongoose.model('vendors',vendorSchema)