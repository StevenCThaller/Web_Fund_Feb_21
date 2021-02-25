// T Chart Challenge 1
function a(arr){
    var b = arr.length;

    var temp = arr[b-1];
    arr[b-1] = arr[0];
    arr[0] = temp;

    return arr;
}

console.log(a([1,2,3]));
console.log(a([2,4]));


















// T Chart Challenge 2
function b(arr){
    var x = arr.length;
    for(var i = 0; i < x/2; i++) {
        var temp = arr[x-1-i];
        arr[x-1-i] = arr[i];
        arr[i] = temp;
    }
}
var numArr = [1,2,3,4,5];
console.log(b([1,2,3]));
console.log(b(numArr));
// console.log(numArr);


// function c(num){
//     num -= 4;
//     return num;
// }

// var x = 10;
// c(x);
// console.log(x);