// Challenge
function something(items){
    var length = items.length;

    for(var i = 0; i < length; i++) {
        for(var j = 0; j < (length - i - 1); j++) {
            if(items[j] > items[j+1]) {
                var temp = items[j];
                items[j] = items[j+1];
                items[j+1] = temp;
            }
        }
    }

    return items;
}

    
    
var a = something([5,2]);
console.log(a);
var b = something([5,2,4,3,1]);
console.log(b);
