export { balance };
import { users } from "./Users.js";
function balance(index) {
    console.log("Balance: " + users[Number(index)].balance);
}
