import inquirer from "inquirer";
export { onlineTransfer };
import { transferBank } from "./transferBnk.js";
async function onlineTransfer(index) {
    //console.log("Balance: " + users[Number(index)].balance );
    let aw = await inquirer
        .prompt([
        {
            type: "list",
            name: "bankChoice",
            message: "Select the reciever's bank",
            choices: ["Allied Bank", "Habib Bank", "Meezan Bank", "United Bank"],
        },
    ]);
    //.then((answers) => {
    switch (aw.bankChoice) {
        case "Allied Bank":
            await transferBank(Number(index));
            break;
        case "Habib Bank":
            await transferBank(Number(index));
            break;
        case "Meezan Bank":
            await transferBank(Number(index));
            break;
        case "United Bank":
            await transferBank(Number(index));
            break;
        default:
            console.log("Shouldn't come here");
            break;
    }
    //});
    // console.log(users[Number(index)].balance);
}
