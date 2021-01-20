//print odds 1-20
//It's now time to practice writing your own algorithms using loops!  Create an algorithm for each of the challenges below.  Make sure that you run your code to ensure your output is matching the provided expected output.   One you are done, submit your .js file with the solution.

// Print odds 1 - 20
// Print out all odd numbers from 1 to 20
// The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// Sum and Print 1 - 5
// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
// The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15

function SumPrint() {
    num = 0;                                         //original array
    for (i = 0; i < 6; i++) {  // i= index, i<arr.length= amount of loops, i++ keeps the loop going
        num = num + i           //holder variable, every indx will be added to NUM

        console.log(num)
    }
}
SumPrint()

//var     value
//i             (1-3-5-7-9-11-13-15-17-19)



// //Sum and Print 1-5
// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
// The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15

function SumPrint() {
    var arr = [1, 2, 3, 4, 5]
    num = 0;                                         //original array
    for (i = 0; i < arr.length; i++) {  // i= index, i<arr.length= amount of loops, i++ keeps the loop going
        num = num + arr[i];             //holder variable, every indx will be added to NUM
        arr[i] = arr[num]
    }
    console.log(arr)
}
SumPrint()