
import inquirer from "inquirer";
import chalk from "chalk";
import { users } from "./Users.js";

async function transferBank(IN:number)
{
 let ans= await inquirer .prompt([
  {
    type: "input",
    name: "send",
    message: "Kindly enter amount to send",
  },
]);
//.then(async (answers) => {
  if (ans.send > users[IN].balance) {
    console.log(chalk.bgRed("Not Enough Balance"));
  } else {
    users[IN].balance = users[IN].balance - ans.send;
  }
//});

}
export {transferBank};