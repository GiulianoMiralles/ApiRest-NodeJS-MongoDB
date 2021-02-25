const { json } = require('body-parser');
const express = require('express');
const app = express();
const consing = require('consign');


consing()                           // This allows me to import the settings I made asynchronously
    .include('libs/middlewares.js')
    .then('routes')
    .include('libs/boots.js')
    .into(app)
    