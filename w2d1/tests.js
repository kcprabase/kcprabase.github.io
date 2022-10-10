describe("sum", function () {
    it("takes array of numbers, and returns sum of all numbers in that array.",
        function () {
            assert.equal(100, sum([10,20,30,40]));
        });
});


describe("reverse", function () {
    it("takes a string and returns the reverse of the string.",
        function () {
            assert.equal("hsebarp", reverse("prabesh"));
        });
});


describe("filterLongWords", function () {
    it("takes an array of string and returns array of strings that are longer than given length.",
        function () {
            assert.deepEqual(['prabesh','elephant','international'], filterLongWords(['prabesh', 'test', 'elephant', 'international', 'hi', 'one'], 4));
        });
});