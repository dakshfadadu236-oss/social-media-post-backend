require("dotenv").config();
const app=require("./src/app");
const connectDB=require("./src/db/db");

connectDB();

app.listen(236236,()=>{

    console.log("server is running.....");

})
