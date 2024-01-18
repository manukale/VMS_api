import mongoose from "mongoose";

const vendorManning = new mongoose.Schema({
    serial_no:Number,
    vendor:String,
    position: String,
    boq: Number,
    deputed_date : Date,
    deployed_qty : Number,
    deficiency: Number,
    surplus: Number
})

export default mongoose.model('manning',vendorManning)