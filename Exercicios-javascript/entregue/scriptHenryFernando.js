//1
apresentacao()

function apresentacao(){
    alert("Bom dia, Mundo!!!")
    document.getElementById("apresentacao").innerHTML = "Bom dia, Mundo!!!"
}

//2
function calcularCubo(){

    let numero = parseFloat(document.getElementById("numero").value); 
    var cubo = (numero ** 3); 

    document.getElementById("cubo").innerHTML= ("RESULTADO:O resultado de "+numero+" elevado ao cubo é "+cubo)

    }

//3
function calculoDaTemperatura(){
    let temperaturaf = parseFloat(document.getElementById("temperaturaf").value)

    var conversao = (temperaturaf-32)*0.5556

    document.getElementById("temperatura").innerHTML= ("RESULTADO:A conversão para Celcius(C) é "+conversao)

}  

//4
function calculoAreaTriangulo(){
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    
    let area = (base*altura)/2

    if(area <=100){
        document.getElementById("triangulo").innerHTML= ("RESULTADO:A área do triângulo é "+area)

    }
    else if((area>100)&&(area<=400)){
        document.getElementById("triangulo").innerHTML= ("RESULTADO:A área do triângulo é "+area)

    }
    else if((area>400)&&(area<=600)){
        document.getElementById("triangulo").innerHTML= ("RESULTADO:A área do triângulo é "+area)

    }
    else if((area>=600)&&(area<=1000)){
        document.getElementById("triangulo").innerHTML= ("RESULTADO:A área do triângulo é "+area)

    }
    else{
        document.getElementById("triangulo").innerHTML= ("RESULTADO:A área do triângulo é "+area)
    } 

}


//5
function calculoAreaCirculo(){
    
    let raio = parseFloat(document.getElementById("raio").value);

    let pi = 3.14
    let area = (pi*raio)*2

    if(area <=100){
        document.getElementById("circulo").innerHTML= ("RESULTADO:A área do círculo é "+area)
    }
    else if((area>100)&&(area<=400)){
        document.getElementById("circulo").innerHTML= ("RESULTADO:A área do círculo é "+area)

    }
    else if((area>400)&&(area<=600)){
        document.getElementById("circulo").innerHTML= ("RESULTADO:A área do círculo é "+area)

    }
    else if((area>=600)&&(area<=1000)){
        document.getElementById("circulo").innerHTML= ("RESULTADO:A área do círculo é "+area)
    }
    else{
        document.getElementById("circulo").innerHTML= ("RESULTADO:A área do círculo é "+area)
    } 


}


//6
function calcularDesconto(){
    let valor = parseFloat(document.getElementById("valor").value);
    var desconto = (valor * 0.05).toFixed(2)

    document.getElementById("porcentagem").innerHTML= ("RESULTADO:Você terá um desconto de R$ "+desconto+" reais.");
}

//7
function dataDeNascimento(){
    let ano = parseFloat(document.getElementById("ano").value)

    var data = 2023
    var resultado = (data-ano)

    if(resultado<=18){

        document.getElementById("idade").innerHTML= ("RESULTADO:Pessoas nascidas em "+ano+" são menores de idade.");
    }else if(resultado>=18){
        document.getElementById("idade").innerHTML= ("RESULTADO:Pessoas nascidas em "+ano+" são maiores de idade.");
    }
   
}

//8
function calculoCarro(){
    let dinheiro = parseFloat(document.getElementById("dinheiro").value).toFixed(2);

    let valorLitro = ((20 / 5) * dinheiro);

    document.getElementById("resultadoKm").innerHTML= ("RESULTADO: Com R$ " +dinheiro+ " possivel rodar aproximadamente " +valorLitro+ " Km ")
}


  


