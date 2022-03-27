const express = require('express')
const app = express()
const bcryptjs = require('bcryptjs')
const dotenv = require('dotenv').config({path:'./env/.env'}) 
const path = require('path')
const connection = require('./database/db')

//view engine
app.set('view engine', 'ejs')

//staticfiles 
app.use('/static',express.static('public'))
app.use('/static',express.static(__dirname + 'public'))

//capture data
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//ROUTER

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/music',(req,res)=>{
    res.render('music')
})
app.get('/films',(req,res)=>{
    res.render('films')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/register',(req,res)=>{
    res.render('register')
})


//SIGNUP DATA
app.post('/register',async(req,res)=>{
    const{name,lastname,email,tel,user,pass} = req.body
    
    //HASH PASSWORD
    let hashedPassword =await  bcryptjs.hash(pass,8)
    
    connection.query('INSERT INTO scifi_users SET ?',{first_name:name,last_name:lastname,email:email,tel:tel,user_name:user,pass:hashedPassword},async (error,result)=>{
          if(error) {
              console.log(error)
          }else {
              res.render('register',{
                alert:true,
                alertTitle:"Registration",
                alertMessage:"¡Successful Registration!",
                alertIcon:"success",
                showConfirmButton:false,
                timer:1500,
                ruta:''

              })
          }
    })
    
})

//LOGIN AUTH
app.post('/login',async(req,res)=>{
    const user = req.body.user;
    const pass = req.body.pass;
 
    let passwordHash = await bcryptjs.hash(pass,8)
    if(user && pass){
        connection.query('SELECT * FROM scifi_users WHERE user_name = ?', [user], async (error,results)=>{
            if(results.length == 0 || !(await bcryptjs.compare(pass,results[0].pass))){
                res.render('login',{
                    alert:true,
                    alertTitle:"Error",
                    alertMessage:"invalid User/password",
                    alertIcon:"error",
                    showConfirmButton:true,
                    timer:false,
                    ruta:'login' 
                })
            }else {
             res.render('login',{
                 alert:true,
                 alertTitle:"Successful log in",
                 alertMessage:"¡WELCOME TO SCI FI CULTURE!",
                 alertIcon:"success",
                 showConfirmButton:false,
                 timer:1500,
                 ruta:'' 
             })
 
            }
        })
 
    }else {
       res.render('login',{
         alert:true,
         alertTitle:"Advertencia",
         alertMessage:"Porfavor ingrese un Usuario y password",
         alertIcon:"warning",
         showConfirmButton:true,
         timer:false,
         ruta:'login'
       })
    }
 })


//port

const port = process.env.PORT || 5000

app.listen(port,()=> {
    console.log('server on port : ' + port)
})