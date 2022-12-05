// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with
// a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is
// generated randomly.

// Create a GitHub repository for the project and submit its URL in the project submission form.
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlack("Welcome to XYZ ATM"));
let pinTries: number = 3;
let balanc:number=50000;
async function CorrectPin() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Select the operation from below",
        choices: ["Balance Inquiry", "Cash WithDrawl", "Online Transfer"],
      },
    ])
    .then( (answers) => {
      switch (answers.choice) {
        case "Balance Inquiry":
           balance();
          break;
        case "Cash WithDrawl":
           cashWithDrawl();
          break;
        case "Online Transfer":
           transfer();
          break;
        default:
            console.log("Shouldn't come here");
          break;
      }
    // if(answers.choice=="Balance Inquiry")
    // {
    //     await balance();
    // }
    // else if (answers.choice=="Cash WithDrawl")
    // {
        
    //        await cashWithDrawl();
    // }
    // else if (answers.choice=="Online Transfer")
    // {       await transfer();       
    // }
    // else
    // {
    //     console.log("Should never come here");
    // }
    });

  function balance() {
    console.log("Balance: "+balanc);
  }
  function cashWithDrawl() {
    console.log("cashwithdrawl xyz");
  }
  function transfer() {
    console.log("transfer xyz");
  }
}
async function AtmPin() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "pin",
        message: "Kindly enter 4 digit Pin",
      },
    ])
    .then(async (answers) => {
      if (answers.pin == "1111") {
        CorrectPin();
      } else if (answers.pin != "1111" && pinTries > 0) {
        console.log("Wrong Pin!!! Try Again");
        console.log("Tries left: " + --pinTries);
        await AtmPin();
      } else {
        console.log("Atm blocked. Contact helpline for further details");
      }
    });
}
AtmPin();
