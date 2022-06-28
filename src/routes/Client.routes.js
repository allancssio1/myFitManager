const express = require('express')
const routes = express.Router()
const clientRoutes = require('../controllers/clientController')

routes.post('/login', clientRoutes.login)
routes.post('/create', clientRoutes.create)

module.exports = routes