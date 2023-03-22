const express = require('express');
const mongoose = require('mongoose');
const router=require("./routes/book-routes");
const cors=require('cors');


const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router);



mongoose.connect("mongodb+srv://admin:jRNbWry91k4nGznZ@cluster0.x4bgs23.mongodb.net/?retryWrites=true&w=majority"
).then(()=>console.log("DB connected")).then(()=>{
    app.listen(5000);
}).catch((err)=>{
    console.log(err);
});


// jRNbWry91k4nGznZ