const shortid = require('shortid');
const Url = require('../models/url');

async function generateShortURL(req, res) {
    const body=req.body;
    if(!body.url){
        return res.status(400).json({message:'redirectUrl is required'});
    }
const shortId=shortid();
await Url.create({
    shortId,
    redirectUrl:body.url   
});
return res.render('views',{
    id:shortId});
}


async function getAnalytics(req,res){
    const shortId=req.params.shortId;
    const Entry=await Url.findOne({shortId});
    
    return res.json({totalclicks:Entry.visitHistory.length,analytics:Entry.visitHistory});
}


module.exports= {generateShortURL,getAnalytics};