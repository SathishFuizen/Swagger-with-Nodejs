const mongoose=require("mongoose")

const userSchema=new  mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    }
})

const Student=mongoose.model("Student",studentSchema)

const User=mongoose.model("User",userSchema)
module.exports=User;
module.exports=Student