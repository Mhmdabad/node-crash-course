const express=require('express')
const mongoose=require('mongoose')
//express app
const app=express()
app.use(express.json())

mongoose.connect('mongodb+srv://MhmdAbad123:asd123@myfirstnodejscluster.wgujv.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstNodeJSCluster')
.then(()=>{
    console.log("connected successfully")
})
.catch((error)=>{
    console.log("error with connecting with the database",error)
})
//mongodb+srv://MhmdAbad123:<db_password>@myfirstnodejscluster.wgujv.mongodb.net/?retryWrites=true&w=majority&appName=MyFirstNodeJSCluster

const Article=require("./models/Article")
const user=require("./models/user")
//resgister view engine
app.set('view engine','ejs')
//listen for request
app.listen(3000)

app.get('/',(req,res)=>{
    // res.send('<p>home page from app</p>')
    //res.sendFile('./views/index.html',{root:__dirname})
    res.render('index')
})

app.get('/about',(req,res)=>{
    // res.send('<p>about page from app</p>')
   // res.sendFile('./views/about.html',{root:__dirname})
    res.render('about')
})

//redirect
app.get('/blogs/create',(req,res)=>{
   
   res.render('create')

})

app.get('/numbers',(req,res)=>{
    let output='';
   for(let i=0;i<100;i++)
   {
    output+=`${i},`
   }
    // res.send(`numbers are ${output}`)
    res.render("numbers.ejs",{
        name:"mohammed",
        numbers:output

    })
 
 })

 //get parms
app.get("/sum/:num1/:num2",(req,res)=>{
    //console.log(req.params)
    number1=req.params.num1
    number2=req.params.num2
    sum=Number(number1)+Number(number2)
    res.send(`the sum of the two numbers is ${sum}`)
})

app.get("/ShowDetails",(req,res)=>{
    res.send(`your name is ${req.body.name},year is ${req.query.year}`)
    console.log(req.query)
    // console.log(req.body)
})
//articles
app.post("/articles",async(req,res)=>{
    const newArticle=new Article();
    const articleTitle=req.body.articleTitle
    const articleBody=req.body.articleBody


    newArticle.title=articleTitle
    newArticle.body=articleBody
    
    newArticle.numberOfLikes=0
    await newArticle.save()
    res.json(newArticle)
})

app.post("/FindArticles",async(req,res)=>{
    const ArticleFind=await Article.find();
    res.json(ArticleFind)
})

app.post("/FindArticleID/:ArticleID",async(req,res)=>{
    const ID=req.params.ArticleID
    const ArticleFindID=await Article.findById(ID)
    res.json(ArticleFindID)
})
app.delete("/deleteArticleID/:ArticleID",async(req,res)=>{
    const ID=req.params.ArticleID
    const ArticleFindID=await Article.findByIdAndDelete(ID)
    res.json(ArticleFindID)
})

app.get("/showArticles",async(req,res)=>{
     const Articles=await Article.find()
    res.render("articles.ejs",{
        allArticles:Articles
    })
})
//blogs
app.get("/showBlogs",(req,res)=>{
    //const Articles=await Article.find()
    const blogs=[{title:"blog number 1",snippet:"Lorem 1"},
        {title:"blog number 2",snippet:"Lorem 2"},
        {title:"blog number 3",snippet:"Lorem 3"}
    ]
   res.render("blogs.ejs",blogs)
})
//login
app.get("/login",(req,res)=>{
   res.render("login.ejs")
    
})
//404
app.use((req,res)=>{
   // res.status(404).sendFile('./views/404.html',{root:__dirname})
   res.status(404).render('404')
})
