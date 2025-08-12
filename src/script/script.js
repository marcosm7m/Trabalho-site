document.addEventListener("DOMContentLoaded", function () {
  console.log("Site Especialista em Tintas carregado!");
});

function calcularTinta() {
  const altura = parseFloat(document.getElementById("altura").value);
  const largura = parseFloat(document.getElementById("largura").value);
  const rendimento = parseFloat(document.getElementById("rendimento").value);

  if (isNaN(altura) || isNaN(largura) || isNaN(rendimento) || rendimento === 0) {
    document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const area = altura * largura;
  const litrosNecessarios = area / rendimento;

  document.getElementById("resultado").innerText =
    `Você precisará de aproximadamente ${litrosNecessarios.toFixed(2)} litros de tinta.`;
}