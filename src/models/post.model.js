const mongoose=require("mongoose");


const postschema = new mongoose.Schema({

    image:string,
    caption:string
})

const postmodel=mongoose.model("post",postschema)

module.exports=postmodel;
