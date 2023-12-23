var n = prompt('Enter the length of the array');

var arr = [];
var prod = 1;
for(var i = 0; i < n; i++){
    arr[i] = prompt('Enter the ' + (i + 1) + ' element of the array');

    if(arr[i] != 0){
        prod *= arr[i];
    }
}


alert('The product of the elements of the array is ' + prod);