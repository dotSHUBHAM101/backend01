require('dotenv').config()

const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get( '/linkedin' , (req , res) => {
  res.send(`Shubham doesnt has linkedin`)
})

app.get('/login' , (req , res) => {
  res.send('<h1> Login bro </h1>')
})

app.get('/signup' , (req , res) =>{
    res.send('<input type = "text" placeholder = "enter name"/>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})