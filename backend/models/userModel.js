const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({

        email: {
            type: String,
            required: true,
            //only allows for one email address
            unique: true,

        },

        password:{
            type: String,
            required: true

        }


})

module.exports = mongoose.model('User', userSchema)
