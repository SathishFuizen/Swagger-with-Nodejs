const mongoose=require("mongoose")

const connectdb=async()=>{
    try{
    await mongoose.connect("mongodb+srv://nimmanasathish31:Sathish1234@cluster0.acerk3g.mongodb.net/",{
        useNewUrlParser: true,
            useUnifiedTopology: true,
    })
        console.log("db connected....")
    
    }catch(err){
        console.log(err,"db is not connected...")
    }

}

module.exports=connectdb