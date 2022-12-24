import inquirer from "inquirer";
import chalk from "chalk";
import { users } from "./Users.js";
async function transferBank(newUser) {
    await inquirer
        .prompt([
        {
            type: "input",
            name: "send",
            message: "Kindly enter amount to send",
        },
    ])
        .then(async (answers) => {
        if (answers.send > users[newUser].balance) {
            console.log(chalk.bgRed("Not Enough Balance"));
        }
        else {
            users[newUser].balance = users[newUser].balance - answers.send;
        }
    });
}
export { transferBank };
