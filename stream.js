const fs=require('fs')
// fs.readFile('./files/blog.txt',(error,content)=>{
//     if(error)
//         console.log(error)
//     console.log(content.toString())
// })
// read stream + Write stream
const StreamRead=fs.createReadStream('./files/blog.txt')
const StreamWrite=fs.createWriteStream('./files/blog1.txt')

// StreamRead.on('data',(chunck)=>{
//     console.log('\n-------new chunk to read------\n')
//     console.log(chunck.toString())
//     StreamWrite.write('\na new chunck to write\n')
//     StreamWrite.write(chunck);
//})
//piping
 StreamRead.pipe(StreamWrite)

