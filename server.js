var express = require('express');
const mongoose  = require('mongoose')

const mongoUrl = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("connected to mongodb");
});

const db = mongoose.connection;

var app = express();



app.get('/', function (req, res) {
   res.send('jackpot data');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

db.on('error', (err,res)=>{ 
    console.log('MongoDB connection error:', err)
    }
);

// db.on("connected", (err, res)=>{
//     console.log("mongoose is connected");
// })
