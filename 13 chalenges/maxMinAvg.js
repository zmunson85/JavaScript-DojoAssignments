// Given an array with multiple values, write 
// a function that returns a new array that only contains the maximum, 
// minimum, and average values of the original array. 
// (e.g. [1, 5, 10, -2] will return [10, -2, 3.5])

function findAvg(arr) {//passing in an array
    var sum = 0;//starting point for arr index, will be added up later as (sum), index=[0+1+2+3]
    var max = 0;// starting point or place holder to check against the value in arr[i]
    var min = arr[0];//starting point or place holder to check against the value in arr[i]
    var newArr = []//creating a new location to store output values, 
    for (var i = 0; i < arr.length; i++) {// starting point to for loop. loop will continue for the length of the array.i++ 
        //keeps loop going by increasing index value at each itteration.

        sum = sum + arr[i]// to increase the value of the sum by adding each index while it continues through the for loop.
        if (arr[i] > max) {//IS i Greater than max
            max = arr[i]//if the condition is met  arr[i] is greater than max, max = arr[i]
        }
        if (arr[i] < min) {//Is i less than min
            min = arr[i]//if this condition is met you arr[i] is less than min, min=arr[i] 
        }
    }
    average = sum / arr.length//sum divided by the length of the arr, all values added up and divided by the amount of index values. 
    newArr.push(average)// pushing value: average is put in newArr. 
    newArr.push(min)//pushing the var min: to newArr
    newArr.push(max)//pushing the var max: to newArr
    console.log(newArr);//show the values inside newArr
    return average;// this will return the variable average. 
}
arr = [1, 5, 10, -2]//this is the array we are passing in
findAvg(arr)// calling the function, THIS HAS TO BE HERE FOR FUNCTION TO RUN!



//           var | value
//           _________
//           arr |[1,5,10,-2]---[]
//            i  | 0-1-2-3
//        arr[i] |1-5-10--2
//          sum  |1-6-16-14
//          max  |1-5-10-10
//          min  |1-1-1--2
//       newArr  |[3.5, -2, 10]
//               |
//               |
