const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/views/home.html');
})

app.post('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html');
})

app.post('/about', (req, res) => {
    res.sendFile(__dirname+'/views/about.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//copy the boilerplate code from expressjs.com
//Don't bother manually getting it set up