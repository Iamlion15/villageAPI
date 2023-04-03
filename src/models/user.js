import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema ({
    firstName: String, 
    lastName: String, 
    nID: {
        type: Number, 
       
    },
    phone:  {
        type: Number, 
       required:[true, 'Please Enter a user Phone number']
    }, 
    email: {
        type: String, 
        require: [true, 'please proved a email'], 
        unique: true, 
        lowercase: true, 
        validate: [validator.isEmail, 'Please Provide a valid Email']
        
    },
    role: {
        type: String, 
        default: "citizen",
        enum: ["citizen", "mudugudu", "admin"],
        select : false
    }, 
    password: {
        type: String, 
       required: [true, 'Please Provide a Password'], 
        minlength: 8,
        select: false
    }
})

const User = mongoose.model('User', userSchema)

export default User