const express = require('express');
const app = express();
// Call library mongoose
const mongoose = require('mongoose');
// Create constants for open connection mongodb
const MONGODB_URI = 'mongodb://localhost:27017/mvc_mongo';

// Get static from folder public / call assets from folder public
// app.use(express.static(path.join('public')));
app.use(express.static('public'));

// Use view engine ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//call routing articles from routes directory
const articleRoutes = require('./routes/articel')
// Get request from raw json
app.use(express.json());

// Get request from form / x-www-form-urlencoded
// Use for upload image
app.use(express.urlencoded({extended: false}));

// USer articles routing with midleware
app.use(articleRoutes);

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
})

app.listen(5000);