class BankAccount {
  String owner;
  double _balance;

  BankAccount(this.owner, this._balance);

  double get Balance => _balance;

  void deposite(double amount) {
    if (amount > 0) {
      _balance += amount;
      print('you put $amount , and your balance is $_balance');
    } else {
      print("you need to add money");
    }
  }

  void withdraw(double amount) {
    if (amount <= 0) {
      print("amount not available ");
    } else if (amount > _balance) {
      print("your balance not enough $owner!");
    } else {
      _balance -= amount;
      print("$owner withdraw $amount the balance is: $_balance");
    }
  }

  void transferTo(BankAccount personAccount, double amount) {
    if (amount <= 0) {
      print("there is not avilable");
    } else if (amount > _balance) {
      print("your balance not enough!");
    } else {
      _balance -= amount;
      personAccount._balance += amount;
      print("new balance to  $owner: $_balance");
    }
  }
}

void main() {
  BankAccount account1 = BankAccount("yomna", 3000);
  BankAccount account2 = BankAccount("aya", 5000);
  account1.deposite(1000);
  account1.withdraw(3000);
  account1.transferTo(account2, 1500);
  account2.withdraw(5000);
}
