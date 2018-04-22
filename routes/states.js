var express = require('express')
var states = express.Router()
let db = require('../db');
let StatesController = require ('../controllers/states.controller');

states.get('/all', StatesController.getAllStates);


module.exports = states