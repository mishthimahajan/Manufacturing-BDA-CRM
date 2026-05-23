const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{

res.send("Backend Running");

});

app.use(
"/api/auth",
require("./routes/authRoutes")
);

app.use(
"/api/leads",
require("./routes/leadRoutes")
);

app.use(
"/api/tasks",
require("./routes/taskRoutes")
);

const startServer = async()=>{

try{

await mongoose.connect(
process.env.MONGO_URI
);

console.log(
"Mongo Connected"
);

app.listen(
5000,
()=>{

console.log(
"Server running on port 5000"
);

});

}
catch(err){

console.log(err);

}

};

startServer();