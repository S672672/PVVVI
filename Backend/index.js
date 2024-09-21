const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = require('authRoutes')


app.use('/api/auth',authRoutes)
const port = 
app.listen((req,res)=>{
    console.log(`server is listening on the ${port}`);
})