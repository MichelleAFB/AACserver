const express= require('express')
const router = express.Router()
const passport=require('passport')


function isLoggedIn(req, res, next) {
  console.log("***isLoggedIN")
  req.profile ? next() : res.sendStatus(401);
}

//@route GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}),(req,res) =>{
  console.log(req.path)
  
}
)

//google auth callback
router.get('/google/callback' , passport.authenticate('google', {
  failureRedirect:'/',
  successRedirect:'/protected'
  }), (req,res) => {
  console.log('SUCCESS IN AUTH')
  res.send("succes from auth auth")
})

/*
router.get('/google/callback/redirect' ,(req,res) => {
  console.log('SUCCESS IN AUTH')
  res.json({message:'redirect'})
  
})
*/

router.get('/protected',isLoggedIn,(req,res) => {
  
  console.log("protected route")
  console.log(req.body)
  const mess="success redirect"
  res.json({message:message})
})



module.exports=router