"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with
// a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is
// generated randomly.
// Create a GitHub repository for the project and submit its URL in the project submission form.
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var userAuthentication_js_1 = require("./userAuthentication.js");
var Menu_js_1 = require("./Menu.js");
var BalanceInquiry_js_1 = require("./BalanceInquiry.js");
var CashWithdrawal_js_1 = require("./CashWithdrawal.js");
var OnlineTransfer_js_1 = require("./OnlineTransfer.js");
function welcome() {
    return __awaiter(this, void 0, void 0, function () {
        var user, menuChoice, _a, choice, ch;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log(chalk_1["default"].bgBlack("Welcome to XYZ ATM"));
                    console.log(chalk_1["default"].bgRed("Card num is checked in atm machines, here we will go on basis of account num"));
                    console.log(chalk_1["default"].bgRed("For Testing:Enter Account 111 and password 1111"));
                    return [4 /*yield*/, (0, userAuthentication_js_1.userCheck)()];
                case 1:
                    user = _b.sent();
                    if (!(typeof user === "string")) return [3 /*break*/, 15];
                    _b.label = 2;
                case 2: return [4 /*yield*/, (0, Menu_js_1.Menu)()];
                case 3:
                    menuChoice = _b.sent();
                    _a = menuChoice;
                    switch (_a) {
                        case "Balance Inquiry": return [3 /*break*/, 4];
                        case "Cash WithDrawl": return [3 /*break*/, 5];
                        case "Online Transfer": return [3 /*break*/, 7];
                        case "Operations Completed": return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 11];
                case 4:
                    (0, BalanceInquiry_js_1.balance)(user);
                    return [3 /*break*/, 12];
                case 5: return [4 /*yield*/, (0, CashWithdrawal_js_1.cashWithdrawal)(user)];
                case 6:
                    _b.sent();
                    //console.log("New Balance: " + users[Number(user)].balance);
                    return [3 /*break*/, 12];
                case 7: return [4 /*yield*/, (0, OnlineTransfer_js_1.onlineTransfer)(user)];
                case 8:
                    _b.sent();
                    //console.log("New Balance: " + users[Number(user)].balance);
                    return [3 /*break*/, 12];
                case 9: return [4 /*yield*/, welcome()];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 11:
                    console.log("Shouldn't come here");
                    return [3 /*break*/, 12];
                case 12: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: "input",
                        name: "qa",
                        message: chalk_1["default"].bgGrey("Do you want to perform another transaction? Press Y or y for YES")
                    })];
                case 13:
                    choice = _b.sent();
                    _b.label = 14;
                case 14:
                    if (choice.qa == "yes" ||
                        choice.qa == "Yes" ||
                        choice.qa == "YES" ||
                        choice.qa == "y" ||
                        choice.qa == "Y") return [3 /*break*/, 2];
                    _b.label = 15;
                case 15: return [4 /*yield*/, inquirer_1["default"].prompt({
                        type: "input",
                        name: "a",
                        message: chalk_1["default"].bgGrey("Do you want to check another account? Press Y or y for YES")
                    })];
                case 16:
                    ch = _b.sent();
                    _b.label = 17;
                case 17:
                    if (ch.a == "yes" ||
                        ch.a == "Yes" ||
                        ch.a == "YES" ||
                        ch.a == "y" ||
                        ch.a == "Y") return [3 /*break*/, 0];
                    _b.label = 18;
                case 18: return [2 /*return*/];
            }
        });
    });
}
welcome();
// function AtmPin() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "pin",
//         message: "Kindly enter 4 digit Pin",
//       },
//     ])
//     .then(async (answers) => {
//       if (answers.pin == "1111") {
//         CorrectPin();
//       } else if (answers.pin != "1111" && pinTries > 0) {
//         console.log("Wrong Pin!!! Try Again");
//         console.log("Tries left: " + --pinTries);
//         AtmPin();
//       } else {
//         console.log("Atm blocked. Contact helpline for further details");
//       }
//     });
// }
// AtmPin();
