/* 4 Define a function sum() and a function multiply() 
that sums and multiplies (respectively) all the numbers in an array of numbers*/

//Q4
function sum(arr) {
    return arr.reduce((x, y) => x + y, 0);
}

/* 5 Define a function reverse() that computes the reversal of a string.*/
function reverse(str) {
    return str.split("").reduce((x,y)=>y+x,"");
}

/* 7 Write a function filterLongWords() that takes an array of words and an integer i and
 returns the array of words that are longer than i. */

 //Q7
function filterLongWords(words, i) {
    return words.filter(function (w) {
        return w.length > i;
    });
}