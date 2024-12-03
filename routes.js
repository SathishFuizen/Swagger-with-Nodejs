const express=require("express")
const router=express.Router()
const connectDB=require("./connectdb")
const userModel=require("./model")
const Student=require('./model')


router.post("/userInfo",async(req,res)=>{
    await connectDB();
    const {username,password}=req.body;
    try{
        const data=await userModel.create({username,password})
        console.log(data)
        res.status(200).json({
            message:"user created successfully",
           data
        })
    }catch(err){
        res.status(500).json({
            message:"user is not created"

        })
    }

})

router.get("/user",async(req,res)=>{
    await connectDB()
    try{
        const data= await userModel.find()
        res.status(200).json({
            message:"user recevied...",
            data
        })
    
    }catch(err){
        res.status(500).json({
            message:"user is not created"

        })
    }
  
})

router.put("/user/:id",async(req,res)=>{
    await connectDB();
    const {id}= req.params;
    const {username,password}=req.body;
    try{
        const data=await userModel.findByIdAndUpdate(id,{username,password},{new:true})
        if(!data){
            return res.status(400).json({
                message:"user not found"
            })
        }
        res.status(200).json({
            message:"user is updated...",
            data
        })
    }catch(err){
        res.status(500).json({
            message:"errrorr"
        })
    }

})

router.delete("/user/:id",async(req,res)=>{
    await connectDB();
    const {id}=req.params;
    try{
        const data=await userModel.findByIdAndDelete(id)
        if(!data){
            return res.status(400).json({
                message:"user is not found"
            })
        }
        res.status(200).json({
            message:"user delted successfully",
            data
        })
    }catch(err){
        res.status(500).json({
            message:"error"
        })
    }

})





router.post("/studentInfo",async(req,res)=>{
    await connectDB();
    const {name,rollno}=req.body;
    try{
        const data=await Student.create({name,rollno})
        console.log(data)
        res.status(200).json({
            message:"user created successfully",
            data
        })
    }catch(err){
        res.status(500).json({
            message:"user is not created"

        })
    }

})





module.exports=router;