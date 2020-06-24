const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    userId: String,
    name: String,
    email: String,
    phone: String,
    picture: String,
    salary: String,
    position: String,
    votePresident: String,
    voteVicePresident: String,
    voteDepartment: String,
})

mongoose.model("employee", EmployeeSchema)