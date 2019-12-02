const express = require('express');


const App = express();

App.use('/static', express.static('public'))



module.exports = App;