const weatherForm=document.querySelector('form')
const search = document.querySelector('input')
const messageOne= document.querySelector('#message-1')
const messageTwo= document.querySelector('#message-2')
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

weatherForm.addEventListener('submit',(e)=>{

messageOne.textContent='Loading...'
messageTwo.textContent='' 
    e.preventDefault()
const name= search.value;
if(name.length==0){
    return messageOne.textContent="Enter an input"
}


console.log(name)



       
        //   function Test(id){
        //   //path=
     
     function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}     
         
fetch('/skill/name/'+ name).then((response)=>{
    
response.json().then((data) =>{
    if (data.error){
       return messageOne.textContent=data.error
        
    }else{
        
        

       messageOne.textContent=data.name
       messageTwo.textContent=data.description
       var bar=""
       delete bar
        var bar = new ldBar("#myItem2", {
            "path" : data.pngOrSVG,
            "value": "0",          
            "type" : "fill", //TODO  get data.type
            "fill-dir": "ttb"
            
        })
   
        console.log(data.pngOrSVG)
         //bar.path(data.pngOrSVG)
         //bar.set({"path":data.pngOrSVG})
        bar.set(0);
             
             //bar.set(30)                 
           bar.set(data.knowledgeLevel);
            
}
})


})

})