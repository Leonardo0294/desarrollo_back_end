const express = require('express');
const routes = express.Router();
const {mensajeDelete, mensajeGet, mensajePost, mensajePut} = require('../controllers/controllers');
routes.get('/',mensajeGet)
routes.put('/',mensajePut)
routes.post('/',mensajePost)
routes.delete('/',mensajeDelete)





module.exports = routes