console.log(
    window.document.getElementById("aula") //captura o elemento, conforme o id informado
)


console.log(
    window.document.getElementById("aula").innerHTML //captura o texto do elemento, conforme o id informado
)

console.log(
    document.getElementById("fruta")//captura somente o id
)
console.log(
    document.getElementsByClassName("carro")//captura todas as classes
)

console.log(
    document.getElementsByClassName("carro")[0].innerHTML//com a inserção do[0] e innerhtml, consigo acessar a primeira classe do documento
)   

console.log(
    document.getElementsByClassName("carro")[1].innerHTML
)

console.log(
    document.getElementsByTagName("div")//captura todas as classes tags, independente das classes e ids
)

console.log(
    document.querySelector("div")//seleciona a primeira tag
)

console.log(
    document.querySelector("carro")//seleciona a primeira tag
)

console.log(
    document.querySelectorAll(".times")
)

console.log(
    document.getElementById("futebol-europeu").
    querySelectorAll(".times")//seleciona somente pelo id informado no getElementById
)

console.log(
    document.getElementById("futebol-europeu").
    querySelectorAll(".times")[0].innerHTML
)