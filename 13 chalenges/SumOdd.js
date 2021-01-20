w////Write a function that returns the sum of all the odd numbers from 1 to 5000.
//(e.g. 1+3+5+...+4997+4999)

function sumOdd() {
    var sum = 0;
    newArr = [];
    for (var i = 0; i <= 5000; i++) {
        if (i % 2 == 1)
            newArr.push(i)
    }
    console.log(newArr)
    return sum;
}
sumOdd()
