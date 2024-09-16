const express=require('express');
const app=express();
const router=require('./Routes/url');
const connect=require('./connection');
const Url=require('./models/url');
const mongoose=require('mongoose');
const path = require('path');
const staticrouter=require('./Routes/staticrouter');


app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

app.get( '/',async (req, res) => {
    const allUrls = await Url.find({});
    return res.render('views', { urls:allUrls });
})

connect('mongodb://localhost:27017/urldb').then(async connection=>{
    console.log('Connected to database');
})

app.get('/url/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const Entry=await Url.findOneAndUpdate({shortId},{$push:{visitHistory:{timestamp:Date.now()}}});
    res.redirect(Entry.redirectUrl);
}
)

app.use(express.json()); 
app.use(express.urlencoded({extended:false}));


app.use('/url',router);
app.use('/',staticrouter);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});