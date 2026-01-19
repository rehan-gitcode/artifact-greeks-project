const mongoose=require("mongoose")
require("dotenv").config()

async function connect() {
    await mongoose.connect(process.env.DATABASE_URL)
    
}

module.exports=connect  

