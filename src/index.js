const express = require('express')
require('dotenv').config()
const needle = require('needle')
const getRequest = require('getRequest')

const port = process.env.PORT || 3000
const app = express()

const token = process.env.BEARER_TOKEN


needle.get('http://www.google.com', (error, response) => {
  if (!error && response.statusCode == 200)
    console.log(response.body);
})



app.get('/',(req,res) => {
    res.send('health check')
})

app.get('/:user', (req,res) => {
    const data = getRequest()
    res.send(data)
})

app.get('/:user/:hashtag',(req,res) => {
    
})




app.listen(port,() => {
    console.log('Server is up and listening to port:', port)
})