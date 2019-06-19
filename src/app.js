const express = require("express");
const path = require('path');
const passportSetup = require('../public/OAuth/config/passport-setup')
const mongoose = require('mongoose');


const app = express();
const keys = require('../public/OAuth/config/keys');
const oauthRouters = require('../public/OAuth/routers/auth-routes')

// set up view engine

const viewsPath = path.join(__dirname,"../template");
const oauthPath = path.join(__dirname,"../public/OAuth/views");

app.set('view engine', 'ejs');// like handlebars
app.set('views',[viewsPath,oauthPath]);
const dbname = 'sz-oauth-test';
//connect to mongoDB
mongoose.connect(`${keys.mongodb.db}/${dbname}`, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.log('[mongoose] connected');
}).catch((error) => {
  console.log('[mongoose] connect error',error);
});


app.use('/auth',oauthRouters);

const publicDirectoryPath = path.join(__dirname,"../public");
app.use('/', express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log("[listen] now listening for requests on port 3000");
})
