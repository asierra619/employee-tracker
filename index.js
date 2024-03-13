const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the employee_db database.`))

  // db.query('SELECT * FROM favorite_books', function (err, results) {
  //   console.log(results);
  // });
  

function menu() {
  inquirer.prompt(
    [
      {
        type: 'list',
        name: 'option',
        message: 'Choose one of the following.',
        choices: [
          'View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'
        ]
      }
    ]
  ).then (answers => {
    if (answers.option === 'View All Departments'){
      viewDepartments()
    }
    if (answers.option === 'View All Roles'){
      viewRoles()
    }
    if (answers.option === 'View All Employees'){
      viewEmployees()
    }
    if (answers.option === 'Add a Department'){
      addDepartment()
    }
    if (answers.option === 'Add a Role'){
      addRole()
    }
    if (answers.option === 'Add an Employee'){
      addEmployee()
    }
  })
}

function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
    return menu()
  });
}
function viewRoles() {
    db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
    return menu()
  });
}
function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
    return menu()
  });
}

function addDepartment() {
  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Department?'
      }
    ]
  ).then (answers => {
    db.query('INSERT into department SET ?', answers, function (err, results) {
      console.table(results);
      return menu()
    });
  });
}
function addRole() {
  db.query('SELECT * FROM department', (err, results) => {
    // dpt is department
    const departmentArray = results.map(dpt => ({
      name: dpt.name, value: dpt.id
    }))

  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'title',
        message: 'What is the position Title?'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the Salary?'
      },
      {
        type: 'list',
        name: 'department_id',
        message: 'Which Department does it belong to?',
        choices: departmentArray
      },
    ]
  ).then (answers => {
    db.query('INSERT into role SET ?', answers, function (err, results) {
      console.table(results);
      return menu()
    });
  });
})
};

function addEmployee() {
  db.query('SELECT * FROM role', (err, results) => {
    const roleArray = results.map(role => ({
      name: role.title, value: role.id
    }))

  db.query('SELECT * FROM employee', (err, results) => {
    const employeeArray = results.map(empl => ({
      name: `${empl.first_name}${empl.last.name}`, value: empl.id
    }))

  inquirer.prompt(
    [
      {
        type: 'input',
        name: 'first_name',
        message: 'What is their First Name?'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'What is their Last Name?'
      },
      {
        type: 'list',
        name: 'role_id',
        message: 'What Position were they hired for?',
        choices: roleArray
      },
      {
        type: 'list',
        name: 'department_id',
        message: 'Who is their Manager?',
        choices: employeeArray
      },
    ]
  ).then (answers => {
    db.query('INSERT into employee SET ?', answers, function (err, results) {
      console.table(results);
      return menu()
    });
  })
  })
  })
};

menu();