#! /usr/bin/env node
// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with
// a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is
// generated randomly.
// Create a GitHub repository for the project and submit its URL in the project submission form.
import inquirer from "inquirer";
import chalk from "chalk";
import { userCheck } from "./userAuthentication.js";
import { Menu } from "./Menu.js";
import { balance } from "./BalanceInquiry.js";
import { cashWithdrawal } from "./CashWithdrawal.js";
import { onlineTransfer } from "./OnlineTransfer.js";

async function welcome()
{
do
{
console.log(chalk.bgBlack("Welcome to XYZ ATM"));
console.log(
  chalk.bgRed(
    "Card num is checked in atm machines, here we will go on basis of account num"
  )
  );
  console.log(
    chalk.bgRed(
      `For Testing:Enter Account 111 and password 1111`
    )
    );
let user = await userCheck();
//console.log(user);
if (typeof user === "string") {
  do {
    let menuChoice = await Menu();
    //console.log(`${menuChoice} + ${typeof menuChoice}`);
    switch (menuChoice) {
      case "Balance Inquiry":
        balance(user);
        break;
      case "Cash WithDrawl":
        await cashWithdrawal(user);
        //console.log("New Balance: " + users[Number(user)].balance);
        break;
      case "Online Transfer":
        await onlineTransfer(user);
        //console.log("New Balance: " + users[Number(user)].balance);
        break;
        case "Operations Completed":
            await welcome();
        break;
      default:
        console.log("Shouldn't come here");
        break;
    }
    var choice = await inquirer.prompt({//Inside any account page
      type: "input",
      name: "qa",
      message: chalk.bgGrey(
        "Do you want to perform another transaction? Press Y or y for YES"
      ),
    });
  } while (
    choice.qa == "yes" ||
    choice.qa == "Yes" ||
    choice.qa == "YES" ||
    choice.qa == "y" ||
    choice.qa == "Y"
  );
}
var ch = await inquirer.prompt({//For main atm page
    type: "input",
    name: "a",
    message: chalk.bgGrey(
      "Do you want to check another account? Press Y or y for YES"
    ),
  });
}
while( ch.a == "yes" ||
ch.a == "Yes" ||
ch.a == "YES" ||
ch.a == "y" ||
ch.a == "Y");
}
welcome();
// function AtmPin() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "pin",
//         message: "Kindly enter 4 digit Pin",
//       },
//     ])
//     .then(async (answers) => {
//       if (answers.pin == "1111") {
//         CorrectPin();
//       } else if (answers.pin != "1111" && pinTries > 0) {
//         console.log("Wrong Pin!!! Try Again");
//         console.log("Tries left: " + --pinTries);
//         AtmPin();
//       } else {
//         console.log("Atm blocked. Contact helpline for further details");
//       }
//     });
// }
// AtmPin();