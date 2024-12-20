const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://shubhamsharma639615:admin0000@cluster0000.swksl.mongodb.net/userss>?retryWrites=true&w=majority")

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
})


const userModel = mongoose.model('user',userSchema);

module.exports = userModel;