// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with
// a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is
// generated randomly.
// Create a GitHub repository for the project and submit its URL in the project submission form.
import inquirer from "inquirer";
import chalk from "chalk";
import { transferBank } from "./transferBnk.js";
console.log(chalk.bgBlack("Welcome to XYZ ATM"));
let pinTries = 3;
let balanc = 50000;
function CorrectPin() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "choice",
            message: "Select the operation from below",
            choices: ["Balance Inquiry", "Cash WithDrawl", "Online Transfer"],
        },
    ])
        .then((answers) => {
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
        console.log("Balance: " + balanc);
    }
    function cashWithDrawl() {
        inquirer
            .prompt([
            {
                type: "input",
                name: "withdrawal",
                message: "Kindly enter amount to withdraw",
            },
        ])
            .then(async (answers) => {
            if (answers.withdrawal > balanc) {
                console.log(chalk.bgRed("Not Enough Balance"));
            }
            else {
                console.log("Withdrawal Successful");
                balanc = balanc - answers.withdrawal;
                console.log("New Balance: " + balanc);
            }
        });
    }
    function transfer() {
        inquirer
            .prompt([
            {
                type: "list",
                name: "bankChoice",
                message: "Select the reciever's bank",
                choices: [
                    "Allied Bank",
                    "Habib Bank",
                    "Meezan Bank",
                    "United Bank",
                ],
            },
        ])
            .then((answers) => {
            switch (answers.bankChoice) {
                case "Allied Bank":
                    balanc = transferBank(balanc);
                    break;
                case "Habib Bank":
                    balanc = transferBank(balanc);
                    break;
                case "Meezan Bank":
                    balanc = transferBank(balanc);
                    break;
                case "United Bank":
                    balanc = transferBank(balanc);
                    break;
                default:
                    console.log("Shouldn't come here");
                    break;
            }
        });
    }
    console.log(balanc);
}
function AtmPin() {
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
        }
        else if (answers.pin != "1111" && pinTries > 0) {
            console.log("Wrong Pin!!! Try Again");
            console.log("Tries left: " + --pinTries);
            AtmPin();
        }
        else {
            console.log("Atm blocked. Contact helpline for further details");
        }
    });
}
AtmPin();
