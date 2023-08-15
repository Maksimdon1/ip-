const express = require('express')
const app = express()
app.get('/name', (req, res) => {
    console.log("Just got a request!")
    
    console.log(req.headers['x-forwarded-for'] )
    res.send('соси хуй дарий  '+ req.headers['x-forwarded-for'])
})

app.put("/server/light", function(req, res) {



      
        res.send('123')

   

    
});






app.listen(process.env.PORT || 3000)
