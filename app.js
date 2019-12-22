 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//import Routes
const postsRoutes = require('./routes/posts');

app.use('/posts',postsRoutes);


 //Routes
 app.get('/',(rer,res)=> {
     res.send("I AM GOOD")
});



//Database Connection
mongoose.connect(
   //'mongodb+srv://root:1234@cluster0-804ko.mongodb.net/test?retryWrites=true&w=majority'
   process.env.DB_CONNECTION
   , { useNewUrlParser: true }
    ,()=>{
       console.log('Conncected to DB'); 
    });

 //Giving port for server\
 app.listen(3000);