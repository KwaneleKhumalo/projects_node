const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path = require('path');
const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');

app.use(express.static('./views/pages'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');


app.post('/', async (req, res) => {
    const url = process.env.URL;
    const units = 'imperial';
    const lat = req.body.lat;
    const long = req.body.long;
    const fullPath = `${url}&lat=${lat}&lon=${long}&units=${units}`;

    const response = await fetch(fullPath);
    const data = await response.json();
    console.log(data);

    const weatherData = data;   //Parse data to readable json 
    const weatherInfo = weatherData.weather[0];
    const weatherDesc = weatherInfo.description;
    const weatherIcon = weatherInfo.icon;
    const iconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    const temp = weatherData.main.temp;
    const feelsLike = weatherData.main.feels_like
    const city = weatherData.name;
    const country = weatherData.sys.country
    res.render('pages/weather', {
        city: city,
        iconURL:iconURL,
        temp: temp,
        feelsLike: feelsLike,
        weatherDesc: weatherDesc
    });

    res.render('pages/weather', {

    })
})


try {
    app.listen(3000, ()=>{
        console.log('Server listening on port 3000');
    })
} catch (error) {
    ` Could not connect to server ${error.message}`
}