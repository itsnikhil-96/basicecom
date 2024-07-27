//create mini exp app
const exp=require('express');
const expressAsyncHandler = require('express-async-handler');
const productApp=exp.Router();

//product routes
productApp.get('/products',expressAsyncHandler(async(req,res)=>{
    //get products collection object
     let productsCollection=req.app.get('productsCollection')
     //read products
     let productsList=await productsCollection.find().toArray()
     //send res
     res.send({message:"products",payload:productsList});
    
    
}))

productApp.get('/products/:id',expressAsyncHandler(async(req,res)=>{
//get prodcall obj
let productsCollection=req.app.get('productsCollection')

let productId=Number(req.params.id)

let product=await productsCollection.findOne({id:productId})

res.send({message:"products",payload:product});

}))


//export
module.exports=productApp;
