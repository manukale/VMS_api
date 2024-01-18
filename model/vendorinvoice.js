import mongoose from "mongoose";

const vendorInvoiceSchema = new mongoose.Schema({
    vendor:String,
    month: String,
    dateofpay: Date,
    pay_status : String,
    amnt_receive : Number,
    invoice_amnt : Number,
    deficient_amnt : Number,
    date_paymentreceive: Date
})

export default mongoose.model('invoice',vendorInvoiceSchema)