class Bank {
    constructor() {
        this._accountList = [];
    }

    static nextNumber = 141252100;

    addAccount() {
        let ac = new Account(nextNumber++);
        this._accountList.push(ac);
    }
    addSavingsAccount(interest) {
        let ac = new SavingsAccount(nextNumber++, interest);
        this._accountList.push(ac);
    }
    addCheckingAccount(overdraft) {
        let ac = new CheckingAccount(nextNumber++, overdraft);
        this._accountList.push(ac);
    }
    closeAccount(number) {
        this._accountList = this._accountList.filter(x => x.number != number);
    }
    accountReport() {
        let report = "";
        this._accountList.forEach(x => {
            report += x.toString() + '\n';
        });
    }

    endOfMonth() {
        this._accountList.forEach(a => {
            a.endOfMonth();
        });
    }
}