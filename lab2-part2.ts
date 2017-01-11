class SavingsAccount {
	private balance: number;
	private ownerName: string;
	private max: number;
	constructor(initialBalance: number, name: string) {
		this.balance = initialBalance;
		this.ownerName = name;
		this.max = 0;
	}
	deposit(amount: number) {
		this.balance = this.balance + amount;
	}
	withdraw(amount: number) {
		if(this.max >= 3) {
			console.log("max withdrawals reached");
			return;
		} else {
			this.max = this.max + 1;
			this.balance = this.balance - amount;
		}
	}
	checkBalance() {
		console.log(`${this.ownerName} account balance: $${this.balance}`);
	}
	checkMax(){
		console.log(this.max);
	}
}
let savingsAccount = new SavingsAccount(20, "random");
savingsAccount.checkBalance();
savingsAccount.checkMax();
savingsAccount.deposit(99);
savingsAccount.checkBalance();
savingsAccount.withdraw(44);
savingsAccount.checkMax();
savingsAccount.withdraw(1);
savingsAccount.checkMax();
savingsAccount.withdraw(1);
savingsAccount.checkMax();
savingsAccount.withdraw(1);
savingsAccount.withdraw(1);
savingsAccount.checkBalance();
