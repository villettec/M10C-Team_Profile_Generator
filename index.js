// Include packages needed for this application
//The node modules of inquirer and file system are used in this application.
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

let employeeArray = [];


const startMenu = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: 'employee_selection',
                message: "Choose what type of Employee you're adding from the list:",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Quit",
                ]
            }
        ])
        .then((answers) => {
            if (answers.employee_selection == "Manager") {
                addManager();
            }
            else if (answers.employee_selection == "Engineer") {
                addEngineer();
            }
            else if (answers.employee_selection == "Intern") {
                addIntern();
            }
            else {
                console.log("Thank you for using the application.")
                return;
            }
        })
}

const addManager = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
            },

            {
                type: "input",
                name: "Id",
                message: "What is the manager's ID?",
            },

            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
            },

            {
                type: "input",
                name: "office_number",
                message: "What is the manager's office number?",
            },
        ])
        .then((answers) => {
            const manager = new Manager(answers.name, answers.Id, answers.email, answers.office_number);
            console.log(manager);
            employeeArray.push(manager);
            console.log("Manager Added");
            startMenu();
        }
        )
}

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
            },

            {
                type: "input",
                name: "Id",
                message: "What is the engineer's ID?",
            },

            {
                type: "input",
                name: "email",
                message: "What is the engineer's email?",
            },

            {
                type: "input",
                name: "github",
                message: "What is the engineer's github username?",
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.Id, answers.email, answers.github);
            console.log(engineer);
            employeeArray.push(engineer);
            console.log("Engineer Added");
            startMenu();
        }
        )
}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
            },

            {
                type: "input",
                name: "Id",
                message: "What is the intern's ID?",
            },

            {
                type: "input",
                name: "email",
                message: "What is the intern's email?",
            },

            {
                type: "input",
                name: "school",
                message: "What is the intern's school?",
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.Id, answers.email, answers.school);
            console.log(intern);
            employeeArray.push(intern);
            console.log("Intern Added");
            startMenu();
            console.log(employeeArray);
            console.log(employeeArray[0].name);
        }
        )
}

/*

const generateHTML = ({ name, Id, email, office_number, github, school}) =>
`
${name} ${Id} ${email} ${office_number} ${github} ${school}
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body style="background-color: white">
    <h1 style="background-color:rgb(243, 76, 96); color: white; padding: 30px; font-size: 30px; text-align: center;">My
        Team</h1>

    <div class="container">
        <div class="row row-cols-3 justify-content-center" style="margin: 20px;">
            <div class="col">
                <div style="height: 300px; margin-bottom: 40px; background-color: rgb(242, 242, 242); filter: drop-shadow(3px 3px 3px rgb(88, 86, 86));">
                <div style="background-color: rgb(28, 130, 255); margin: 0px; padding: 10px;">
                    <h2 style="color: white">Name</h2>
                    <h3 style="color: white; font-size: 20px;">Icon and Field</h3>
                </div>
                <div style="background-color: white; margin: 40px 20px 20px 20px; ">
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">ID: 1</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Email:</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Github:</h4>
                </div>
                </div>
            </div>

            <div class="col">
                <div style="height: 300px; margin-bottom: 40px;background-color: rgb(242, 242, 242); filter: drop-shadow(3px 3px 3px rgb(88, 86, 86));">
                <div style="background-color: rgb(28, 130, 255); margin: 0px; padding: 10px;">
                    <h2 style="color: white">Name</h2>
                    <h3 style="color: white; font-size: 20px;">Icon and Field</h3>
                </div>
                <div style="background-color: white; margin: 40px 20px 20px 20px; ">
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">ID: 1</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Email:</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Github:</h4>
                </div>
                </div>
            </div>

            <div class="col">
                <div style="height: 300px; margin-bottom: 40px; background-color: rgb(242, 242, 242); filter: drop-shadow(3px 3px 3px rgb(88, 86, 86));">
                <div style="background-color: rgb(28, 130, 255); margin: 0px; padding: 10px;">
                    <h2 style="color: white">Name</h2>
                    <h3 style="color: white; font-size: 20px;">Icon and Field</h3>
                </div>
                <div style="background-color: white; margin: 40px 20px 20px 20px; ">
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">ID: 1</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Email:</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Github:</h4>
                </div>
                </div>
            </div>

            <div class="col">
                <div style="height: 300px; margin-bottom: 40px; background-color: rgb(242, 242, 242); filter: drop-shadow(3px 3px 3px rgb(88, 86, 86));">
                <div style="background-color: rgb(28, 130, 255); margin: 0px; padding: 10px;">
                    <h2 style="color: white">Name</h2>
                    <h3 style="color: white; font-size: 20px;">Icon and Field</h3>
                </div>
                <div style="background-color: white; margin: 40px 20px 20px 20px; ">
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">ID: 1</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Email:</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Github:</h4>
                </div>
                </div>
            </div>

            <div class="col">
                <div style="height: 300px; margin-bottom: 40px; background-color: rgb(242, 242, 242); filter: drop-shadow(3px 3px 3px rgb(88, 86, 86));">
                <div style="background-color: rgb(28, 130, 255); margin: 0px; padding: 10px;">
                    <h2 style="color: white">Name</h2>
                    <h3 style="color: white; font-size: 20px;">Icon and Field</h3>
                </div>
                <div style="background-color: white; margin: 40px 20px 20px 20px; ">
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">ID: 1</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Email:</h4>
                    <h4 style="border: 1px solid gray; color: black; margin: 0px; font-size: 18px; padding: 6px;">Github:</h4>
                </div>
                </div>
            </div>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
</body>

</html>
`

*/


startMenu();