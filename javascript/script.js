document.getElementById("sorteioBtn").addEventListener("click", function () {
    var opcoes = ["Alternativa A", "Alternativa B", "Não fazer nada"];

    var resultado;
    var rand = Math.random(); 

    
    if (rand < 0.65) {
        resultado = "Alternativa A";
    } else if (rand < 0.7) {
        resultado = "Alternativa B";
    } else {
        resultado = "Não fazer nada";
    }

    // Exibe a sobreposição
    document.getElementById("overlay").style.display = "block";

    // Define o resultado dentro do overlay
    document.getElementById("resultado-overlay").innerHTML = resultado;
});

document.getElementById("fecharBtn").addEventListener("click", function () {
    // Fecha a sobreposição
    document.getElementById("overlay").style.display = "none";
});