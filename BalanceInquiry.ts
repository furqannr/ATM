export {balance};
import { users } from "./Users.js";

function balance(index:string) {
    console.log("Balance: " + users[Number(index)].balance );
  }