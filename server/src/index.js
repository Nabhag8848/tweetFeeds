const express = require('express')
require('dotenv').config()
const needle = require('needle')
const getUserByUsername = require('../endpoints/getUserByUsername')

const port = process.env.PORT || 3000
const app = express()

const token = process.env.BEARER_TOKEN


needle.get('http://www.google.com', (error, response) => {
  if (!error && response.statusCode == 200)
    return (response.body);
})



app.get('/', (req, res) => {
  res.send('health check')
})

app.get('/:users', async (req, res) => {

  const users = req.params.users;
  const data = await getUserByUsername(users)

  if (!data) {
    res.status(404).send("Not Found");
  } else {
    res.status(200).send(data);
  }
})

app.get('/:user/:hashtag', (req, res) => {

})




app.listen(port, () => {
  console.log('Server is up and listening to port:', port)
})
