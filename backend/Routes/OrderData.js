const express = require("express");
const router = express.Router();
const Order = require('../models/Orders')
router.use(express.json())




router.post('/orderData', async(req,res)=>{
    let data=req.body.order_data
 
     await data.splice(0,0,{ order_data:req.body.order_data})
 
    //if email is not existing in db then create: else=>InsertMany()
    let eid=await Order.findOne({'email':req.body.email})
    // console.log(eId);
    if(eid===null){
        try {
            await Order.create({
                email:req.body.email,
                order_data:[data]
            }).then(()=>{
                res.json({success:true})
            })
        } catch (error) {
            console.log(error.message);
            res.send("server error")
        }
    }
    else{
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:data}}).then(()=>{
                    res.json({success:true})
                })
        } catch (error) {
            console.log(error.message);
            res.send("server error")
        }
    }
})


router.post('/myorderData', async (req, res) =>{
try {
    let myData=await Order.findOne({'email':req.body.email})
    res.json(myData)
    console.log(myData);
} catch (error) {
    res.send("server error")
}
})

module.exports=router;