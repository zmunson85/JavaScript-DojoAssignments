// Write a function that will swap the first and last values of any given array.
// The default minimum length of the array is 2.
// (e.g. [1, 5, 10, -2] will become[-2, 5, 10, 1]).

function swap(arr) {
    var temp = arr[0];               ///start with array index of 0--STARTING POINT
    arr[0] = arr[arr.length - 1];   //
    arr[arr.length - 1] = temp     //
    console.log(arr)
    return arr;
}
first_arr = [1, 5, 10, -2]
second_arr = [-2, 5, 10, 1]
swap(first_arr)
swap(second_arr)
