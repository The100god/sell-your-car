const mysql2 = require("mysql2");
const express = require("express");

const app = express();
app.use("/assets",express.static("assets"))

const connection = mysql2.createConnection( {
    host : 'localhost',
    user : 'root',
    password : 'Atomic3120',
    database : 'nodejs'
})

//connect to database
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to database successfully!")
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
//set app port
app.listen(4500)
