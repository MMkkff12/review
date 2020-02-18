


function average(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var c = document.getElementById("num3").value;
    var d = document.getElementById("num4").value;
    var e = document.getElementById("num5").value;
    var x = (Number (a)+ Number (b)+ Number (c)+Number (d)+ Number (e))/5;
    document.getElementById("output").innerHTML = x ;
}