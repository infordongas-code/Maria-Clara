const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  const aberto = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(aberto));
  menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  menuToggle.textContent = aberto ? '✕' : '☰';
});

document.querySelectorAll('#menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const texto = `Olá! Meu nome é ${nome}. Meu e-mail é ${email}. ${mensagem}`;
  const status = document.getElementById('form-status');

  // O formulário não envia dados para um servidor; ele prepara uma mensagem para copiar.
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(texto)
      .then(() => { status.textContent = 'Mensagem copiada! Agora você pode colá-la no seu aplicativo de e-mail ou mensagem.'; })
      .catch(() => { status.textContent = 'Mensagem pronta. Copie os dados do formulário para enviar.'; });
  } else {
    status.textContent = 'Mensagem pronta! Este formulário é demonstrativo e não envia dados para um servidor.';
  }
});
