const axios = require('axios').default;

const controller = {
    getQuotes(){
            axios.get('https://www.affirmations.dev/')  
            .then(function (response) {
                console.log(response.data.affirmation);
            })
            .catch(function (error) {
                console.log(error);
            })

}};

module.exports = controller;