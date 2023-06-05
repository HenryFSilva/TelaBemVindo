var area = document.getElementById("area");
function outroNome(){
    var nome = prompt("Digite seu nome");
    if(nome == ""|| nome == null){
        alert("Por Favor prencher o campo com seu nome!!");
        area.innerHTML = ("Clique no botão para acessar...")

    }else{
        area.innerHTML = "Seja bem-vindo "+nome+"!!!"
    }
}
function mostrarNumeros(){
    var arrayG = new Array(5)
    arrayG[0] = parseInt(document.getElementById("numero1").value);
    arrayG[1] = parseInt(document.getElementById("numero2").value);
    arrayG[2] = parseInt(document.getElementById("numero3").value);
    arrayG[3] = parseInt(document.getElementById("numero4").value);
    arrayG[4] = parseInt(document.getElementById("numero5").value);

    var arrayH = new Array(6)
    arrayH[0] = parseInt(document.getElementById("numero6").value);
    arrayH[1] = parseInt(document.getElementById("numero7").value);
    arrayH[2] = parseInt(document.getElementById("numero8").value);
    arrayH[3] = parseInt(document.getElementById("numero9").value);
    arrayH[4] = parseInt(document.getElementById("numero10").value);
    arrayH[5] = parseInt(document.getElementById("numero11").value);

    var arrayI = new Array(11);
    arrayI[0] = arrayG[0]
    arrayI[1] = arrayG[1]
    arrayI[2] = arrayG[2]
    arrayI[3] = arrayG[3]
    arrayI[4] = arrayG[4]
    arrayI[5] = arrayH[0]
    arrayI[6] = arrayH[1]
    arrayI[7] = arrayH[2]
    arrayI[8] = arrayH[3]
    arrayI[9] = arrayH[4]
    arrayI[10] = arrayH[5]
        

    document.getElementById("resultado1").value = arrayI[0];
    document.getElementById("resultado2").value = arrayI[1];
    document.getElementById("resultado3").value = arrayI[2];
    document.getElementById("resultado4").value = arrayI[3];
    document.getElementById("resultado5").value = arrayI[4];
    document.getElementById("resultado6").value = arrayI[5];
    document.getElementById("resultado7").value = arrayI[6];
    document.getElementById("resultado8").value = arrayI[7];
    document.getElementById("resultado9").value = arrayI[8];
    document.getElementById("resultado10").value = arrayI[9];
    document.getElementById("resultado11").value = arrayI[10]
}




// var notas = new Array(5);
//     notas[0] = 8.5;
//     notas[1] = 5.0;
//     notas[2] = 10.0;
//     notas[3] = 9.0;
//     notas[4] = 4.5;
// document.write("Notas: "+notas[0]+", "+notas[1]+" e "+notas[2]);
    
// var dia_semana = new Array(7);
//     dia_semana[0] = "Domingo";
//     dia_semana[1] = "Segunda-feira";
//     dia_semana[2] = "Terça-feira";
//     dia_semana[3] = "Quarta-feira";
//     dia_semana[4] = "Quinta-feira";
//     dia_semana[5] = "Sexta-feira";
//     dia_semana[6] = "Sábado";
// document.write("Hoje é "+dia_semana[2]+"<br>")
// document.write("Na "+dia_semana[4]+" terá um come e bebes.<br>")



// diaSemana1 = new Array("Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado");

// document.write("Na semana que vem "+diaSemana1[3]+" e na "+diaSemana1[4]+" teremos aulas da Google.<br>")



// var arrayA = new Array(5);
// arrayA[0]= parseInt(prompt("Digite o 1 número"));
// arrayA[1]= parseInt(prompt("Digite o 2 número"));
// arrayA[2]= parseInt(prompt("Digite o 3 número"));
// arrayA[3]= parseInt(prompt("Digite o 4 número"));
// arrayA[4]= parseInt(prompt("Digite o 5 número"));
// //console.log(arrayA);

// var arrayB = new Array(5);
// arrayB[0] = arrayA[0]*arrayA[0];
// arrayB[1] = arrayA[1]*arrayA[1];
// arrayB[2] = arrayA[2]*arrayA[2];
// arrayB[3] = arrayA[3]*arrayA[3];
// arrayB[4] = arrayA[4]*arrayA[4];
// document.write("<br>O primeiro item = "+arrayB[0]);
// document.write("<br>O segundo item = "+arrayB[1]);
// document.write("<br>O terceiro item = "+arrayB[2]);
// document.write("<br>O quarto item = "+arrayB[3]);
// document.write("<br>O quinto item = "+arrayB[4]);


// var arrayD = new Array(5);
// arrayD[0] = prompt("Digite o primeiro número do arrayA")
// arrayD[1] = prompt("Digite o segundo número do arrayA")
// arrayD[2] = prompt("Digite o terceiro número do arrayA")
// arrayD[3] = prompt("Digite o quarto número do arrayA")
// arrayD[4] = prompt("Digite o quinto número do arrayA")
// var arrayE = new Array(5)
// arrayE[0] = prompt("Digite o primeiro número do arrayB")
// arrayE[1] = prompt("Digite o segundo número do arrayB")
// arrayE[2] = prompt("Digite o terceiro número do arrayB")
// arrayE[3] = prompt("Digite o quarto número do arrayB")
// arrayE[4] = prompt("Digite o quinto número do arrayB")


// var arrayF = new Array(10)
// arrayF[0] = arrayD[0]
// arrayF[1] = arrayD[1]
// arrayF[2] = arrayD[2]
// arrayF[3] = arrayD[3]
// arrayF[4] = arrayD[4]
// arrayF[5] = arrayE[0]
// arrayF[6] = arrayE[1]
// arrayF[7] = arrayE[2]
// arrayF[8] = arrayE[3]
// arrayF[9] = arrayE[4]

// document.write(arrayF[0]+"<br>");
// document.write(arrayF[1]+"<br>");
// document.write(arrayF[2]+"<br>");
// document.write(arrayF[3]+"<br>");
// document.write(arrayF[4]+"<br>");
// document.write(arrayF[5]+"<br>");
// document.write(arrayF[6]+"<br>");
// document.write(arrayF[7]+"<br>");
// document.write(arrayF[8]+"<br>");
// document.write(arrayF[9]+"<br>");



