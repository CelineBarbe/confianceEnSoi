const port = 4000;
const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios').default;

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

app.listen(port, () =>  {
    console.log('Cette app écoute le port : ' + port);
});