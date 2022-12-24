import inquirer from "inquirer";
export { onlineTransfer };
import { users } from "./Users.js";
import { transferBank } from "./transferBnk.js";
async function onlineTransfer(index) {
    //console.log("Balance: " + users[Number(index)].balance );
    await inquirer
        .prompt([
        {
            type: "list",
            name: "bankChoice",
            message: "Select the reciever's bank",
            choices: ["Allied Bank", "Habib Bank", "Meezan Bank", "United Bank"],
        },
    ])
        .then((answers) => {
        switch (answers.bankChoice) {
            case "Allied Bank":
                transferBank(users[Number(index)]);
                break;
            case "Habib Bank":
                transferBank(users[Number(index)]);
                break;
            case "Meezan Bank":
                transferBank(users[Number(index)]);
                break;
            case "United Bank":
                transferBank(users[Number(index)]);
                break;
            default:
                console.log("Shouldn't come here");
                break;
        }
    });
    console.log(users[Number(index)].balance);
}
