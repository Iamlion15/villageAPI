

import User from './../models/user'
import hashedPassword from './../helpers/bcrypt'
exports.createUser =async (req, res, next) =>{
    try {
        const hashPassword = await hashedPassword(req.body.password);
      const newUser =   await  User.create({
        
            firstName: req.body.firstName, 
            lastName: req.body.lastName, 
            nID: req.body.nID,
            email: req.body.email,
            phone: req.body.phone,
            password: hashPassword
        })
        res.status(200).json({
            Status: 'Succeeded',
            newUser
        })
        
    } catch (error) {
        res.status(400).json({
            Status: 'failed', 
            error : error.message
            

        })
    }
   
}
exports.getAllUsers = async (req, res, next)=>{
    try {
       const result =  await User.find()
        res.status(201).json({
            Status: 'Okay', 
            result
        })
    } catch (error) {
        res.status(400).json({
            Status: 'failed', 
            error
        })
    }
}
