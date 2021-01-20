// Write a function that takes an array of numbers and replaces any negative 
// values within the array with the string 'Dojo'.

function numToStr(arr) {// this value will be passed in: and called in at the bottom
    for (var i = 0; i < arr.length; i++) {  //where you start in the array, index of zero.
        if (arr[i] < 0) {  //-1 less than 0? yess, arr[i] becomes "Dojo"
            arr[i] = "Dojo"; // the previous condition was met to evaluate as less than zero, so arr[i] becomes string "Dojo" for every iteration that passes. 
        }
    }
    console.log(arr)
    return arr;
}
arr = [-1, -1, -2]
numToStr(arr)
