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
        this.deposit(this.getBalance() * this._interestRate / 100);
    }

    toString() {
        return "Account :" + this.getNumber() + ", Balance :" + this.getBalance() + ", Interest Rate :" + this.getInterestRate();
    }
}