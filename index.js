const express = require('express');
const employee = require('./routes/user');
const app= express();
app.use(employee);


app.listen(3000,(err)=>{
    if(err) console.log(err);
    console.log('server is running on port 3000');
})