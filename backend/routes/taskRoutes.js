const router = require("express").Router();

const Task = require("../models/Task");

router.get("/", async (req,res)=>{

try{

const tasks = await Task.find()
.populate("assignedTo");

res.json(tasks);

}
catch(err){

res.status(500).json({
message:err.message
});

}

});

router.post("/", async(req,res)=>{

try{

const task = await Task.create({

title:req.body.title,

assignedTo:req.body.assignedTo,

progress:req.body.progress,

deadline:req.body.deadline

});

res.status(201).json(task);

}
catch(err){

res.status(500).json({
message:err.message
});

}

});

router.put("/:id", async(req,res)=>{

try{

const task = await Task.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.json(task);

}
catch(err){

res.status(500).json({
message:err.message
});

}

});

router.delete("/:id", async(req,res)=>{

try{

await Task.findByIdAndDelete(
req.params.id
);

res.json({
message:"Task deleted"
});

}
catch(err){

res.status(500).json({
message:err.message
});

}

});

module.exports = router;