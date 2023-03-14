function  tambah (a,b){
    return a + b;
}
function  kurang (a,b){
    return a - b;
}
function  bagi (a,b){
    return a / b;
}
function  kali (a,b){
    return a * b;
}

let operator = prompt("masukan operator");
var a= parseInt(prompt(`masukan nilai 1:`));
var b= parseInt(prompt(`masukan nilai 2:`));

if(operator == '+'){
    var hasil= tambah(a,b);
    console.log(a);
    console.log(b);
    console.log(hasil);
}
if(operator == '-'){
    var hasil= kurang(a,b);
    console.log(a);
    console.log(b);
    console.log(hasil);
}
if(operator == '/'){
    var hasil= bagi(a,b);
    console.log(a);
    console.log(b);
    console.log(hasil);
}
if(operator == '*'){
    var hasil= kali(a,b);
    console.log(a);
    console.log(b);
    console.log(hasil);
}