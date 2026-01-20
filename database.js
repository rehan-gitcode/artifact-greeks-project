const mongoose=require("mongoose")
// require("dotenv").config()

async function connect() {
    await mongoose.connect("mongodb+srv://royalrehan143:royalrehan786@rehandbms.ydrrpsn.mongodb.net/database3")
    
}

module.exports=connect    

