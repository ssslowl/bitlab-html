a = parseInt(prompt("side a:"));
b = parseInt(prompt("side b:"));
c = parseInt(prompt("side c:"));

if(a + b > c && a + c > b && b + c > a){
    alert("YES");
}else{
    alert("NO");
}