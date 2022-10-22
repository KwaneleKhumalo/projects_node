const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true})); 
const port = 3000;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) =>{
    res.send('<h1>About Page!</h1>')
})

app.post('/confirmation', (req, res) =>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let results = num1 + num2;

    res.send(`${Number(results)}`);
});


app.listen(port, () => console.log(`Example app listening on port ${port}`));