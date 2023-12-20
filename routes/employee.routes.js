const express = require('express');

const employeeRoutes = express.Router();
const {createEmployee}= require('../controllers/employee.controllers');

employeeRoutes.post ('/add', createEmployee);

module.exports = employeeRoutes;