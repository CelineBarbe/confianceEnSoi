const port = 4000;
const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios').default;

app.use(router);

app.get('/', () => {
    axios.get('https://www.affirmations.dev/')  
    .then(function (response) {
        if(response.status === 200) {
            console.log(response.data.affirmation);
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