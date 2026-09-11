const botao = document.getElementById('botaoTema');

botao.addEventListener('click', () => {

  // Alterna a classe tema-escuro no body
  document.body.classList.toggle('tema-escuro');

  // Verifica se o tema escuro está ativado
  const estaEscuro = document.body.classList.contains('tema-escuro');

  // Altera o texto do botão
  botao.textContent = estaEscuro
    ? 'Ativar tema claro'
    : 'Ativar tema escuro';
});
