class CheckingsAccount {
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
let checkingsAccount = new CheckingsAccount(20, "random");
checkingsAccount.checkBalance();
checkingsAccount.deposit(99);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(44);
checkingsAccount.checkBalance();
