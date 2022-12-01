
/*
import express from 'express'
import bcrypt from 'bcrypt'
const router=express.Router()
*/
const express=require('express')
const router=express.Router()
const cookie=require('universal-cookie')
const bcrypt=require('bcrypt')
const db=require("../config/db")
const cors=require("cors")




router.post("/sign-up", async(req, res) => {
  const first = req.body.first;
  const last = req.body.last;
  const email = req.body.email;
  const password = req.body.password;
  try{
    const salt = await bcrypt.genSalt()
    const hashPassword =  await bcrypt.hash(password,salt)
    console.log(salt)
    console.log("hashhpass")
    console.log(hashPassword)
    db.query(
      "INSERT INTO users (first,last,email,password) VALUES (?,?,?,?);",
      [first,last,email,hashPassword],
      (err, results) => {
        console.log(err);
        res.send(results);
      }
    );

  }catch{
    console.log('fail')
  }
});


router.post("/sign-in", async(req, res) => {
  
   const token=req.header(x-auth-token)
  const email = req.body.email;
  const password = req.body.password;
  const admin=req.body.admin
  console.log(admin)
  console.log(email)
  if(admin==true){
    db.query(
      "SELECT * FROM users WHERE (email,admin) = (?,?)",
      [email,1],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        if (results.length > 0) {
          if(bcrypt.compare(results[0].password,password)){
            console.log("PASSWORD MATCH")
            res.json({loggedIn:true,user:email})
          }
        } else {
          console.log('user does not exist')
          res.json({ loggedIn: false, message: "User doesn't exist" }).status(200)
        }
      }
    );  

  }else{
  db.query(
    "SELECT * FROM users WHERE email = ?",
    email,
    (err, results) => {
      if (err) {
        console.log(err);
        res.json({loggedIn:false,message:err.message})
      }
      if (results.length > 0) {
        if(bcrypt.compare(results[0].password,password)){
          console.log("PASSWORD MATCH")
          console.log("PASSWORD MATCH")
          res.status(200).send({loggedIn:true,message:email})
        } else {
          console.log("user does not ecist")
          res.json({
            loggedIn: false,
            message: "Wrong username/password combo!",
          });
        }
      } else {
        res.json({ loggedIn: false, message: "User doesn't exist" });
      }
    }
  );
  }
});

router.post("/sign-in-users", (req,res) => {
  const email=req.body.email
  const password=req.body.email

  
  db.query("INSERT INTO signedinusers (email,password) VALUES (?,?);",
  [email, password],
  (err, results) => {
    console.log(err.message);
    res.send(results);
  })
})

module.exports=router