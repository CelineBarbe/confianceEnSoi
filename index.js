const port = 4000;
const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios').default;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
//const customQuotes = require('./quotes.json');
const fs = require('fs');

app.use(router);

app.get('/', (request, response) => {
    axios.get('https://www.affirmations.dev/')  
    .then(function (data) {
        if(data.status === 200) {
            console.log(data.data.affirmation);
            response.send(data.data.affirmation);
        } else {
            throw response;
        } 
    })
    .catch(function (error) {
        console.log(error);
    });
});

app.post('/', jsonParser, (request, response) => {
    let customQuote = request.body;
    //customQuotes.push(customQuote);
    console.log(customQuote.affirmation); // la string qu'on veux récupérer
    fs.appendFile('./quotes.json', `{"affirmation" : "${customQuote.affirmation}"}`, (err) => {
        if (err) throw err;
        console.log('affirmation saved!');
    });
    response.status(201).json({
    message: 'Objet créé !'
    });
})

app.listen(port, () =>  {
    console.log('Cette app écoute le port : ' + port);
});