import mongoose from "mongoose";

const vendorInvoiceSchema = new mongoose.Schema({
    month: String,
    dateofpay: Date,
    pay_status : String,
    amnt_receive : Number,
    date_paymentreceive: Date
})

export default mongoose.model('invoice',vendorInvoiceSchema)