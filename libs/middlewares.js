const bodyParser = require('body-parser');

module.exports = app =>{
    app.set('port', process.env.PORT || 3000);

    app.use(bodyParser.json());                         //voy a poder entender los datos que me mandan via psot
    app.use(bodyParser.urlencoded({extended: false}));   //Me permite entender los datos que me mandan via rul

};