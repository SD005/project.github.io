const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const collection=require("./mongodb");


const templatePath=path.join(__dirname,'../templates');

app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    res.render("login");
}); 

app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.get("/home",(req,res)=>{
    res.render("home");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.get("/product",(req,res)=>{
    res.render("product");
});

app.get("/research",(req,res)=>{
    res.render("research");
});

app.get("/bg",(req,res)=>{
    res.sendFile("C:/Users/SOUMYAJIT/xenonstack/public/images/tyt.jpg");
});

app.get("/tt",(req,res)=>{
    res.sendFile("C:/Users/SOUMYAJIT/xenonstack/public/images/soft4.jpg");
});


app.get("/st",(req,res)=>{
    res.sendFile("C:/Users/SOUMYAJIT/xenonstack/public/images/soft1.jpeg");
});

app.get("/qt",(req,res)=>{
    res.sendFile("C:/Users/SOUMYAJIT/xenonstack/public/images/soft3.jpg");
});

app.get("/pt",(req,res)=>{
    res.sendFile("C:/Users/SOUMYAJIT/xenonstack/public/images/soft2.jpg");
});

app.get("/hcs",(req,res)=>{
    res.sendFile("C:/Users/SOUMYAJIT/xenonstack/public/home.css");
})


app.post("/signup",async (req,res)=>{

    const data={
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data]);
    res.render("home");
})

app.post("/login",async (req,res)=>{

    try{
const check=await collection.findOne({name:req.body.name});
if(check.password===req.body.password){
    res.render("home")
    }
    else{
        res.send("wrong password");
    }
}
    catch{
res.send("<h1>wrong details<h1><br><h2>Try Again<h2><a href='/signup'>Make new profile</a><br><a href='/'>or login again</a>")
    }
})


app.listen(8080,()=>{
    console.log("port connected");
});

