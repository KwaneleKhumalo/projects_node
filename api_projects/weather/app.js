const express = require('express');
require('dotenv').config;
const app = express();
const https = require('https');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hamilton,MT,US&units=imperial&appid=f95216eeffb72e716c5fdac24d338856';



app.get('/', (req, res) =>{
    https.get(url, (response) => {
        res.set("Content-Type", "text/html");

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);   //Parse data to readable json 
            const weatherInfo = weatherData.weather[0];
            const weatherDesc = weatherInfo.description;
            const weatherIcon = weatherInfo.icon;
            const iconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

            const temp = weatherData.main.temp;
            const feelsLike = weatherData.main.feels_like;

            const city = weatherData.name;
            const country = weatherData.sys.country;

            res.write(`<h3> City: ${city}</h3>`);
            res.write(`<h3>Country: ${country}</h3>`);
            res.write(`<strong>Current temp<strong/>: <h1>${temp}</h1>`);
            res.write(`<strong> Feels like: ${feelsLike}</strong>`);
            res.write(`<img src="${iconURL}"style= 'border: 2px solid black'>`);


            res.send();
        });
    })
    // res.send('Hello World!');
})


try {
    app.listen(3000, ()=>{
        console.log('Server listening on port 3000');
    })
} catch (error) {
    ` Could not connect to server ${error.message}`
}