class Bank {
    constructor() {
        this._accountList = [];
    }

    static nextNumber = 141252100;

    addAccount() {
        let ac = new Account(Bank.nextNumber++);
        this._accountList.push(ac);
    }
    addSavingsAccount(interest) {
        let ac = new SavingsAccount(Bank.nextNumber++, interest);
        this._accountList.push(ac);
    }
    addCheckingAccount(overdraft) {
        let ac = new CheckingAccount(Bank.nextNumber++, overdraft);
        this._accountList.push(ac);
    }
    closeAccount(number) {
        this._accountList = this._accountList.filter(x => x.getNumber() != number);
    }
    accountReport() {
        let report = "";
        this._accountList.forEach(x => {
            report += x.toString() + '\n';
        });
        return report;
    }

    endOfMonth() {
        this._accountList.forEach(a => {
            a.endOfMonth();
        });
    }
}