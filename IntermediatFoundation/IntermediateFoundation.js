



//Sigma - Implement function sigma(num) that, given a number, 
//returns the sum of all positive integers up to the given number(inclusive).
//Ex: sigma(3) = 6(or 1 + 2 + 3); sigma(5) = 15(or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
    return sum;
}
    sigma(12);
    sigma(8);






//Factorial - Write a function factorial(num) that, given a number, 
//returns the product(multiplication) of all positive integers 
//from 1 up to the given number(inclusive).
//For example, factorial(3) = 6(or 1 * 2 * 3); factorial(5) = 120(or 1 * 2 * 3 * 4 * 5).


function factorial(num) {
    var sum = 1; //starting point for fraction
    for (var i = 1; i <= num; i++) {
        sum *= i;
    }
    console.log(sum);
    return sum;
}
factorial(15);
factorial(16);