var n = prompt('Enter the length of the array');

var arr = [];

for(var i = 0; i < n; i++){
    arr[i] = prompt('Enter the ' + (i + 1) + ' element of the array');
}

var search = prompt('Enter the element to search');

if(arr.indexOf(search) != -1){
    alert('Yes ' + arr.indexOf(search));
}else{
    alert('No');
}