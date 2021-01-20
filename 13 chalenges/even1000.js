//get even 1000
//Write a function that would get the sum of all the even numbers from 1 to 1000. 
//You may use a modulus operator for this exercise.

function get_evenNumbers() {        // will be passing 1-1000 even numbers  into a new [arr]
    var sum = 0;
    newArr = []
    for (var i = 1; i < 1001; i++)
        if (i % 2 == 0) {
            newArr.push(i)
        }
    console.log(newArr)
    return sum;
}

get_evenNumbers()


// output will be 2-1000 all even numbers,