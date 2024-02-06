const mongoose=require("mongoose")
const employeeSchema=new mongoose.Schema({
    Username : {
        type:String,
        required: true
    },
    Password : {
        type:String,
        required: true
    },
     Email : {
        type:String,
        required: true,
        unique:true
    },
    ContactNumber : {
        type:Number,
        required: true,
        unique:true
    },
    Gender : {
        type:String,
        required: true
    },
    Address : {
        type:String,
        required: true
    }
})
// now we need to create collection

const Register= new mongoose.model("Register",employeeSchema )
module.exports=Register