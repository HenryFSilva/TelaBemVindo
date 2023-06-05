function somar(){
    let numero1 = parseInt(document.getElementById("num1").value); 
    let numero2 = parseInt(document.getElementById("num2").value);

    let resultado = numero1 + numero2;
    //alert("O resultado da soma = "+resultado);
    document.getElementById("resultado").value = resultado;
}


function subtrair(){
    let numero1 = parseInt(document.getElementById("num1").value); 
    let numero2 = parseInt(document.getElementById("num2").value);

    let resultado = numero1 - numero2;
    //alert("O resultado da subtração = "+resultado);
    document.getElementById("resultado").value = resultado;
}


function dividir(){
    let numero1 = parseInt(document.getElementById("num1").value); 
    let numero2 = parseInt(document.getElementById("num2").value);

    let resultado = numero1 / numero2;
    //alert("O resultado da divisão = "+resultado);
    document.getElementById("resultado").value = resultado;
}


function multiplicar(){
    let numero1 = parseInt(document.getElementById("num1").value); 
    let numero2 = parseInt(document.getElementById("num2").value);

    let resultado = numero1 * numero2;
    //alert("O resultado da multiplicação = "+resultado);
    document.getElementById("resultado").value = resultado;
}
 
 function calcular(){
   
     if(conta=="somar"){

     let numero1 = parseInt(document.getElementById("num1").value); 
     let numero2 = parseInt(document.getElementById("num2").value);

     let resultado = numero1 + numero2;
     alert("O resultado da soma = "+resultado);

     }
}

    function calcular(qualquerNome){

    if(qualquerNome=="subtrair"){
        subtrair();


    }

    if(qualquerNome=="somar"){
        somar();


    }

    if(qualquerNome=="dividir"){
        dividir();


    }

    if(qualquerNome=="multiplicar"){
        multiplicar();


    }

}

