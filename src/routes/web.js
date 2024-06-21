import express from "express";
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

let initWebRoutes = (app) => {

  // Employee
  router.post('/api/create-employee', employeeController.createEmployee);
  router.get('/api/get-all-employees', employeeController.getEmployees);
  router.get('/api/get-employees-by-id', employeeController.getEmployeeById);
  router.put('/api/update-employees', employeeController.updateEmployee);
  router.delete('/api/dalete-employees', employeeController.deleteEmployee);

  return app.use("/", router);
};

module.exports = initWebRoutes;
