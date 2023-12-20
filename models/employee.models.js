const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

    firstName: {required: true, type: String,},
    lastName: {required: true, type: String},
    email: {required: true, type: String, unique: true},
    phone: {required: true, type: String, unique: true},
    gender: {
        required: true, 
        type: String,
        enum: ["male", "female", "other"], 
    },
    role: {required: true, type: String,
        enum: ["HR", "Manager", "IT_Admin", "Employee"],
        message: "{value} is not a valid role", 
    }

});
module.exports = mongoose.model ('employee',EmployeeSchema);