//////////////////////////////////////////////////////////////////////////
// print values and sum
//1. print each array value and the sum so far
// 2. the expecct output will be:


// create a variable for sum set to 0
// create a variable num                        
var testArr = [6, 3, 5, 1, 2, 4]
var sum = 0;
for (var idx = 0; idx < testArr.length; idx++) {
    sum = sum + testArr[idx]
    console.log("num" + testArr[idx] + "Sum" + sum);
}

Num 6, Sum 6
Num 3, Sum 9
Num 5, Sum 14
Num 1, Sum 15
Num 2, Sum 17
Num 4, Sum 21

// Value * Position

// Multiply each value in the array by its array index
// The expected output will be:
// [0,3,10,3,8,20]
var arr = [6, 3, 5, 1, 2, 4]//input array needs to be []
for (var i = 0; i < arr.length; i++) {
    arr[i] * i;
}
console.log(arr)

//var i=starting point, to indicate amount of loops/itterations 
//create function that mutiplys array           //i++ will add 1 to index value to continue for loop. 
//loop through the array 
//arr[i] * i


//
//var testArr = [6,3,5,1,2,4]

var testArr = [6, 3, 5, 1, 2, 4]

var numbers = [6, 3, 5, 1, 2, 4];
var sum = 0
for (var i = 0; i < numbers.length; i++) {

    sum = sum + (i * numbers[i]);
    console.log(sum);
}

// To create an array of integers, you could write:

// int[] myNum = {10, 20, 30, 40};



