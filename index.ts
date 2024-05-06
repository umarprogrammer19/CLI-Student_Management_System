#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const students: any = [];
const addStudent = () =>
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: chalk.greenBright("Enter student name: "),
            },
            {
                type: "input",
                name: "id",
                message: chalk.greenBright("Enter student ID: "),
            },
            {
                type: "input",
                name: "grade",
                message: chalk.greenBright("Enter student grade: "),
            },
            {
                type: "input",
                name: "address",
                message: chalk.greenBright("Enter address: "),
            },
            {
                type: "input",
                name: "contactNumber",
                message: chalk.greenBright("Enter contactNumber: "),
            }
        ])
        .then((answers) => {
            students.push({
                name: answers.name,
                id: parseInt(answers.id),
                grade: answers.grade,
                address: answers.address,
                contactNumber: answers.contactNumber,
            });
            console.log(
                chalk.italic.bold.blueBright("\t \t \t Student added successfully!")
            );
            promptUser();
        });

// Display all students
const displayStudents = () => {
    console.log(chalk.italic.magenta("List of students:"));
    students.forEach((student: { name: any; id: any; grade: any; address: any; contactNumber: any }) =>
        console.log(
            chalk.yellowBright(
                `Name: ${student.name}, ID: ${student.id}, Grade: ${student.grade}, address: ${student.address}, contactNumber: 
        ${student.contactNumber}`
            )
        )
    );
    promptUser();
};

const promptUser = () =>
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: chalk.yellow("Choose an action:"),
            choices: ["Add Student", "Display Students", "Exit"],
        })
        .then((answer) => {
            if (answer.action === "Add Student") addStudent();
            else if (answer.action === "Display Students") displayStudents();
            else {
                console.log(chalk.redBright("Exiting program..."));
                process.exit(0);
            }
        });
console.log(
    chalk.italic.bold.magenta("\t \t \t Welcome to Student Management Project! ")
);
promptUser();