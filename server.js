const express=require("express")
const connect=require('./database')
const user=require("./models")
// const validuser=require("./validation")



const cors=require("cors")
// const dotenv=require(dotenv)


const app=express()
 
app.use(express.json());
app.use(cors());


app.post("/submit",async(req,res)=>{
    try{
     
        
        // validuser(req.body) 
          
       await user.create(req.body)
       res.status(200).json({message:"data submitted succesfully"})   

    }catch(err){
        res.status(400).json({Error:err.message})  
    }
    
})


app.get("/getdata",async(req,res)=>{

    try{

       const data= await user.find({})
       res.send(data)
        // res.status(200).json({ data,
        //     message:"data submitted succesfully"})   
    }
    catch(err){
        res.status(400).json({Error:err.message})  
    }
})


app.delete("/deletedata/:id",async(req,res)=>{

    try{

        const{id}=req.params 
        console.log(id)

        if(!id){
            res.status(400).json({message:"id mssing"}) 
        }
       const deleteuser= await user.findOneAndDelete(id)

         if(!deleteuser){
            res.status(400).json({message:"profile  mssing"})
        }
        res.status(200).json({message:"data deleted succesfully"})   
    }
    catch(err){
        res.status(400).json({Error:err.message})  
    }
})


app.put("/update/:id",async(req,res)=>{

    try{
          const{id}=req.params
            if(!id){
            res.status(400).json({message:"id mssing"}) 
        }


        const updateuser=await user.findByIdAndUpdate(id,{...req.body},{runValidators:true})
        
         if(!updateuser){
            res.status(404).json({message:"profile  mssing"})
        }

        res.status(200).json({message:"update succesfull"})   
    }
    catch(err){
        res.status(400).json({Error:err.message})  
    }
})







async function initializeConnection(){ 

    try{

      
          await connect();
         console.log("connect to db")
       

         app.listen(2000, () => {
            console.log("listing on server 2000")
        }) 

    }catch(err){
        console.log("Error"+err)
    }
}

initializeConnection()


