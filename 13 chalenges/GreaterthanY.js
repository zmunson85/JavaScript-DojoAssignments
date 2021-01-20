// Given value of Y, write a function that takes an array and returns the 
// number of values that are greater than Y.
// For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.
// (There are two values in the array greater than 3, which are 5, 7).


function greaterY(arr, Y) {
    var count = 0;//stating point to begin a count, counting values that are greater than Y
    for (var i = 0; i < arr.length; i++) {       //starting point for i, arr[i]= index for array, it will continue for the length of the array until it completes the loop.
        if (arr[i] > Y) {
            count++;                  //this is goint to be the values that are greater than Y
        }
    }
    console.log(count++) // this will indicate how many index values are greater than Y
    return count;// the count is the amount of index values that are greater than Y, in this case 2 values are greater than 3, 7 & 5. so the return is 2
}

arr = [1, 3, 5, 7]    // this is what we input into the function, arr prat of greater(arr,Y)
Y = 3                 // this is the input for Y
greaterY(arr, Y)       //***THIS CALLS THE FUNCTION WITH INPUT ABOVE***