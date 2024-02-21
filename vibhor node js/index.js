const express = require('express');
//const cors = require("cors");

var app=express();
//middleware to 
app.use(express.urlencoded({extended:false}));
//app.use(cors());
const PORT = process.env.PORT || 5674;

console.log("index");
const alldata = require("./routes/alldata");
const update = require("./routes/update");
const adddata = require("./routes/adddata");
const deactive = require("./routes/deactivate");
const jwtgeneration = require("./routes/jwt");
const jwtverify= require("./routes/jwtverify");
const jwtreferess= require("./routes/jwtreferess");
//const trigger= require("./routes/trigger");

//routes
app.use('/alldata', alldata);
app.use('/update', update);
app.use('/adddata', adddata);
app.use('/deactive', deactive);
app.use('/jwtgeneration', jwtgeneration);
app.use('/jwtverify', jwtverify);
app.use('/jwtreferess', jwtreferess);
//app.use('/trigger', trigger);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });