import inquirer from "inquirer";
type newUser = {
    fullName: string,
    accountNum: number,
    age: number,
    pin: number,
    balance: number
    debit?: number[],
    credit?: number[],
    ministatement: {
        debit?: [number],
        credit?: [number],
    }
}
let users: newUser[] = [{ fullName: "Farman", accountNum: 111, age: 31, pin: 1111, balance: 500000, ministatement: { debit: [2000], credit: [4000] } },
{ fullName: "Furqan", age: 31, accountNum: 112, pin: 1111, balance: 500000, ministatement: { debit: [2000], credit: [4000] } },
{ fullName: "Fahad", accountNum: 113, age: 31, pin: 1111, balance: 5000000, ministatement: { debit: [2000], credit: [4000] } }];

// function createUser(): newUser {
//     let furqan: newUser = { fullName: "Furqan Nasir", age: 30, pin: 1111, balance: 50000, ministatement: {} };
//     users.push(furqan);
//     return furqan;
// };
//let f= createUser();

export { users };