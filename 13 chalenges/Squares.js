// Given an array with multiple values, write a function that replaces each value in the 
// array with the product of the original value multiplied by itself. 
// (e.g. [1, 5, 10, -2] will become[1, 25, 100, 4])

function squareVal() {
    var arr = [1, 5, 10, -2] // assigning the arr value to var i
    for (var i = 0; i < arr.length; i++) {//var is starting point, runs through length of array,
        arr[i] = arr[i] * arr[i];// mutiply each index by itself
    }
    console.log(arr)// it logs the array in the console after the loop changed it. the ouput is [1, 25, 100, 4]
    return arr; //we are returning the array after the for loop changed it 
}

squareVal()// caling the function this is what STARTS THE FUNCTION !!!!!

var add = [1, 5, 10, -2];

// multipleA([1, 5, 10, -2]) // -> multipleA(add)