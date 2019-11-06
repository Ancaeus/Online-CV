const express=require('express')
const router=new express.Router()
const Skill = require('../models/skill')



router.get('/skills', async (req,res)=>{
    try{
    const skill = await Skill.find({})
    res.send(skill)
    }
  catch(e){
    res.status(500).send(e)
    }
})

router.get('/skill/:id',async (req,res)=>{
    const _id=req.params.id
    //console.log(_id)
    try{
    const skill= await Skill.findById(_id)
        if(!skill){
            return res.status(404).send()
        }
        res.send(skill)
    } catch(e) {
        res.status(500).send(e)
    }
})
router.get('/skill/name/:name',async (req,res)=>{
    const name=req.params.name
    if(name.length<=1){
        return res.status(400).send({error: "Please add a Skill in input"})
    } else{   
    try{
    const skill= await Skill.findOne({name})
    
        if(!skill){
            return res.status(404).send({error: "No Skill found"})
        }
        res.send(skill)
    } catch(e) {
        res.status(500).send(e)
        
    }
}
})


router.post('/skills',async (req,res)=>{
    console.log(req.body)
    const skill= await new Skill(req.body)
    try{
    
    
        skill.save()
        res.status(201).send(skill)
    } catch(e){
        res.status(400)
        res.send(e)
    }
})
router.patch('/skill/:id', async (req,res)=>{
    const updateFields=Object.keys(req.body)
    const allowedUpdates=['name','description','parent','knowledgeLevel']
    const isValidParam =updateFields.every((update)=>allowedUpdates.includes(update))
    
    if(!isValidParam){
        res.status(404).send({error: 'Not allowed Field to Update!'})
    }
    try{
    //const task=await Task.findByIdAndUpdate(req.params.id, req.body,{runValidators:true, new:true})
    const skill=await Skill.findById(req.params.id)
    if(!skill){
        return res.status(404).send()
    }
    updateFields.forEach((update)=>task[update]=req.body[update])
    await skill.save()
    
    
        res.send(skill)
    }catch(e){
        res.status(400).send(e)

    }

})
router.delete('/skill/:id' , async(req,res)=>{
    
    try{
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!skill){
        res.status(404).send()
    }
    res.send(skill)
    }catch(e){
        res.status(400).send(e)
    }


})

module.exports=router