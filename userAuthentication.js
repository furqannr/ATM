import { users } from "./Users.js";
import inquirer from "inquirer";
export { userCheck };
// let accountTitles:string[]=[];// for users names
// for (const key in users) {//Pushing each user name in array for selection
//   accountTitles.push(users[key].fullName);
// }
async function userCheck() {
    let accNum = await inquirer.prompt([{
            type: "input",
            name: "asd",
            message: "Kindly enter your account number: "
            //choices:accountTitles
        }]);
    let userPin = await inquirer.prompt([{
            type: "password",
            name: "Upin",
            message: "Kindly enter password: "
        }]);
    for (const key in users) { //Checking each account number in array for selection to check passoword
        if (users[key].accountNum === Number(accNum.asd) && (users[key].pin === Number(userPin.Upin))) {
            return key;
        }
    }
    console.log("Login failed");
    return undefined;
}
//userCheck();
