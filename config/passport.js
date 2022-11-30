const axios= require('axios')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
const UserModel=require('../models/UserModel')

module.exports= function(passport){
  console.log('HELLOOO')
  passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:'http://localhost:3002/auth/google/callback',
    //passReqToCallback:true
  },
    async function(accessToken, refreshToken, profile,done){
   // console.log(profile)
    //console.log(accessToken +"\n\n")
    
      
  }
))

passport.serializeUser((user,done) => {
  try{
    console.log("****SERIALIZE*****")
  console.log(user)
  done(null,user.id)
  }catch(err){
    console.log(err.message)
  }
  
})

passport.deserializeUser((user,done) =>{
  const id=user.id
      UserModel.findById(id,(err,user) => {
        if(err){
          console.log(err.message)
        }
        console.log(user)
          done(err,user)
      })
 })
}




