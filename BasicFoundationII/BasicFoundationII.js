//Biggie Size - Given an array, write a function that changes all 
//positive numbers in the array to the string "big".  Example:
// makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    console.log(arr)
    return arr;
}
arr = [-1, 3, 5, -5]
makeItBig(arr)


//Print Low, Return High - Create a function that takes in an array of numbers.  
//The function should print the lowest value in the array, 
//and return the highest value in the array.

function lowToHigh(arr) {
    var max = arr[0];
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log(min)
    return max;
}


lowToHigh([2, 10, -2, 6])


//Print One, Return Another - Build a function that takes in an array of numbers.  
//The function should print the second-to-last value in the array, 
//and return the first odd value in the array.


//
function SecondLast(arr) {
    var firstodd = []; //this was created to allow me to store all odd numbers
    var output = arr[arr.length - 2]; //this tells the function to find the second to last value in any array
    for (var i = 0; i < arr.length; i++) {  //
        if (arr[i] % 2 == 1) {
            firstodd.push(arr[i]);
        }
    }
    console.log(output)
    return firstodd[0];
}

SecondLast(test);

// Double Vision - Given an array(similar to saying 'takes in an array'),
// create a function that returns a new array 
// where each value in the original array has been doubled.
// Calling double([1, 2, 3]) should return [2, 4, 6] without changing the original array.


// Input: array [1,2,3]
//output array will be [2,4,6] without changing the array
function DoubleUp(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i];
        console.log(arr[i])
    }
}

DoubleUp([1, 2, 3])


// Count Positives - Given an array of numbers, create a function to 
// replace the last value with the number of positive values found in the array.  
// Example, countPositives([-1,1,1,1]) 
// changes the original array to [-1,1,1,3] and returns it.

// input arr -1,1,1,1, change the last value in the array with all positive values in the array.
//output is arr-[-1,1,1,3] // arr[3] => 3        arr.length-1 => 3
//find each value inside the array and which values are positive
//reasign last index in the arry with 3 because there are 3 positive values in the given array


function countPositives(arr) {
    var positives = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives++;
        }
    }
    arr[arr.length - 1] = positives;
    return arr;
}
arr = [-1, 1, 1, 1]
countPositives()


//Evens and Odds - Create a function that accepts an array.  
//Every time that array has three odd values in a row, print "That's odd!".  
//Every time the array has three evens in a row, print "Even more so!".

//input array, 
//output, anytime 3 values in a row are odd "thats odd", when there are 3 values in a row that are even print "even so more"
function oddsAndEvens(arr) {
    var odd = 0;
    var even = 0;

    for (i = 0; i < arr.length; i++) { // starting point to evalueate numbers inside given array

        if (arr[i] % 2 == 0) {        //if array indexes are divisiable by 2 they are even
            even++;            //continue to the next itearation of index. 0-1|1-2|2-3.....

        } else if (arr[i] % 2 != 0) {  // if each index doesn't evalueate as not even.  
            odd++;       // add one to the current iteration to increase by one
        }

    }
    if (odd >= 3) {               //if three values in a row are odd, it will print thats odd
        console.log('thats odd');

    }

    if (even >= 3) {               // if three values n a row are even it will print even more so
        console.log('even more so');
    }

}

arr = [121, 237, 369, 298, 312, 378,]
oddsAndEvens(arr)



//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, 
//specifically those whose index is odd(arr[1], arr[3], arr[5], etc).
//Afterward, console.log each array value and return arr.


//input is odd (arr[1] arr[3] arr[5])
var numbers = [0, 9, 2, 7, 4, 5]         //given array
function addSeconds(arr) {    //
    for (var i = 0; i < arr.length; i++)  // loop the the lenthg of the array, iteration for i 
        if (arr[i] % 2 !== 0) {      //is array of index divisible by 2? if true next line, if false, console.log(arr)
            arr[i]++   //if the previous statemetn is true the arri index will incease then console log arr
        }
    console.log(arr)
    return arr;
}
addSeconds([0, 9, 2, 7, 4, 5])





// Previous Lengths - You are passed an array containing strings.Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
function previousLengths(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}

var x = ["hello", "dojo", "awesome"];
console.log(previousLengths(x));



//9. Add Seven to Most - Build a function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSeven(arr) {
    var newArr = [];
    for (var i = 1; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

var y = [2, 5, 3, 6];
console.log(addSeven(y));

//10. Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

var x = [2, 4, 6, 1, 3];
console.log(reverse(x));

//11. Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function allNegative(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(-Math.abs(arr[i]));
    }
    return newArr;
}

var y = [1, -3, 5];
console.log(allNegative(y));

//12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
function alwaysHungry(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
        }
        else {
            sum++;
        }
    }
    if (sum == arr.length) {
        console.log("I'm hungry");
    }
}

var x = [1, 2, 4, 6];
var y = [1, "food", 1, "food"];
alwaysHungry(x);
alwaysHungry(y);

//13. Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
var array = [true, 42, "Ada", 2, "pizza"];
var nums = [1, 2, 3, 4, 5, 6];
function swapTowardCenter(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    var temp2 = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp2;
    return arr;
}
console.log(swapTowardCenter(array));
console.log(swapTowardCenter(nums));

//14. Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].
function scaleArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}

var array = [1, 2, 3];
var number = 3;
console.log(scaleArray(array, number));


