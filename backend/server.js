const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app = express();


app.use(cors({

origin:"http://localhost:5173"

}));


app.use(express.json());



const contactRoute = require("./routes/contact");


app.use("/contact", contactRoute);



app.listen(5000,()=>{

console.log("Backend running on 5000");

});