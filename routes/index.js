const express = require('express');
const mailModel = require('../controllers/email.js');
const routes = express.Router()

routes.post('/sendMail',mailModel)



module.exports = routes;