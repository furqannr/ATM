import { users } from "./Users.js";
import inquirer from "inquirer";
let accountTitles:string[]=[];// for users names
for (const key in users) {//Pushing each user name in array for selection
  accountTitles.push(users[key].fullName);
}
function userCheck()
{
 let abv= inquirer.prompt([{
    type:"list",
    name:"asd",
    message:"Kindly click your name",
    choices:accountTitles
  }])
  console.log(abv.asd);
}
userCheck();
