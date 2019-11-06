const mongoose= require('mongoose')

const chalk= require('chalk')
uri = 'mongodb://127.0.0.1:27017/CV-api'

mongoose.connect(uri,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false,
        useUnifiedTopology: true
}).catch((error)=>{
    console.log(chalk.red('Could not connect to database !!'))
})