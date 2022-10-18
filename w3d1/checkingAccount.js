class CheckingAccount extends Account {
    constructor(number, odLimit = 1000) {
        super(number);
        this._odLimit = odLimit;
    }

    setOdLimit(odLimit) {
        if (odLimit <= 0) {
            throw new RangeError("OD limit has to be greater than zero");
        }
        this._odLimit = odLimit;
    }

    getOdLimit() {
        return this._odLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this.getBalance() + this._odLimit)) {
            throw Error("Insufficient funds - OD limit exceeded!");
        }
        this._balance -= amount;
    }

    toString() {
        return "Account :" + this.getNumber() + ", Balance :" + this.getBalance() + ", OverDraft Limit :" + this._odLimit;
    }

    endOfMonth() {
        let balance = this.getBalance();
        if (balance < 0) {
            return `Warning, low balance Checking Account ${this.getNumber()}: balance: ${balance} overdraft limit: ${this._odLimit}`;
        }
    }
}