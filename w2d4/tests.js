
describe("String.filter: removes words passed in array of filter function of string", function () {
    it(' Input: "This house is not nice!".filter("not"). \nExpected Output: "This house is nice!"',
        function () {
            assert.equal("This house is nice!", "This house is not nice!".filter('not'));
        });
});

describe("String.filter", function () {
    it(' Input: "This house is not very nice!".filter(["not", "very"]). \nExpected Output: "This house is nice!"',
        function () {
            assert.equal("This house is nice!", "This house is not very nice!".filter(['not', 'very']));
        });
});

describe("Array.bubbleSort", function () {
    it(' Input: [234, 43, 55, 63,  5, 6, 235, 547]. \nExpected Output: [5, 6, 43, 55, 63, 234, 235, 547]',
        function () {
            assert.deepEqual([5, 6, 43, 55, 63, 234, 235, 547], [234, 43, 55, 63,  5, 6, 235, 547].bubbleSort());
        });
});


// describe("Teacher.teach", function () {
//     it(' Input: "". \nExpected Output: [5, 6, 43, 55, 63, 234, 235, 547]',
//         function () {
//             assert.deepEqual([5, 6, 43, 55, 63, 234, 235, 547], [234, 43, 55, 63,  5, 6, 235, 547].bubbleSort());
//         });
// });
