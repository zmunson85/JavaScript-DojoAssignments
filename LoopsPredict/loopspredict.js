{/* <____PREDICT 1> */ }

for (var num = 0; num < 15; num++) {
    console.log(num);
}

//                 // < tdiagram>
// var                     value
// num            (0-1-2-3-4-5-6-7-8-9-10-11-12-13-14)






/* <_________PREDICT 2___> */

for (var i = 1; i < 10; i += 2) {           //
    if (i % 3 == 0) {
        console.log(i)
    }
    // < tdiagram>
    //console.log 3,9
    // var         value
    // i           1>>(3) (9)





    //predict 3

    //step 1        step2//step 6-now re enter for loop with updated value..
    for (var j = 1; j <= 15; j++) {             // step 1 again with new value

        //step 3
        if (j % 2 == 0) {
            j += 2;
        }

        //step 4
        else if (j % 3 == 0) {
            j++;
        }
        //
        console.log(j);


        //tdiagram

        var value
        j           1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11 - 12 - 13 - 14 - 15 - 16

        //console.log> (1,4,5,8,10,11,14,16)

    }


