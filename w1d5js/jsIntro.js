
//Q1
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log("Expected output of max(55,66) is 66  " + myFunctionTest(66, max(55, 66)));

//Q2
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));

//Q3
function isVowel(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(str)) {
        return true;
    } else {
        return false;
    }
}
console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel("a")));
console.log("Expected output of isVowel('z') is false  " + myFunctionTest(false, isVowel("z")));

//Q4
function sum(arr) {
    let sum = 0;
    arr.forEach(function (x) {
        sum += x;
    });
    return sum;
}
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));

function multiply(arr) {
    let product = 1;
    arr.map(function (x) {
        product *= x;
    });
    return product;
}
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

//Q5
function reverse(str) {
    // return str.split("").reverse().join("");
    if (!str)
        return "";
    else
        return reverse(str.substr(1)) + str[0];
}
console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest("ratset gaj", reverse("jag testar")));
console.log("Expected output of reverse('prabesh') is 'hsebarp'  " + myFunctionTest("hsebarp", reverse("prabesh")));

// Q6
function findLongestWord(arr) {
    let longest = "";
    arr.forEach(function (x) {
        if (x.length > longest.length) {
            longest = x;
        }
    });
    return longest;
}
console.log("Expected output of findLongestWord(['prabesh','test','elephant','international','hi', 'one']) is 'international'  " + myFunctionTest("international", findLongestWord(['prabesh', 'test', 'elephant', 'international', 'hi', 'one'])));

//Q7
function filterLongWords(words, i) {
    return words.filter(function (w) {
        return w.length > i;
    });
}
console.log("Expected output of filterLongWords(['prabesh','test','elephant','international','hi', 'one'], 4) is ['prabesh','elephant','international']  " + myFunctionTest(['prabesh', 'elephant', 'international'], filterLongWords(['prabesh', 'test', 'elephant', 'international', 'hi', 'one'], 4)));

console.log("Updated code on jsfiddle");
const a = [1, 3, 5, 3, 3];
console.log("Original list is", a.toString());
const b = a.map(function (elem, i, array) {
    return elem * 10;
})
console.log(b.toString());
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log(c.toString());
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log(d);



/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (Array.isArray(expected)){
        return myFunctionTestForArray(expected, found);
    }
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myFunctionTestForArray(expected, found) {
    if (arraysEqual(expected, found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
