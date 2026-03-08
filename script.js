function atualizarContador() {
  const dataInicio = new Date("2025-04-10T00:00:00");
  const agora = new Date();

  let diferenca = agora - dataInicio;

  const anoEmMs = 1000 * 60 * 60 * 24 * 365.25;
  const anos = Math.floor(diferenca / anoEmMs);
  diferenca -= anos * anoEmMs;

  const mesEmMs = 1000 * 60 * 60 * 24 * 30.44;
  const meses = Math.floor(diferenca / mesEmMs);
  diferenca -= meses * mesEmMs;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  diferenca -= dias * (1000 * 60 * 60 * 24);

  const horas = Math.floor(diferenca / (1000 * 60 * 60));
  diferenca -= horas * (1000 * 60 * 60);

  const minutos = Math.floor(diferenca / (1000 * 60));
  diferenca -= minutos * (1000 * 60);

  const segundos = Math.floor(diferenca / 1000);

  document.getElementById("anos").textContent = anos;
  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;

  const mensagem = "Cada segundo com você é um presente ❤️";
  document.getElementById("mensagem-romantica").textContent = mensagem;
}

setInterval(atualizarContador, 1000);