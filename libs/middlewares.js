const bodyParser = require('body-parser');

module.exports = app => {
    app.set('port', process.env.PORT || 3000);

    app.use(bodyParser.json());                         // It allows me to understand the data they send me via POST
    app.use(bodyParser.urlencoded({ extended: false }));   // It allows me to understand the data sent to me via URL

};