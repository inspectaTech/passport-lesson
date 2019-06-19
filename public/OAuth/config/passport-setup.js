const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

//
passport.use(new GoogleStrategy({
    /*options for the google strategy*/
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, async (accessToken, refreshToken, profile, done) => {
    // i think this is run twice - once when the origin doesn't match the callback (sending clientID) and when it does
    // running the callback fn
    
    // passport callback fn
    console.log('passport callback fn fired');
    console.log(profile);

    //is this a returning user or a new user?


  })
);// .use
