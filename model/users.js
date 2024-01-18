import mongoose, { Schema } from "mongoose";
const userSchema =new mongoose.Schema({
    name:String,
    // username:String,
    password:String,
    emp_id: Number,
    email: String,
    designation: String,
    mobile_no : Number ,
    profile_photo:String ,
    vendor:{type:Schema.Types.ObjectId, ref:'vendors'},
    access_right : {
        
        // add_checklist  :{type:Boolean, default:false},
        admin          :{type:Boolean, default:false},
        create_user    :{type:Boolean, default:false},
        create_vendor  :{type:Boolean, default:false},
        // create_task    :{type:Boolean, default:false},
       vendor_invoice    :{type:Boolean, default:false},
        vendor_manning    :{type:Boolean, default:false},
        announcement    :{type:Boolean, default:false},
        vendor_contract    :{type:Boolean, default:false},
    }
    
})
export default mongoose.model('users',userSchema)