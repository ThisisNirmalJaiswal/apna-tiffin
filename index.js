const express = require('express');
const mongoose = require('mongoose');
const route = require('./src/routes');
const app = express();

app.use(express.json());


app.use('/', router);
app.listen(3000, ()=>{
    console.log("server is running on http://localhost:3000")
})