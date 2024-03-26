# Employee Tracker - SQL Challenge

## Description

The Employee Tracker was designed as a CMS (Content Management System) in order to interface with all employees, their roles, departments, and managers in one place, as well as update any important information pertaining to the employee and the business itself. 

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Credits](#credits)

## User Story

AS A business owner<br />
I WANT to be able to view and manage the departments, roles, and employees in my company<br />
SO THAT I can organize and plan my business

## Acceptance Criteria

GIVEN a command-line application that accepts user input<br />
WHEN I start the application<br />
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role<br />
WHEN I choose to view all departments<br />
THEN I am presented with a formatted table showing department names and department ids<br />
WHEN I choose to view all roles<br />
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role<br />
WHEN I choose to view all employees<br />
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to<br />
WHEN I choose to add a department<br />
THEN I am prompted to enter the name of the department and that department is added to the database<br />
WHEN I choose to add a role<br />
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database<br />
WHEN I choose to add an employee<br />
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database<br />
WHEN I choose to update an employee role<br />
THEN I am prompted to select an employee to update and their new role and this information is updated in the database<br />

## Usage

Clone the repo and open your coding platform, such as VSCode. run `npm i` to install all dependencies, and then run `node index.js` to start the program.<br />
Follow the prompts depending on what you would like to complete. 

GitHub Repo - https://github.com/asierra619/employee-tracker

Demo Video - https://drive.google.com/file/d/1jJ0r2GUWjv9csvfQObKscCMRZE4jbKU7/view

Screenshot of the program -
![screenshot of Employee Tracker in Intergrated Terminal](./assets/images/employee-tracker-screenshot.png)

## Technologies Used

Node.js, Inquirer, and MySQL

## License

MIT

## Credits

Thank you to the following -<br />

Bobbi Tarkany - Calendly Tutor<br />
Jon 'ocskier' - AskBCS