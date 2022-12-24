import inquirer from "inquirer";
export { cashWithdrawal };
import { users } from "./Users.js";
import chalk from "chalk";
async function cashWithdrawal(index) {
    //console.log("Balance: " + users[Number(index)].balance );
    await inquirer
        .prompt([
        {
            type: "input",
            name: "withdrawal",
            message: "Kindly enter amount to withdraw",
        },
    ])
        .then(async (answers) => {
        if (answers.withdrawal > users[Number(index)].balance) {
            console.log(chalk.bgRed("Not Enough Balance"));
        }
        else {
            console.log("Withdrawal Successful");
            users[Number(index)].balance = users[Number(index)].balance - answers.withdrawal;
            console.log("New Balance: " + users[Number(index)].balance);
        }
    });
}
