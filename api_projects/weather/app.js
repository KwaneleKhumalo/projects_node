const express = require('express');
require('dotenv').config;
const app = express();
const https = require('https');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hamilton,MT,US&units=imperial&appid=f95216eeffb72e716c5fdac24d338856';



app.get('/', (req, res) =>{
    https.get(url, (response) => {
        console.log(response);

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
        });
    })
    res.send('Hello World!');
})


try {
    app.listen(3000, ()=>{
        console.log('Server listening on port 3000');
    })
} catch (error) {
    ` Could not connect to server ${error.message}`
}