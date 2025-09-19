// summary :
// => Account (Parent) ---> [saving accounts - checking account] (child)
// => Account ==> property: [accountBalance] ==> Methods [credit(amount), debit(amount), getBalance()]

function Account(_accountBalance) {
  this.AccountBalance = _accountBalance || 0;
}
Account.prototype.credit = function (amount) {
  this.AccountBalance += amount;
};
Account.prototype.debit = function (amount) {
  if (amount > this.AccountBalance) {
    console.log("No money here -_-");
  } else {
    this.AccountBalance -= amount;
  }
};
Account.prototype.getBalance = function () {
  return this.AccountBalance;
};
//===========================================================================

//==> SavingsAccount inherit from Account
function SavingsAccount(_accountBalance, _interestRate) {
  Account.call(this, _accountBalance);
  this.InterestRate = _interestRate;
}
SavingsAccount.prototype = Object.create(Account.prototype); //==> prototypal inheritance
SavingsAccount.prototype.constructor = SavingsAccount; //=> prevent overright original constructor

SavingsAccount.prototype.calculateInterest = function () {
  return this.AccountBalance * this.InterestRate;
};
//===========================================================================
function CheckingAccount(_initialBalance, _transactionFee) {
  Account.call(this, _initialBalance); // call base constructor
  this.TransactionFee = _transactionFee;
}
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.credit = function (amount) {
  this.AccountBalance += amount;
  this.AccountBalance -= this.TransactionFee;
};

CheckingAccount.prototype.debit = function (amount) {
  const totalAmount = amount + this.TransactionFee;
  if (totalAmount > this.AccountBalance) {
    console.log("nO money -_-");
  } else {
    this.AccountBalance -= totalAmount;
  }
};

//===========================================================================
// ====> Test1: parent a ccount
let account = new Account(1000);
account.credit(100);
account.debit(500);
console.log(`Account Balance: , ${account.getBalance()}`);

// ====> Test2: savings account
let savings = new SavingsAccount(1000, 0.1);
savings.credit(500);
console.log(`Savings Balance: ${savings.getBalance()}`);
console.log(`interests : ${savings.calculateInterest()}`);

// Test3: checking account
let checking = new CheckingAccount(1000, 5);
checking.credit(500);
checking.debit(300);
console.log(`Checking Balance: ${checking.getBalance()}`);
