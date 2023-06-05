//var nome = prompt("Qual é o nome?")
//var sobrenome = prompt("Qual é o seu sobrenome?")
//document.write("<h1>Bem vindo "+nome+" "+sobrenome+"</h1>")
//document.write("<img src=img/Elon_Musk_Royal_Society_(crop2).jpg />")


//var numero1 = parseInt(prompt("Digite um número: "));
//var numero2 = parseInt(prompt("Digite o segundo número: "));
//var resultado = numero1+numero2;
//document.write("<h1> O resultado = </h1>"+resultado);


//var numB = parseFloat(prompt("Digite um número: "));
//alert(numB+" é do tipo "+typeof(numB));


//var valorDigitado = prompt("Digite:")
//var a = valorDigitado/3;
//document.write(a);
//a = a.toFixed(2);
//document.write("<br>"+ a);


//var a = parseInt(prompt("Digite o valor"));
//var b = parseInt(prompt("Digite outro valor"));
//var c = a%b;
//document.write("O resto da divisão de " +a+ " por "+b+" é = "+c);

//var a = 3;
//var b = 4;
//alert("A = B: "+a==b);
//alert("A é diferente de B: "+(a!=b));

//var a = 6;
//var b = 3;
//var c = 10;
//alert((a>b)&&(b>c))
//alert((a>b)||(b==c))


//var filho = prompt("O seu filho esta se formando? se sim digite 1, se não digite 0");
//var prova = prompt("Seu filho gabaritou a prova? se sim 1, se não = 0");
//alert("O filho vai ganhar o carro, se formar e gabaritar a prova");
//alert((filho==1)&&(prova==1));

function somarNumeros(){
    var numero1 = parseInt(document.getElementById("num1").value)
    var numero2 = parseInt(document.getElementById("num2").value)
    var soma = numero1 + numero2
    alert(" A soma é = "+soma)
}
