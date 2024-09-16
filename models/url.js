const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
    shortId: {type: String, required: true,unique:true},
    redirectUrl: {type: String, required: true},
    visitHistory: [{timestamp : {type:Number}}]
},{timpstamps:true});

module.exports=mongoose.model('url',urlSchema);