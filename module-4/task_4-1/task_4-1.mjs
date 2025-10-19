"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Create a constant object to hold account types with these properties:*/

const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kreditkonto",
  Pension: "Pensionskonto",
};

printOut(
  AccountType.Normal + ", " +
  AccountType.Saving + ", " +
  AccountType.Credit + ", " +
  AccountType.Pension
);

printOut();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Create a bank account class with this structure.Let the constructor of the class have a parameter for the account type of this bank account class. And set
"type" to this parameter value. The "toString" method should return the account type. The "setType"
method should set "type" to this new value and print out the change of account type.
Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
type. Then change the account type to "Saving".*/


class TAccount {
  #type;
  #balance;
  #withdrawCount;

  constructor(aType, startBalance = 0) {
  this.#type = aType;
  this.#balance = startBalance;
  this.#withdrawCount = 0;
  this._currencyType = "NOK"; 
}
  toString() { return this.#type; }

  setType(aType) {
    const oldType = this.#type;
    this.#type = aType;
    this.#withdrawCount = 0;
    printOut(`Account is changed from ${oldType} to ${this.#type}`);
  }

  getBalance() { return this.#balance; }
    currencyConvert(newCurrency) {
    const oldCurrency = this._currencyType;
    const oldValue = CurrencyTypes[oldCurrency].value;
    const newValue = CurrencyTypes[newCurrency].value;

   
    this._balance = (this.#balance * newValue / oldValue).toFixed(2);
    printOut(`The account currency has change from ${CurrencyTypes[oldCurrency].name} to ${CurrencyTypes[newCurrency].name}`);
    printOut(`New balance is ${this._balance}${CurrencyTypes[newCurrency].denomination}`);

    
    this._currencyType = newCurrency;
  }

  deposit(aAmount) {
    const amount = Number(aAmount);
    this.#balance += amount;
    this.#withdrawCount = 0;
   printOut(`Deposit of ${amount}kr, new balance is ${this.#balance}kr`);
  }

  withdraw(aAmount) {
    if (this.#type === AccountType.Pension) {
      printOut("You can't withdraw from a Pensionskonto!");
      return;
    }

    if (this.#type === AccountType.Saving) {
      if (this.#withdrawCount >= 3) {
        printOut("You can't Withdraw from a Sparekonto more than three times!");
        return;
      }
      this.#withdrawCount++;
    }

    const amount = Number(aAmount);
    this.#balance -= amount;
    printOut(`Withdrawal of ${amount}, new balance is ${this.#balance}`);
  }
}
const myAccount = new TAccount(AccountType.Normal);
printOut();
printOut(`myAccount = ${myAccount.toString()}`);
myAccount.setType(AccountType.Saving);
printOut(`myAccount = ${myAccount.toString()}`);

printOut(newLine);



printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Expand the account class to this structure. getBalance" should return the account balance. "deposit" should increase the balance by a given amount
and print the amount and the new balance. "withdraw" should decrease the balance by a given amount
and print the amount and the new balance.*/

myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`My account balance is ${myAccount.getBalance()}`);
printOut(newLine);



printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Use a "switch statement" to check if the account type is "Pension" or "Saving". If the account type is a
savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if
the account type is changed or the deposit method is used. If the account type is a pension account, no
withdrawals are allowed.
Make sure that the account is set to "Saving" and that the balance is exactly 100, use "deposit" and
"setType" if necessary.*/


if (myAccount.toString() !== AccountType.Saving) {
  myAccount.setType(AccountType.Saving);
}
const need = 100 - myAccount.getBalance();
if (need > 0) { myAccount.deposit(need); }


myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30); 


myAccount.setType(AccountType.Pension);
myAccount.withdraw(10); 

myAccount.setType(AccountType.Saving);
myAccount.withdraw(10);

printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Add a private currency type to the account class and set the default value to "NOK".
Create a "public" "setCurrencyType" method so you can change the account currency. If this method tries
to switch to a new currency of the same type as the account already has, the method should do nothing
and just return. */

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};


const myAccount2 = new TAccount(AccountType.Normal);
myAccount2.deposit(150);

printOut(newLine);



printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Expand the account class with a private method that converts from one currency to another. Use this
method to change the balance when the currency changes. Replace all places where you print the balance
so that it has exactly 2 decimals*/



const myAccount3 = new TAccount(AccountType.Normal);
myAccount3.deposit(150);
myAccount3.currencyConvert("SEK");
myAccount3.currencyConvert("USD");
myAccount3.currencyConvert("NOK");



printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Modify the "deposit" and "withdraw" methods to take an additional parameter for the currency type. If no
currency type is specified (undefined), use NOK as the default. Make this change so that the functions
print out the currency the amount is in.
Deposit 12 USD and withdraw 10 GBP. Change the account currency a few times and withdraw the rest of
the balance with a different currency than the account is in. You should have a balance of exactly 0.00.*/

const acc7 = new TAccount(AccountType.Normal);
acc7.deposit(150); 


const usdToNok = 12 / CurrencyTypes.USD.value;
acc7.deposit(usdToNok);
printOut(`Deposit of 12$, new balance is ${acc7.getBalance().toFixed(2)}kr`);


const gbpToNok = 10 / CurrencyTypes.GBP.value;
acc7.withdraw(gbpToNok);
printOut(`Withdrawal of 10£, new balance is ${acc7.getBalance().toFixed(2)}kr`);

acc7.currencyConvert("SEK");
acc7.currencyConvert("USD");
acc7.currencyConvert("NOK");




printOut();
printOut(newLine);
