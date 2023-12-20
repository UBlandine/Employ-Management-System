const EmployeeModel = require('../models/employee.models');

const createEmployee= async(req, res, next) => {
    try {
        // Create a new employee
        const createdEmployee = await EmployeeModel.create(req.body);

        console.log(createdEmployee);
        res.status(201).json({
            message: 'Employee created successfully',
            employee: createdEmployee
        })
    }
    catch (err) {
        res.status(500).send("Failed to create employee")
    };
}

module.exports = {createEmployee}

