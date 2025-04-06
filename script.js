
function criptografar() {
  const texto = document.getElementById("entrada").value.toLowerCase();
  const constante = 20;
  let binario = '';

  for (let i = 0; i < texto.length; i++) {
    const charCode = texto.charCodeAt(i).toString(2).padStart(8, '0');
    binario += charCode;
  }

  let blocos = [];
  for (let i = 0; i < binario.length; i += 5) {
    const bloco = binario.substring(i, i + 5);
    if (bloco.length === 5) {
      const valor = parseInt(bloco, 2) * constante;
      blocos.push(valor);
    }
  }

  const resultado = "code21l" + binario + "e\n" + "cripto: [" + blocos.join(", ") + "]";
  document.getElementById("resultado").textContent = resultado;
}
