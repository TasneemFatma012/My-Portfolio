const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");


router.post("/", async(req,res)=>{


try{


const {name,email,message}=req.body;



const transporter = nodemailer.createTransport({

service:"gmail",

auth:{

user:process.env.EMAIL,

pass:process.env.PASSWORD

},


tls:{

rejectUnauthorized:false

}


});




await transporter.sendMail({


from:process.env.EMAIL,


to:process.env.EMAIL,


subject:"Portfolio Contact Message 🚀",


text:

`
Name: ${name}

Email: ${email}

Message: ${message}

`


});




res.status(200).json({

success:true,

message:"Message sent"

});



}

catch(error){


console.log("EMAIL ERROR 👉",error);


res.status(500).json({

success:false,

message:error.message

});


}



});



module.exports = router;