import { users } from "./Users.js";
import inquirer from "inquirer";
export { userCheck };
let accountTitles = []; // for users names
for (const key in users) { //Pushing each user name in array for selection
    accountTitles.push(users[key].fullName);
}
async function userCheck() {
    let abv = await inquirer.prompt([{
            type: "list",
            name: "asd",
            message: "Kindly click your name",
            choices: accountTitles
        }]);
    // var selectedUser=(abv.asd);
    return abv.asd;
}
userCheck();
