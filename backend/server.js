const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const authRoutes=require("./routes/authRoutes");
const leadRoutes=require("./routes/leadRoutes");
const taskRoutes=require("./routes/taskRoutes");

const app=express();

app.use(
cors({
origin:"*"
})
);

app.use(express.json());

app.get("/",(req,res)=>{

res.send("Backend Running");

});

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/leads",
leadRoutes
);

app.use(
"/api/tasks",
taskRoutes
);

const PORT=
process.env.PORT||5000;

mongoose.connect(
process.env.MONGO_URI
)

.then(()=>{

console.log(
"Mongo Connected"
);

app.listen(
PORT,
()=>{

console.log(
`Server ${PORT}`
);

});

})

.catch(err=>{

console.log(err);

});