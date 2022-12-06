
import inquirer from "inquirer";
import chalk from "chalk";
function transferBank(bal:number)
{
    inquirer
.prompt([
  {
    type: "input",
    name: "send",
    message: "Kindly enter amount to send",
  },
])
.then(async (answers) => {
  if (answers.send > bal) {
    console.log(chalk.bgRed("Not Enough Balance"));
  } else {
    bal = bal - answers.send;
  }
});
return bal;
}
export {transferBank};