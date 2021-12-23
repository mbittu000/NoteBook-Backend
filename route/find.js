const express=require('express')
const note=require('../model/Note')
const app=express.Router()
app.post('/',async (req,res)=>{
 let det=await note.findOne({id:req.body._id})
 res.send(det.note)
 console.log(det)
  
})
module.exports=app