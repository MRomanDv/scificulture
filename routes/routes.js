const express = require('express')
const router = express.Router() 

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/music',(req,res)=>{
    res.render('music')
})
router.get('/films',(req,res)=>{
    res.render('films')
})
router.get('/login',(req,res)=>{
    res.render('login')
})
router.get('/register',(req,res)=>{
    res.render('register')
})





module.exports = router;