// Header will show the title of this page;
// SearchBar include a input edit;
// EmployeeList will show a hardcode employee's list
import React from 'react';
import ReactDOM from 'react-dom';

const employeeService = require('./service/data');
const router = require('./router');

// React components
const EmployeePage = require('./component/detail');
const HomePage = require('./component/home');

router.addRoute('', function () {
    ReactDOM.render(
        <HomePage service={employeeService}/>,
        document.getElementById('content')
    );
});

router.addRoute('employees/:id', function (id) {
    ReactDOM.render(
        <EmployeePage employeeId={id} service={employeeService}/>,
        document.getElementById('content')
    );
});

router.start();
