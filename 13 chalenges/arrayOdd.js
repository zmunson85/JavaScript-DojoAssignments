//Write a function that would return an array of all the odd numbers between 1 to 50.
// (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddNumbers() {      //created a function that passes in an array
    var arr = [];
    var newArr = [i];//this sets a place holder, seting arr at [] which is zero.
    for (var i = 1; i < 50; i++) {   // this initates the beginning of the for loop,1-50
        if (i % 2 !== 0) {          //finding the reamainder
            arr.push(i);             //push i value into the array
        }
    }
    console.log(newArr)      //lets me see what the newArr =
    return arr;          //       returns arr value
}

oddNumbers()            //this will be the output inside an array of odd numbers 1-50














// /*
// Get 1 to 255
// Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function for this exercise.
// */
// function get_array() {
//     var arr = [];
//     //your code here 
//     for (var i = 1; i < 256; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// /*
// Get even 1000
// Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus operator for this exercise.
// */
// function sum_even_numbers() {
//     var sum = 0;
//     //your code here
//     var i = 1;
//     while (i <= 1000) {
//         if (i % 2 === 0) {
//             sum = sum + i;
//         }
//         i++;
//     }
//     return sum;
// }
// /*
// Sum odd 5000
// Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)
// */
// function sum_odd_5000() {
//     var sum = 0;
//     //your code here 
//     var i = 1
//     while (i <= 5000) {
//         if (i % 2 === 1) {
//             sum = sum + i;
//         }
//         i++;
//     }
//     return sum;
// }
// /*
// Iterate an array
// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)
// */
// function iterArr(arr) {
//     //your code here 
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// /*
// Find max
// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
// */
// function findMax(arr) {
//     //your code here 
//     var max = Math.max.apply(null, arr);
//     return max;
//     /*or for loop
//     var max = arr[0];
//     for(var i=1;i<arr.length;i++){
//         if (max < arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
//     */
// }

// /*
// Find average
// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
// */
// function findAvg(arr) {
//     //your code here 
//     var avg;
//     var sum = 0;
//     arr.forEach(function (elem) {
//         sum += elem;
//     });
//     avg = sum / arr.length;
//     return avg;
// }

// /*
// Array odd
// Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
// */
// function oddNumbers() {
//     var arr = [];
//     //your code here 
//     var i = 1;
//     while (i <= 50) {
//         if (i % 2 === 1) {
//             arr.push(i);
//         }
//         i++;
//     }
//     return arr;
// }
// /*
// Greater than Y
// Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
// */
// function greaterY(arr, Y) {
//     //your code here 
//     var count = 0;
//     arr.forEach(function (elem) {
//         if (elem > Y) {
//             count++;
//         }
//     });
//     return count;
// }
// /*
// Squares
// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
// */
// //forEach
// function squareVal(arr) {
//     //your code here 
//     arr.forEach(function (elem, i, arr) {
//         arr[i] = elem * elem;
//     });
//     return arr;
// }
// //map
// function squareVal1(arr) {
//     //your code here 
//     var arr1 = arr.map(function (val) {
//         return val * val;
//     });
//     return arr1;
// }
// /*
// Negatives
// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
// */
// function noNeg(arr) {
//     //your code here 
//     var noneg = arr.map(function (elem) {
//         if (elem < 0) {
//             elem = 0;
//         }
//         return elem;
//     });
//     return noneg;
// }
// /*
// Max/Min/Avg
// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
// */
// function maxMinAvg(arr) {
//     //your code here 
//     var arrnew = [];
//     var sum = 0;
//     arr.forEach(function (elem) {
//         sum += elem;
//     });
//     arrnew.push(Math.max.apply(null, arr));
//     arrnew.push(Math.min.apply(null, arr));
//     arrnew.push(sum / arr.length);
//     return arrnew;
// }
// maxMinAvg([1, 2, 8]);
// /*
// Swap values
// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
// */
// function swap(arr) {
//     //your code here 
//     var arrnew = arr.slice();
//     var temp = arrnew[0];
//     arrnew[0] = arrnew[arrnew.length - 1];
//     arrnew[arrnew.length - 1] = temp;
//     return arrnew;
// }


// function numToStr(arr) {
//     arr = arr.map(function (elem) {
//         if (elem < 0) {
//             return 'Dojo';
//         } else {
//             return elem;
//         }
//     });
//     return arr;
// }