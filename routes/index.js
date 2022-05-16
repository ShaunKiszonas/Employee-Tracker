const express = require('express');
const router = express.Router();
const inquirer = require('inquirer');
const http = require('http');

router.use(require('./departmentsRoutes'));
router.use(require('./rolesRoutes'));
router.use(require('./employeesRoutes'));

inquirer
  .prompt({
    type: 'list',
    message: 'choose one',
    name: 'action',
    choices: [
      'View departments',
      'View roles',
      'View employees',
      'Add a department',
      'Add a role',
      'Update a employee'
    ]
  }).then(({ action }) => {

    switch (action) {
      case 'View departments':
        http.request('http://localhost:3001/api/departments', callback);
        break;
      case 'View roles':
        http.get('http://localhost:3001/api/roles', function (res) {
          console.log(res.body);
        });
        break;
      case 'View employees':
        http.get('http://localhost:3001/api/employees', function (res) {
          console.log(res.body);
        });
        break;
      case 'Add a department':
        http.get('http://localhost:3001/api/departments', function (res) {
          console.log(res.body);
        });
        break;
      case 'Add a role':
        http.get('http://localhost:3001/api/departments', function (res) {
          console.log(res.body);
        });
        break;
      case 'Update a employee':
        http.get('http://localhost:3001/api/departments', function (res) {
          console.log(res.body);
        });
        break;
    }
  })

callback = function (response) {
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });
  response.on('end', function () {
    console.log(str);
  })
}
module.exports = router;