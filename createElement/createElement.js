function adicionaElemento() {

    for (i = 1; i <= 5; i++) {
        var caixaLabel = document.createElement("label");
        var br = document.createElement("br");
        var br1 = document.createElement("br");

        caixaLabel.innerText = "Digite um número"
        document.body.appendChild(caixaLabel);

        var caixaInput = document.createElement("input");
        document.body.appendChild(caixaInput);

        document.body.appendChild(br);
        document.body.appendChild(br1);



    }
}