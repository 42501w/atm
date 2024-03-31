#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 10000; //dollars
let myPin = 42501;

const pinAnswer = await inquirer.prompt({
  name: "Pin",

  message: "Enter Your Pin",

  type: "number",
});
if (pinAnswer.Pin === myPin) {
  console.log("Correct pin code!!!");

  let OperationAns = await inquirer.prompt([
    {
      name: "Operation",
      message: "Please select one option!",
      type: "list",
      choices: ["Withdraw", "Balance Inquirey", "fastCash"],
    },
  ]);

  if (OperationAns.Operation === "Withdraw") {
    let Amountans = await inquirer.prompt({
      name: "Amount",
      message: "Enter your amount",
      type: "number",
    });

    if (Amountans.Amount > myBalance) {
      console.log("Insufficient Balance");
    } else {
      myBalance -= Amountans.Amount;
      console.log("Your remaining balance is: " + myBalance);
    }
  } else if (OperationAns.Operation === "Balance Inquirey") {
    console.log("Your Balance is:" + myBalance);
  } else if (OperationAns.Operation === "fastCash") {
    const fastCashAmount = 500;

    if (fastCashAmount > myBalance) {
      console.log("Insufficient Balance");
    } else myBalance -= fastCashAmount;
    console.log(
      "Fast Cash of " +
        fastCashAmount +
        " dispensed. Your remaining balance is: " +
        myBalance
    );
  }
} else {
  console.log("Incoorect Pin");
}
