const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    console.log(req.socket.remoteAddress)
    console.log(req.headers['x-forwarded-for'] )
    res.send('соси хуй дарий  '+ req.headers['x-forwarded-for'])
})
app.listen(process.env.PORT || 3000)
