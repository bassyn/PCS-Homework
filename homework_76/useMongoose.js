const mongoose = require('mongoose'),
    Employee = require('./employee'),
    Department = require('./department');

mongoose.connect('mongodb://127.0.0.1:27017/employees');

mongoose.connection.on('error', err => {
    console.error(err);
});

mongoose.connection.on('open', () => {
    console.log('connected');

    const john = new Employee({
        name: {
            first: 'John',
            last: 'Doe'
        },
        salary: 20000,
        deparment: 'Maintenance'
    });

    const joe = new Employee({
        name: {
            first: 'Joe',
            last: 'Smith'
        },
        salary: 120000,
        deparment: 'Computer Engineer'
    });

    john.save((err, result) => {
        joe.save((err, result) =>{

        const computerEngineer = new Department({
            name: 'Computer Engineer'
        });
        const maintenance = new Department({
            name: 'Maintenance'
        });
        
        maintenance.employees.push(john);
        computerEngineer.employees.push(joe);

        maintenance.save((err, res) => {
            computerEngineer.save((err, res) => {
                Department.find().populate('employees').exec((err, lists) => {
                    lists.forEach(list => {
                        list.print();
                    });
                });
            });
        });

    })

    });

});