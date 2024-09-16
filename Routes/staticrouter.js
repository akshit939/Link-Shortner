const express = require('express');
const { route } = require('./url');

const router = express.Router();


router.get('/',async(req,res)=>{
    const allurls=await Url.find({});
    res.render('views',{urls:allurls});
}); 





module.exports = router;