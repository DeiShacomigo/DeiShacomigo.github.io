document.getElementById("sorteioBtn").addEventListener("click", function () {
    var opcoes = ["Mandar Fototeta", "Mandar Fotopica", "Não fazer nada"];

    var resultado;
    var rand = Math.random(); // Gera um número aleatório entre 0 e 1

    // 5% de chance para "Fototeta" e 5% de chance para "Fotopica"
    if (rand < 0.05) {
        resultado = "Mandar Fototeta";
    } else if (rand < 0.01) {
        resultado = "Mandar Fotopica";
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