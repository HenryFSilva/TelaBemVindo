function subtrairNumeros(){
    var arrayA = new Array(10);
    arrayA[0] = parseInt(prompt("Digite o primeiro número"));
    arrayA[1] = parseInt(prompt("Digite o segundo número"));
    arrayA[2] = parseInt(prompt("Digite o terceiro número"));
    arrayA[3] = parseInt(prompt("Digite o quarto número"));
    arrayA[4] = parseInt(prompt("Digite o quinto número"));
    arrayA[5] = parseInt(prompt("Digite o sexto número"));
    arrayA[6] = parseInt(prompt("Digite o setimo número"));
    arrayA[7] = parseInt(prompt("Digite o oitavo número"));
    arrayA[8] = parseInt(prompt("Digite o nono número"));
    arrayA[9] = parseInt(prompt("Digite o décimo número"));

    var arrayB = new Array(10);
    arrayB[0] = parseInt(prompt("Digite o décimo primeiro número"));
    arrayB[1] = parseInt(prompt("Digite o décimo segundo número"));
    arrayB[2] = parseInt(prompt("Digite o décimo terceiro número"));
    arrayB[3] = parseInt(prompt("Digite o décimo quarto número"));
    arrayB[4] = parseInt(prompt("Digite o décimo quinto número"));
    arrayB[5] = parseInt(prompt("Digite o décimo sexto número"));
    arrayB[6] = parseInt(prompt("Digite o décimo setimo número"));
    arrayB[7] = parseInt(prompt("Digite o décimo oitavo número"));
    arrayB[8] = parseInt(prompt("Digite o décimo nono número"));
    arrayB[9] = parseInt(prompt("Digite o vigésimo número"));

    var arrayC = new Array(10);
    arrayC[0] = arrayA[0] - arrayB[0];
    document.getElementById("res1").value = arrayC[0];
    arrayC[1] = arrayA[1] - arrayB[1];
    document.getElementById("res2").value = arrayC[1];
    arrayC[2] = arrayA[2] - arrayB[2];
    document.getElementById("res3").value = arrayC[2];
    arrayC[3] = arrayA[3] - arrayB[3];
    document.getElementById("res4").value = arrayC[3];
    arrayC[4] = arrayA[4] - arrayB[4];
    document.getElementById("res5").value = arrayC[4];
    arrayC[5] = arrayA[5] - arrayB[5];
    document.getElementById("res6").value = arrayC[5];
    arrayC[6] = arrayA[6] - arrayB[6];
    document.getElementById("res7").value = arrayC[6];
    arrayC[7] = arrayA[7] - arrayB[7];
    document.getElementById("res8").value = arrayC[7];
    arrayC[8] = arrayA[8] - arrayB[8];
    document.getElementById("res9").value = arrayC[8];
    arrayC[9] = arrayA[9] - arrayB[9];
    document.getElementById("res10").value = arrayC[9];
}