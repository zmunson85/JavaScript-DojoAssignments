//Given an array with multiple values, 
//write a function that returns the average of the values in the array. 
//(e.g.for[1, 3, 5, 7, 20] average is 7.2)


function findAvg(arr) {             //passing in the array
    var sum = 0;                      //starting point

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum / arr.length);
    return sum / arr.length;
}

arr = [1, 3, 5, 7, 20] //perameters given for this function
findAvg(arr)