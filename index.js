const express = require('express')
const app = express()
app.get('/name', (req, res) => {
    console.log("Just got a request!")
    
    console.log(req.headers['x-forwarded-for'] )
    res.send('соси хуй дарий  '+ req.headers['x-forwarded-for'])
})

app.put("/server/light", function(req, res) {



        const {id, value} = req.body
        console.log(req.socket.remoteAddress)



        let data = fs.readFileSync("./users.json", "utf8");
        let js = JSON.parse(data);
        let device = js[id][0]
        const now = new Date
        get_time = now.toLocaleString()
        console.log(now.toLocaleString())
        device.time_updated = get_time
        device.value = value
        console.log(value)
        js[id][0] = device
        fs.writeFileSync("./users.json", JSON.stringify(js));
        res.send('123')

   

    
});






app.listen(process.env.PORT || 3000)
