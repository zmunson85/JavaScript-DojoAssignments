

function removeAt(arr,index){
    var temp= arr[index];
    if(index <= Array.length){
        return arr[index];
    }
    if ((arr.length -1==) || (arr.length <2)){
        var temp=arr[index;]
        else{
            for (var i = index; i < Array.length-1; i++){

                arr[i]=arr[i+1];
                arr.pop();
                return temp;
            }
            else{
                for (var i=index; i < Array.length-1; i++){
                    return arr[index];
                    arr[i]=arr[i+1
                    Array.pop();
                    return arr[index];
                }
            }
    }   
}
}
var array1=[6,7,8,9];
console.log(removeAt(arr1,2))