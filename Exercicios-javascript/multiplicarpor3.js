function multiplicarPor3(){
    var arrayA = new Array(8);
    arrayA[0] = parseInt(prompt("Digite o 1 número"));
    arrayA[1] = parseInt(prompt("Digite o 2 número"));
    arrayA[2] = parseInt(prompt("Digite o 3 número"));
    arrayA[3] = parseInt(prompt("Digite o 4 número"));
    arrayA[4] = parseInt(prompt("Digite o 5 número"));
    arrayA[5] = parseInt(prompt("Digite o 6 número"));
    arrayA[6] = parseInt(prompt("Digite o 7 número"));
    arrayA[7] = parseInt(prompt("Digite o 8 número"));

    var arrayB = new Array(8);
    arrayB[0] = arrayA[0]*3;
    arrayB[1] = arrayA[1]*3;
    arrayB[2] = arrayA[2]*3;
    arrayB[3] = arrayA[3]*3;
    arrayB[4] = arrayA[4]*3;
    arrayB[5] = arrayA[5]*3;
    arrayB[6] = arrayA[6]*3;
    arrayB[7] = arrayA[7]*3;

    document.getElementById("mult1").value = arrayB[0];
    document.getElementById("mult2").value = arrayB[1];
    document.getElementById("mult3").value = arrayB[2];
    document.getElementById("mult4").value = arrayB[3];
    document.getElementById("mult5").value = arrayB[4];
    document.getElementById("mult6").value = arrayB[5];
    document.getElementById("mult7").value = arrayB[6];
    document.getElementById("mult8").value = arrayB[7];
}