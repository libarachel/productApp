const express = require('express');
const mongoose=require('mongoose');




const productData = require('./src/model/Productdata');
const User = require('./src/model/userdata');
const cors =  require('cors');
var bodyparser = require('body-parser');

const jwt=require('jsonwebtoken');
var app = new express();

app.use(bodyparser.json());
app.use(cors());

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token ==='null'){
        return res.status(401).send('unauthorized request')
    }
        let payload =jwt.verify(token,'secretkey')
        if(!payload){
            return res.status(401).send('unauthorized request')
        }
        req.userId =payload.subject;
        
  next()
    }
app.get('/products',function(req,res){
    res.header("Access-control-Allow-Origin","*")
    res.header("Access-control-Allow-Methods : GET ,POST ,POTCH ,PUT ,DELETE ,OPTIONS");
    productData.find()
              .then(function(products){
res.send(products);
              });

});
 app.post('/insert', function(req,res){
     res.header("Access-control-Allow-Origin","*")
     res.header("Access-control-Allow-Methods : GET ,POST ,POTCH ,PUT ,DELETE ,OPTIONS");
     console.log(req.body);
            var product ={

                productId: req.body.product.productId,
                productName: req.body.product.productName,
                productCode: req.body.product.productCode,
                releaseDate: req.body.product.releaseDate,
                description: req.body.product.description,
                price: req.body.product.price,
                starRating: req.body.product.starRating,
                imageUrl: req.body.product.imageUrl
            }
var product =new productData(product);
product.save();
 });
app.delete('/delete/:id',(req,res) =>{
    productData.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send(doc);
            console.log('deleted product');
        }
    })
})

app.post('/register',(req, res) => {
    let userdata =req.body
 let user = new User(userdata)
 user.save((err ,registeredUser) => {
        if(err){
            console.log(err)
        }
        else{
            let payload ={subject: user._id}
            let token= jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    })
})
app.post('/login',(req,res)=>{
    let userdata =req.body
    User.findOne({email:userdata.email }, (err,user) =>{
        if(err){
            console.log(err)
        }else{
            if(!user) {
                res.status(401).send('invalid email')
            }
            else
            if(user. password != userdata.password){
               res.status(401).send('invalid password')
            }else{
                let payload ={subject: user._id}
            let token= jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
            }

            }
        
    })
})
app.listen(3000,function(){
    console.log('listening to port 3000');
})