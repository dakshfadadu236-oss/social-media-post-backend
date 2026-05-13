const express=require("express");
const multer=require("multer");
const uploadfile=require("./services/storage.service");
const postmodel=require("./models/post.model");

const app=express();
app.use(express.json());

const upload=multer({storage:multer.memoryStorage()})

app.post('/create-post', upload.single("image"),async( req,res)=>{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadfile(req.file.buffer)
    const post = await postmodel.create({
        image:result.url,
        caption:req.body.caption
    })

    return res.status(201).json({
        message:"post created successfully",
        posts
        
    })
})

app.get("/posts",async(req,res)=>{
    const posts=await postmodel.find()

    return res.status(200).json({
        message:"posts fetched successfully",
        posts
       
    
    })
})


module.exports=app;
