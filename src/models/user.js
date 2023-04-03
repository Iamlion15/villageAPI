import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    firstName: String, 
    lastName: String, 
    phone:  {
        type: Number, 
       required:[true, 'Please Enter a user Phone number']
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