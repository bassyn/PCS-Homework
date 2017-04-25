const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    },
    salary: Number,
    department: { type: String, ref: 'department'} 
});

employeeSchema.methods.print = function () {
    console.log(this.name.full + ': ' + this.salary);
};

employeeSchema.virtual('name.full').get(function () {
    return this.name.first + ' ' + this.name.last;
});

employeeSchema.virtual('name.full').set(function (fullname) {
    const parts = fullname.split(' ');
    this.name.first = parts[0];
    this.name.last = parts[1];
});

module.exports = mongoose.model('employee', employeeSchema);