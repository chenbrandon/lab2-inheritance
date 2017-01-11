class Account {
	private balance: number;
	private ownerName: string;
	constructor(initialBalance: number, name: string) {
		this.balance = initialBalance;
		this.ownerName = name;
	}
	deposit(amount: number) {
		this.balance = this.balance + amount;
	}
	withdraw(amount: number) {
		this.balance = this.balance - amount;
	}
	checkBalance() {
		console.log(`${this.ownerName} account balance: $${this.balance}`);
	}
}
class CheckingsAccount extends Account {
	constructor(balance: number, ownerName: string) {
		super(balance, ownerName);
	}
}
class SavingsAccount extends Account{
	private max: number;
	constructor(initialBalance: number, name: string) {
		super(initialBalance, name);
		this.max = 0;
	}
	withdraw(amount: number) {
		if(this.max >= 3) {
			console.log("max withdrawals reached");
			return;
		} else {
			this.max = this.max + 1;
			super.withdraw(amount);
		}
	}
}
let savingsAccount = new SavingsAccount(20, "random");
savingsAccount.checkBalance();
savingsAccount.deposit(99);
savingsAccount.checkBalance();
savingsAccount.withdraw(44);
savingsAccount.withdraw(1);
savingsAccount.withdraw(1);
savingsAccount.withdraw(1);
savingsAccount.withdraw(1);
savingsAccount.checkBalance();


