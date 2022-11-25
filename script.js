function add(){
    var n1 = parseFloat(document.getElementById('l1').value);
    var n2 = parseFloat(document.getElementById('l2').value);

    var oper = document.getElementById('l3').value;

    if(oper === '+'){
        document.getElementById('result').value = n1 + n2;
    }
}
function sub(){
    var n1 = parseFloat(document.getElementById('l1').value);
    var n2 = parseFloat(document.getElementById('l2').value);

    var oper = document.getElementById('l4').value;

    if(oper === '-'){
        document.getElementById('result').value = n1 - n2;
    }
}
function mul(){
    var n1 = parseFloat(document.getElementById('l1').value);
    var n2 = parseFloat(document.getElementById('l2').value);

    var oper = document.getElementById('l5').value;

    if(oper === '*'){
        document.getElementById('result').value = n1 * n2;
    }
}
function div(){
    var n1 = parseFloat(document.getElementById('l1').value);
    var n2 = parseFloat(document.getElementById('l2').value);

    var oper = document.getElementById('l6').value;

    if(oper === '/'){
        document.getElementById('result').value = n1 / n2;
    }
}

 