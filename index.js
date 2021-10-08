const inquirer = require("inquirer");
 const fs = require("fs");
 const path = require('path');


 const employee = [];
 function init() {
     startHTML();
     addToRoster();
    
     function addToRoster() {
         inquirer
             .promt([
             {
                 type: "input",
                 name: "managerName",
                 message: "What is your Manager's name?"
             },
             {
                 type: "input",
                 name: "managerId",
                 message: "What is your Id?"
             },
             {
                 type: "input",
                 name: "managerEmail",
                 message: "What is your Email?"
             },
             {
                 type: "input",
                 name: "officeNumber",
                 message: "What is your Office Number?"
             },
         ]).then(response => {
             const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNmber);
             teamMember.push(manager);
             addingNewMember();
         })
     };
     const draft = generate(team);
     fs.writeFile(outputPath, draft, err => {
         err ? console.log(err) : console.log('== Team profile successfully created!')
     })
 }
 init();