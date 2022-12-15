let users = [{ fullName: "firstUser", age: 31, pin: 1111, balance: 500000, ministatement: { debit: [2000], credit: [4000] } }];
function createUser() {
    let furqan = { fullName: "Furqan Nasir", age: 30, pin: 1111, balance: 50000, ministatement: {} };
    users.push(furqan);
    return furqan;
}
;
let f = createUser();
export { users };
