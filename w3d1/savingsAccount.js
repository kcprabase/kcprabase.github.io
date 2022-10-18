"use strict";

class SavingsAccount extends Account {
    constructor(number, interestRate = 2.0) {
        super(number);
        this._interestRate = interestRate;
    }

    getInterestRate() {
        return this._interestRate;
    }

    setInterestRate(interestRate) {
        if (interestRate <= 0) {
            throw new RangeError("Interest rate has to be greater than zero");
        }
        this._interestRate = interestRate;
    }

    addInterest() {
        let interest = this.getBalance() * this._interestRate / 100;
        this.deposit(interest);
        return interest;
    }

    toString() {
        return "Account :" + this.getNumber() + ", Balance :" + this.getBalance() + ", Interest Rate :" + this.getInterestRate();
    }

    endOfMonth() {
        let interest = this.addInterest();
        return `Interest added Savings Account ${number}: balance: ${this.getBalance()} interest: ${interest}`;
    }
}