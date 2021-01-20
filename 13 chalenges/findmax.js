//Given an array with multiple values, 
//write a function that returns the maximum number in the array. 
//(e.g.for[-3, 3, 5, 7] max is 7)

function findMax(arr) {// created a function that passes in the arr
    var max = arr[0];// sets inital varible max to arr[0] basically you made a place holder
    for (var i = 0; i < arr.length; i++) {// loops through the length of the array 
        if (max < arr[i]) {// conditional statement that checks if max is greater than arr[i]. arr[i] is the value at that position
            max = arr[i];// if it meets the above condition then it will reassign your max varible to arr[i] as long as its less than the intial value 
        }
    }
    console.log(max)// you write this here to basically check your code so if you want to see what it is returnning 
    //then you log your return value which is max
    return max;// return max you dont need to quite understand this at this point but when you
    //build stuff you pass different values from functions to other functions so if i made a function that found someones 
    // age and i want to store the value of age into a database i would return the age and call the return value with 
    //another function and now i can work with that age 
}
arr = [-3, 3, 5, 7] // inital array that you set so you can pass it in 
findMax(arr) //  function call with arr passed this is what tells the computer to run your function if you dont do this ypur function wont run 
    ////^
////////|
////////your array that you are passing through make sure its in the function name and in the function call 
//i hope this helps 