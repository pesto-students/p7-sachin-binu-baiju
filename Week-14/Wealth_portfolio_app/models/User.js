const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },
    assets: {
        type: [String],
        default: []
      },
      equity: Number,
      fixedIncome: Number,
      alternatives: Number
})

module.exports = mongoose.model("Users",userSchema);