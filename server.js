const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    // console.log('request made')
    // console.log(req.url,req.method)
    //set header
    res.setHeader('content-type','text/html')
    
    let path='./views/'
    if(req.url=='/')
        path+='index.html'
    else if(req.url=='/about')
        path+='about.html'
     else if(req.url=='/about-us')
     {
        //console.log('hello')
        res.setHeader('Location','/about')
        res.end()
    }
    else
    path+='404.html'
    //recive the html file
    fs.readFile(path,(error,content)=>{
        if(error)
        {
            console.log(error)
            res.end()
        }
       // res.write(content)
       console.log(path)
        res.end(content)
    })
    


})
server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000')
})