function checkPassword(){
let password =
document.getElementById("password").value;
if(password.toUpperCase() === "MUSTARDGAS"){
document.getElementById("message").innerHTML =
"ACCESS GRANTED... RECOVERING FILE...";
setTimeout(function(){
window.location.href =
"https://canva.link/bt0uj3aafq9ymxf";
},1500);
}
else{
document.getElementById("message").innerHTML =
"ACCESS DENIED // INVALID CHEMICAL IDENTIFIER";
}
}
