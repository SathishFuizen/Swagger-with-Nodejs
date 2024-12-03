const express=require("express")
const mongoose=require("mongoose")
const app=express()
const router=require("./routes")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

 app.use(express.json())


app.use(router)

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

 


app.listen(3001,()=>{
    console.log("server running on port number 3000")
})