// Write a function that returns the sum of all the values within an array. 
// (e.g. first set[1,2,5] returns 8,  second set[-5,2,5,12] returns 14)

function iterArr(arr) {            //passing in an arr
    var sum = 0;            //starting point
    for (var i = 0; i < arr.length; i++) {  // 
        sum = sum + arr[i]
    }
    console.log(sum)
    console.log
    return sum;
}
firstSet = [1, 2, 5]
secondSet = [-5, 2, 5, 12]
iterArr(firstSet)
iterArr(secondSet)


