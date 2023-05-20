document.getElementById("sorteioBtn").addEventListener("click", function () {
    var opcoes = ["Mandar Fototeta", "Mandar Fotopica", "Não fazer nada"];

    var resultado;
    var rand = Math.random(); 

    
    if (rand < 0.40) {
        resultado = "Mandar Fototeta";
    } else if (rand < 0.5) {
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