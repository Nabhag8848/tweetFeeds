const express = require('express')
require('dotenv').config()
const needle = require('needle')

const port = process.env.PORT || 3000
const app = express()

const token = process.env.BEARER_TOKEN


needle.get('http://www.google.com', (error, response) => {
  if (!error && response.statusCode == 200)
    console.log(response.body);
})

app.get('',(req,res) => {
    res.send('home')
})


app.listen(port,() => {
    console.log('Server is up and listening to port:', port)
})