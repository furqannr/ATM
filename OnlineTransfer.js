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
                users[Number(index)].balance = transferBank(users[Number(index)].balance);
                break;
            case "Habib Bank":
                users[Number(index)].balance = transferBank(users[Number(index)].balance);
                break;
            case "Meezan Bank":
                users[Number(index)].balance = transferBank(users[Number(index)].balance);
                break;
            case "United Bank":
                users[Number(index)].balance = transferBank(users[Number(index)].balance);
                break;
            default:
                console.log("Shouldn't come here");
                break;
        }
    });
    console.log(users[Number(index)].balance);
}
