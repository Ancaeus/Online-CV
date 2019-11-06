const express=require('express');
require('../db/mongoose')
const path= require('path')
const fs= require('fs');
const hbs=require('hbs');
const app= express()

//const User=require('./models/user')

//const userRouter=require('./routers/user')
const skillRouter=require('../routers/skill')
const config= require('./../config/server.json')
const port = process.env.PORT || 3000

const maintenanceMode=config.maintenanceMode

app.use((req,res,next)=>{
 if(maintenanceMode==true){
     res.status(503).send('The website is on maintenance mode!')
 }else{
     next()
 }
})




const publicDirectoryPath=(path.join((__dirname),'../public'));
const publicViewsPath = (path.join((__dirname),'../templates/views'));
const partialsPath =(path.join((__dirname),'../templates/partials'));




//setup handlebars engine and views location

app.set('view engine', 'hbs')
app.set('views',publicViewsPath)

hbs.registerPartials(partialsPath)


//Setup static directory to use
app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(skillRouter)


app.get('',(req,res)=>{
    res.render('index',{
        title:'Georgios Alexandrou CV',
        description: 'Georgios Alexandrou Skills'
    })

})

app.listen(port,()=>{

    console.log('Server is up on port' + port)

})