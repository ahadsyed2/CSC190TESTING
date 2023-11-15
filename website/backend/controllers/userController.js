const User = require('../models/userModel')
const jwt = require ('jsonwebtoken')


const createToken = (_id) => {

        //id from signup/login object, secret , and expires in 3 days
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d' })
}


//login user, FIRED FROM USERROUTES
const loginUser = async (req,res) => {
    const {email,password} = req.body

    try{
        
        //return user if sucessful from model : signup
        const user = await User.login(email,password)

        //if succesful: create token user id used as param
        const token = createToken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//signup user, fired from userRoutes
const signupUser = async (req,res) => {


    //grab email and password from POST body request
    const {email, password } = req.body

    try{
        //shoots signup function in model with email and password from req body, 
        //returns user
        const user = await User.signup(email,password)

        //if succesful: create token user id used as param
        const token = createToken(user._id)
        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    
}

module.exports = {loginUser,signupUser}