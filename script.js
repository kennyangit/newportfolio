// Menu Mobile
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Função para fechar o menu mobile
function closeMenu() {
    if (mobileMenu) mobileMenu.classList.add('hidden');
}

// Toggle(alternar) do menu mobile
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Fecha menu mobile ao clicar em qualquer link
const mobileLinks = document.querySelectorAll('#mobileMenu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Download do Currículo
document.getElementById('baixarCurriculo').addEventListener('click', function (e) {
    e.preventDefault();

    const caminhoPDF = 'doc/curriculo_yankenny.pdf';
    const link = document.createElement('a');

    link.href = caminhoPDF;
    link.download = 'curriculo_yankenny.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Scroll suave para os links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === "#") return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Formulário de contato
document.getElementById('formContato').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const assunto = this.querySelectorAll('input[type="text"]')[1].value;
    const mensagem = this.querySelector('textarea').value;

    // Validação
    if (!nome || !email || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Simulação de envio
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    this.reset();
});

// Destaque do link ativo no menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active', 'text-red-deep');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active', 'text-red-deep');
        }
    });
}

// Atualiza link ativo no scroll
window.addEventListener('scroll', updateActiveLink);

// Atualiza link ativo no carregamento da página
window.addEventListener('load', updateActiveLink);

// Fecha menu mobile ao redimensionar a tela
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) { // breakpoint md do Tailwind
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
});