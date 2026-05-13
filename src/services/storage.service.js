const {ImageKit}=require("@imagekit/nodejs");

const imagekit=new imagekit({

    privateKey:process.env.IMAGEKIT_PRIVATE_KEY

})

async function uploadfile(buffer) {

    const result =await imagekit.client.upload({

        file:buffer.tostring("base64"),
        filename:"image.jpg"

    })

    return result;
}

module.exports=uploadfile();
