const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
});

app.post('/bmi', (req, res) => {
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2;
    res.send(`Results are ${result}`);
});





app.listen(port, ()=> console.log(`listening on ${port}`));