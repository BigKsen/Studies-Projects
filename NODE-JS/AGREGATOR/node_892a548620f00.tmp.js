//On ajoute cette ligne venant du fichier meteo.js 
let https = require('https')
//__________________________________________________________________
let filestream = require('fs')
const express = require('express');
const app = express();
//__________________________________________________________________

let megaJSON = new Object();
//__________________________________________________________________

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + "/htdocs"));

app.listen(8000, function () {
    console.log('Server is running ans Listening on port 8000');
});
app.get('/', function (request, response) {
    console.log(megaJSON)
    response.render('template.ejs', megaJSON);
});
//__________________________________________________________________


// On ramène tout le fonctionnement du client METEO 
refreshMeteo()
setInterval(refreshMeteo, 60 * 60000);
function refreshMeteo() {

    let request = {
        "host": "api.open-meteo.com",
        "port": 443,
        "path": "/v1/forecast?latitude=50.85&longitude=4.35&hourly=temperature_2m"
    }

    https.get(request, receiveResponseCallback)


    function receiveResponseCallback(response) {
        let rawData = '';

        response.on('data', (chunk) => { rawData += chunk });

        response.on('end', function (chunk) {
            let meteoJSON = JSON.parse(rawData);
            let newMeteoJSON = { meteo: [] }
            for (i = 0; i < meteoJSON.hourly.time.length; i++) {
                newMeteoJSON.meteo.push({
                    time: meteoJSON.hourly.time[i],
                    temperature: meteoJSON.hourly.temperature_2m[i]
                })
            }

            filestream.writeFile('./cache/meteo.json', JSON.stringify(newMeteoJSON, null, "\t"),
                function (err) {
                    if (err) console.log(err);
                    else console.log("Meteo à jour  à" + new Date());
                });
            megaJSON.weather = newMeteoJSON
        })
    }
}

//__________________________________________________________________

// On ramène tout le fonctionnement du client AirQuality

refreshAirQuality()
setInterval(refreshAirQuality, 60 * 60000);

function refreshAirQuality() {

    let request = {
        "host": "air-quality-api.open-meteo.com",
        "port": 443,
        "path": "/v1/air-quality?latitude=52.5235&longitude=13.4115&hourly=pm10,pm2_5"
    }

    https.get(request, receiveResponseCallback)

    function receiveResponseCallback(response) {
        let rawData = '';

        response.on('data', (chunk) => { rawData += chunk });

        response.on('end', function (chunk) {
            let airQualityJSON = JSON.parse(rawData);
            let newAirQualityJSON = { AirQ: [] }
            for (i = 0; i < airQualityJSON.hourly.time.length; i++) {
                newAirQualityJSON.AirQ.push({
                    "time": airQualityJSON.hourly.time[i],
                    "airQuality": airQualityJSON.hourly.pm10[i]
                })
            }

            filestream.writeFile('./cache/airQuality.json', JSON.stringify(newAirQualityJSON, null, "\t"),

                function (err) {
                    if (err) console.log(err);
                    else console.log("File saved");
                });
            megaJSON.airQuality = newAirQualityJSON
        })
    }
}


//__________________________________________________________________

// On ramène tout le fonctionnement du client Currency

refreshFloatRates()
setInterval(refreshFloatRates, 1000)

function refreshFloatRates() {

    let request = {
        "host": "www.floatrates.com",
        "port": 443,
        "path": "/daily/eur.json"
    }

    https.get(request, receiveResponseCallback)

    function receiveResponseCallback(response) {
        let rawData = '';
        response.on('data', (chunk) => { rawData += chunk });
        response.on('end', function (chunk) {

            let floatRatesJSON = JSON.parse(rawData);
            let newfloatRatesJSON = {
                floatRates: []
            }

            for (key in floatRatesJSON) {

                newfloatRatesJSON.floatRates.push({
                    "currency": floatRatesJSON[key].code,
                    "rate": floatRatesJSON[key].rate,
                    "name": floatRatesJSON[key].name
                })

            }



            // ATTENTION on doit spécifier un nouveau chemin de sauvegarde pour le JSON
            filestream.writeFile('./cache/floatRates.json', JSON.stringify(newfloatRatesJSON, null, "\t"),
                function (err) {
                    if (err) console.log(err);
                    else console.log("File saved");
                })

        }
        );
    }
}


//__________________________________________________________________

// On ramène tout le fonctionnement du client Trains

// Client de l'API : 
// https://api.irail.be/v1/liveboard/?id=BE.NMBS.008812005&lang=fr&format=json

let request = {
    "host": "api.irail.be",
    "port": 443,
    "path": "/v1/liveboard/?id=BE.NMBS.008812005&lang=fr&format=json"
};

https.get(request, receiveResponseCallback);

function receiveResponseCallback(response) {
    let rawData = '';
    // console.log('Got response:' + response.statusCode);
    response.on('data', (chunk) => { rawData += chunk; });
    response.on('end', function (chunk) {
        //console.log(rawData);

        let liveboardJSON = JSON.parse(rawData);

        // on déclare une structure qui sera reprise dans JSON
        let bigBoard = {
            board: []
            //on déclare un tableau vide qui va accueillir les données structurées en JSON
        }

        //
        for (let i = 0; i < liveboardJSON.departures.departure.length; i++) {
            let heure = new Date(parseInt(liveboardJSON.departures.departure[i].time) * 1000);
            heure = heure.toLocaleTimeString('fr-FR');
            let station = liveboardJSON.departures.departure[i].station;
            let voie = liveboardJSON.departures.departure[i].platform;
            let retard = liveboardJSON.departures.departure[i].delay / 60;


            //on push les données dans notre JSON
            bigBoard.board.push({
                "heure": heure,
                "station": station,
                "voie": voie,
                "retard": retard
            })

        }


        // BIEN VERIFIER CE QU'ON SAUVERGARDE: ici = bigBoard (structure que nous avons défini pour notre JSON et rempli avec les données)
        filestream.writeFile('./cache/trains.json', JSON.stringify(bigBoard, null, "\t"),
            function (err) {
                if (err) console.log(err);
                else console.log("File saved");
            });
    });
}




