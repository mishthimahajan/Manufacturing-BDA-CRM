const mongoose=require("mongoose");

const leadSchema=new mongoose.Schema({

company:String,

contactPerson:String,

email:String,

status:String,

priority:String,

assignedTo:{

type:mongoose.Schema.Types.ObjectId,

ref:"User"

},

revenue:Number,

notes:String

},

{
timestamps:true
});

module.exports=
mongoose.model(
"Lead",
leadSchema
);