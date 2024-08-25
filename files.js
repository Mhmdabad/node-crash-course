//files
const fs=require('fs')
//read files
// fs.readFile('./files/fileToEdit.txt',(error,content)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(content.toString())
//     }
// })

//writing files
// fs.writeFile('./files/fileToEdit.txt','hello world',()=>{
//     console.log('file was written')
// })

//directories
// if(!fs.existsSync('./NewDIR')){
// fs.mkdir('./NewDIR',(error)=>{
//     if(error)
//     console.log(error)
//     console.log("the folder was created")
// })
// }
// else{
//     fs.rmdir('./NewDIR',(error)=>{
//         if(error)
//         console.log(error)
//     console.log("the folder was removed")
//     })
// }


//deleting files
if(fs.existsSync('./NewDIR/FileToRemove.txt'))
{
    fs.unlink('./NewDIR/FileToRemove.txt',(error)=>{
        if(error)
            console.log(error)
        console.log("the file was removed")
    })
}