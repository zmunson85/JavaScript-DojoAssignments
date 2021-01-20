function func1(arr) {
    var size = arr.length;
    var temp = arr[size - 1];
    arr[size - 1] = arr[0];
    arr[0] = temp;
    return arr;

    console.log(func1([1, 2, 3]));


    function concat(arr1, arr2) {
        var newArr = [];
        for (let i = 0; i < arr1.length; i++) {
            newArr.push(arr1[i]);
        }
        for (let i = 0; i < arr2.length; i++) {
            newArr.push(arr2[i]);
        }
        return newArr;
    }
    console.log(concat(['a', 'b'], [1, 2]));


    Array: Reverse
    Given a numerical array, reverse the order of values, in -place.The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed.Working ‘in -place’ means that you cannot use a second array – move values within the array that you are given.As always, do not use built -in array functions such as splice().
* /
    // 1,2,3
    // 1 3 

    // 1,2,3,4,5,6
    // 1,6---> 2,5-->3

    // 1,2,3,4,5,6,7 ---3
    //1,7---2,6, ----3,5

    function reverse(arr) {
        var len = arr.length;
        for (var i = 0; i < len / 2; i++) {
            var temp = arr[i];
            arr[i] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }
        return arr;
    }
    var array = [1, 3, 5, 7, 9]
    console.log(reverse(array));

