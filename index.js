const express = require("express")
const app = express()

app.use("/", (req,res)=>{
    return res.send("Hello from home page.")
})

app.listen(8080,()=>{
    console.log(`Server started`)
})