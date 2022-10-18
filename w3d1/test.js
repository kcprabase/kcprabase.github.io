describe("getNumber", function () {
    let ac = new Account("12345");
    it("should return account number 12345",
        function () {
            assert.equal("12345", ac.getNumber());
        });
});


describe("getBalance", function () {
    let ac = new Account("12345");
    it("should return balance 0.0",
        function () {
            assert.equal(0.0, ac.getBalance());
        });
});



describe("deposit", function () {
    let ac = new Account("12345");
    it("Show throw error 'Deposit amount has to be greater than zero'",
        function () {
            assert.throws(() => ac.deposit(0), RangeError, "Deposit amount has to be greater than zero");
        });
});

describe("Withdraw", function () {
    let ac = new Account("12345");
    it("Show throw error 'Withdraw amount has to be greater than zero'",
        function () {
            assert.throws(() => ac.withdraw(0), RangeError, "Withdraw amount has to be greater than zero");
        });
});

describe("Withdraw", function () {
    let ac = new Account("12345");
    ac.deposit(200);
    it("Show throw error 'Insufficient funds'",
        function () {
            assert.throws(() => ac.withdraw(300), Error);
        });
});

describe("ToString", function () {
    let ac = new Account("12345");
    ac.deposit(200);
    it("Should return text:  'Account 12345: balance 200'",
        function () {
            assert.equal(ac.toString(), "Account 12345: balance 200");
        });
});

describe("SavingsAccount: getInterestRate() - default value", function () {
    let ac = new SavingsAccount("12345");
    it("Should return default Interest Rate: 2.0",
        function () {
            assert.equal(ac.getInterestRate(), 2.0);
        });
});

describe("SavingsAccount: getInterestRate() - set 5.0 on constructor", function () {
    let ac = new SavingsAccount("12345", 5.0);
    it("Should return Interest Rate: 5.0",
        function () {
            assert.equal(ac.getInterestRate(), 5.0);
        });
});

describe("SavingsAccount: getInterestRate() - set 7.0 with setInterestRate(rate)", function () {
    let ac = new SavingsAccount("12345", 5.0);
    ac.setInterestRate(7.0);
    it("Should return Interest Rate: 7.0",
        function () {
            assert.equal(ac.getInterestRate(), 7.0);
        });
});

describe("SavingsAccount: setInterestRate(rate)", function () {
    let ac = new SavingsAccount("12345");
    it("Should return text:  'Interest rate has to be greater than zero'",
        function () {
            assert.throws(() => ac.setInterestRate(0.0), RangeError);
        });
});

describe("SavingsAccount: addInterest(rate) and Get Balance", function () {
    let ac = new SavingsAccount("12345", 5.0);
    ac.deposit(200);
    ac.addInterest();
    it("Should return balance after adding interest: 210.00",
        function () {
            assert.equal(ac.getBalance(), 210.00);
        });
});

describe("SavingsAccount: toString()", function () {
    let ac = new SavingsAccount("12345", 5.0);
    ac.deposit(200);
    ac.addInterest();
    it("Should return test: 'Account :12345, Balance :210, Interest Rate :5'",
        function () {
            assert.equal(ac.toString(), 'Account :12345, Balance :210, Interest Rate :5');
        });
});


describe("CheckingAccount: getOdLimit() - default value", function () {
    let ac = new CheckingAccount("12345");
    it("Should return default Overdraft limit: 1000.00",
        function () {
            assert.equal(ac.getOdLimit(), 1000.0);
        });
});

describe("CheckingAccount: getOdLimit() - set 2000.00 on constructor", function () {
    let ac = new CheckingAccount("12345", 2000.00);
    it("Should return Overdraft limit: 2000.00",
        function () {
            assert.equal(ac.getOdLimit(), 2000.00);
        });
});

describe("CheckingAccount: getOdLimit() - set 1500.00 with setOdLimit(limit)", function () {
    let ac = new CheckingAccount("12345", 5.0);
    ac.setOdLimit(1500.00);
    it("Should return Overdraft limit: 1500.00",
        function () {
            assert.equal(ac.getOdLimit(), 1500.00);
        });
});

describe("CheckingAccount: setOdLimit(limit)", function () {
    let ac = new CheckingAccount("12345");
    it("Should return text:  'OD limit has to be greater than zero'",
        function () {
            assert.throws(() => ac.setOdLimit(0.0), RangeError);
        });
});

describe("CheckingAccount: Withdraw()", function () {
    let ac = new CheckingAccount("12345");
    ac.deposit(2000);
    it("Should return 'Insufficient funds - OD limit exceeded!'",
        function () {
            assert.throws(() => ac.withdraw(8000), Error);
        });
});

describe("CheckingAccount: toString()", function () {
    let ac = new CheckingAccount("12345");
    ac.deposit(3000);
    it("Should return test: 'Account :12345, Balance :3000, OverDraft Limit :1000'",
        function () {
            assert.equal(ac.toString(), 'Account :12345, Balance :3000, OverDraft Limit :1000');
        });
});


describe("Bank", function () {
    let bank = new Bank();
    bank.addAccount();
    bank.addSavingsAccount(7.0);
    bank.addCheckingAccount(2000);
    it("accountReport(): should return string : 'Account 141252100: balance 0\nAccount :141252101, Balance :0, Interest Rate :7\nAccount :141252102, Balance :0, OverDraft Limit :2000\n'",
        function () {
            assert.equal(bank.accountReport(), 'Account 141252100: balance 0\nAccount :141252101, Balance :0, Interest Rate :7\nAccount :141252102, Balance :0, OverDraft Limit :2000\n');
        });

});

describe("Bank after one account (141252100) is closed.", function () {
    let bank = new Bank();
    bank.addAccount();
    bank.addSavingsAccount(7.0);
    bank.addCheckingAccount(2000);
    bank.closeAccount(141252103);
    it("accountReport(): should return string : 'Account :141252104, Balance :0, Interest Rate :7\nAccount :141252105, Balance :0, OverDraft Limit :2000\n'",
        function () {
            assert.equal(bank.accountReport(), 'Account :141252104, Balance :0, Interest Rate :7\nAccount :141252105, Balance :0, OverDraft Limit :2000\n');
        });
});

// describe("Bank", function () {
//     let bank = new Bank();
//     bank.addAccount();
//     bank.addSavingsAccount(7.0);    
//     bank.addCheckingAccount(2000);
//     it("endOfMonth(): should return string : ''",
//         function () {
//             assert.equal(bank.endOfMonth(), '');
//         });

// });


