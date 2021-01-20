/*  
  Array: Pop Front
  Given array, remove and return the value at the beginning 
  of the array. Do this without using any built-in array 
  methods except pop() .
*/

// var myArr = [5, 6, 7, 8]
// var poppedElement = popFront(myArr);

//   [6, 7, 8]
//   5




/*  NINJA BONUS...
  Array: Push Front (function)
  Given an array and an additional value, insert this value 
  at the beginning of the array. Do this without using any 
  built-in array methods except push. ex. arr.push(7)
*/

function pushFront() {
    var arr = [5, 6, 7, 8]


}

function popFront(arr) {
    // your code here
    var temp = arr[0];
    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];//shifted 
    }
    arr.pop();
    console.log(arr);
    return temp;
}
var myArr = [5, 6, 7, 8]
var poppedElement = popFront(myArr);
console.log(poppedElement);

5, 6, 7, 8

i = 0 - 1 - 2 - 3
6, 7, 8, undefined

6, 7, 8


// var arr = [3, 4, 5, 6]
// pushFront(arr, 2)

// console.log(arr)
// [2, 3, 4, 5, 6]

function popFront(arr) {
    var arr = [5, 6, 7, 8]
    var poppedElement = popFront(arr);
}


// ninja bonus

var arr = [5, 6, 7, 8]; {


