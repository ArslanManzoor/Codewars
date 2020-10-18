/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
    //start by assuming first number is the smallest
    var smallestNum = numbers[0];
    var indexSmallestNum = 0;

    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallestNum) {
            smallestNum = numbers[i];
            indexSmallestNum = i;
        }
    }

    if (numbers[numbers.length - 1] == smallestNum) {
        var secondSmallestNum = numbers[numbers.length - 2];
    }
    else var secondSmallestNum = numbers[numbers.length - 1];


    // We will iterate starting from the LAST number cus why the hell not.
    for (var j = (numbers.length - 1); j >= 0; j--) {
        if (numbers[j] < secondSmallestNum && numbers[j] !== smallestNum) {
            secondSmallestNum = numbers[j];
        }
    }

    //now we know the 2 smallest numbers
    return smallestNum + secondSmallestNum;
}
