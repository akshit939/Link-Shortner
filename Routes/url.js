const express=require('express');
const {generateShortURL,getAnalytics}=require('../controller/url');
const router=express.Router();

router.get('/analytics',async(req,res)=>{
    res.send('Analytics');
});

router.post('/',generateShortURL,getAnalytics);

module.exports=router;