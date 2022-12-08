import inquirer from "inquirer";

type newUser= {
    fullName: string,
    age:number,
    pin:number,
    balance:number
    ministatement:{
        debit?:number,
        credit?:number,
    }
}

