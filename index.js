// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with
// a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is
// generated randomly.
import chalk from "chalk";
import { userCheck } from "./userAuthentication.js";
import { Menu } from "./Menu.js";
import { balance } from "./BalanceInquiry.js";
console.log(chalk.bgBlack("Welcome to XYZ ATM"));
console.log(chalk.bgRed("Card num is checked in atm machines, here we will go on basis of account num"));
let user = await userCheck();
//console.log(user);
if (typeof user === "string") {
    let menuChoice = await Menu();
    console.log(`${menuChoice} + ${typeof menuChoice}`);
    switch (menuChoice) {
        case "Balance Inquiry":
            // console.log(user.balance);  
            balance(user);
            break;
        case "Cash WithDrawl":
            break;
        case "Online Transfer":
            break;
        default:
            console.log("Shouldn't come here");
            break;
    }
}
// .then((answers) => {
//     
//   });
// let balanc: number = user?.balance;
//
//   function balance() {
//     console.log("Balance: " + balanc);
//   }
//   function cashWithDrawl() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "withdrawal",
//           message: "Kindly enter amount to withdraw",
//         },
//       ])
//       .then(async (answers) => {
//         if (answers.withdrawal > balanc) {
//           console.log(chalk.bgRed("Not Enough Balance"));
//         } else {
//           console.log("Withdrawal Successful");
//           balanc = balanc - answers.withdrawal;
//           console.log("New Balance: " + balanc);
//         }
//       });
//   }
//   function transfer() {
//     inquirer
//       .prompt([
//         {
//           type: "list",
//           name: "bankChoice",
//           message: "Select the reciever's bank",
//           choices: ["Allied Bank", "Habib Bank", "Meezan Bank", "United Bank"],
//         },
//       ])
//       .then((answers) => {
//         switch (answers.bankChoice) {
//           case "Allied Bank":
//             balanc = transferBank(balanc);
//             break;
//           case "Habib Bank":
//             balanc = transferBank(balanc);
//             break;
//           case "Meezan Bank":
//             balanc = transferBank(balanc);
//             break;
//           case "United Bank":
//             balanc = transferBank(balanc);
//             break;
//           default:
//             console.log("Shouldn't come here");
//             break;
//         }
//       });
//   }
// 
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
