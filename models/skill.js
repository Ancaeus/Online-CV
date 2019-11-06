const mongoose= require('mongoose')
const validator=require('validator')
console.log()
const skillsSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    pngOrSVG:{
        type: String,
        require: true,
        trim: true

    },

    description: {
        type: String,
        required: true,
        trim: true

    },    
    category: {
        type: String,
        required: true,
        trim: true

    },
     knowledgeLevel: {
         type: Number,
         default: 0
    },
    parent:{
        type:Boolean,
        default:true
    },
    childof:{
        type:String,
        default: null
    }

         

    

    
})

skillsSchema.pre('save',async function(next){
    const skill = this
console.log(skill.toString())
    next()

})
const Skill= mongoose.model('Skill', skillsSchema)

module.exports=Skill