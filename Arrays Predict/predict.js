var arr = [8, 6, 7, 5, 3, 0, 9]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//i=0; i<arr.length; i++
//index 0=8,
//index 1=6
//index 2=7
//index 3=5
//index 4=3
//index 5=0
//index 6=9


var arr = [7, 3, 8, 4, 2, 0, 1];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
    else {
        console.log("That is odd!");
    }
}
console.log()
    (that is odd, that is odd, 8, 4, 2, 0 that is odd)

//i=index 0
// i<7 is not less than 7 so else logg "that is odd
//i++, i=index 1, 3<7; 3%2=1; does not equal 0, else applies, logg that is odd
//i++, i=index 2, 8, 8%2=0 consolelog 8,
//i++, index 3=4. is 4 less than arr.length; yes, 4%2=0 so console log 4,
//i++, index 4=2, is 2 less than arr.length; yes, 2%2=0 so console.log 2,
//i++, index 5=0, is 0 less than 7 yes, 0%2=0, console log 0
//i++, index 6=1, is 1 less than 7? yes, 1%2=1, console log that is odd







var arr = [1, 3, 8, -5, 0, -2, 4, -1];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if (arr[i] == 0) {
        arr[i] = "Zero";
    }
    else {
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);


//console.log          arr(-1, 3,8,"Zero",4) newArr(-5,-2,-1)
 //iteration 1  index (0)=1
//i = index/ i=0/ 0 index= 1
//is 1<arr.length, arr.length=8
//is 1 less than 8? yes, is 1 less than 0? not true
//else; is 1==0? not ture
//else; 1=-1; console.log (-1)

        //iteration 2  index(1)=3
//i++, i=1, is 3 less than 8, yes, is 3 less than 0? not true
    //else, is 3 == 0? not true, else, not true, else2 not true, console log 3

//itteration 3 index(2)=8
//i++, i =2, is 8 less than 8, no, is 8 less than 0, no, is 8 ==0, no, is 2=8, no, console log 8.

//itteration 4 index(3)=-5
//i++, i=3, is -5 less, than 8? yes, is -5 less than 0? yes, PUSH to newArr. Consle log newArr (-5)

//itteration 5 index(4)=0
// i++, i=4, is 0 les than 8? yes, is 0 less than 0, no, else, else2 is arr[i]=arr[i]? yes, console.log "zero"

// iteration 6 index (5) =-2
//i++, i=-2, is -2 less than 8? yes, is -2 less than 0? yes, PUSH to newArr. Console.log -2 in newArr

// iteration 7 index (6) =4
//i++, i=4, is 4 less than 8, yes, is 4 less than 0, no, is 4==0? no, console.log 4

//itteration 8 index (7) =-1
// i++, i=-1, is -1 less than 8:, yes, -1 less than 0? yess Push to newArr. console log new arr