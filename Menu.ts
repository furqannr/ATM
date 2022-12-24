import inquirer from "inquirer";
export {Menu};
async function Menu() {
      let menuCh= await inquirer
        .prompt([
          {
            type: "list",
            name: "choice",
            message: "Select the operation from below",
            choices: ["Balance Inquiry", "Cash WithDrawl", "Online Transfer","Operations Completed"],
          },
        ])
        return menuCh.choice;
        }
