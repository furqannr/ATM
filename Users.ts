import inquirer from "inquirer";
type newUser= {
    fullName: string,
    age:number,
    pin:number,
    balance:number
    debit?:number[],
    credit?:number[],
    ministatement:{
        debit?:[number],
        credit?:[number],
    }
}
let users: newUser[] = [{ fullName: "firstUser", age: 31, pin: 1111, balance: 500000, ministatement: {debit:[2000], credit:[4000]} }];

function createUser(): newUser {
    let furqan: newUser = { fullName: "Furqan Nasir", age: 30, pin: 1111, balance: 50000, ministatement: {} };
    users.push(furqan);
    return furqan;
};
let f= createUser();

export {users};