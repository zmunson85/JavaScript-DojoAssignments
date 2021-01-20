// get 1 to 255
//Write a function that returns an array with all the numbers from 1 to 255. 
// You may use the push() function for this exercise.

function get_array() {
    var arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i)
    }
    console.log(arr)
    return arr;
}
get_array()

// output would be 1,2,3,4,33,34,35,36,37,38,39.....>..>255)
