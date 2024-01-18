import mongoose, { Schema } from "mongoose";

const contractSchema = new mongoose.Schema({
    date_contract: { type: Date },
    validity: { type: Date },
    po_date:{type:Date},
    po_validity:{type:Date},
    date_renewal:{type:Date},
    date_renewal_po:{type:Date},
    pdf:String

})

export default mongoose.model('contract', contractSchema)