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

// ===== TRADUÇÕES =====
const translations = {
    pt: {
        // Menu
        home: "INÍCIO",
        about: "SOBRE",
        projects: "PROJETOS",
        certifications: "CERTIFICAÇÕES",
        contact: "CONTATO",

        // Hero
        welcome: "Bem vindo(a)!",
        iam: "Eu sou",
        role: "Desenvolvedor de Software",

        // About
        aboutTitle: "Sobre mim",
        aboutText: "Minha paixão por tecnologia nasceu da curiosidade em transformar ideias em realidade através de linhas de código. Como desenvolvedor, encontro beleza na harmonia entre frontend expressivo e backend robusto. Adoro criar soluções práticas que resolvem problemas reais, sempre priorizando design responsivo e interfaces intuitivas que encantam o usuário. Cada projeto é uma oportunidade de unir lógica e criatividade.",
        downloadCV: "Baixar Currículo (PDF)",

        // Projects
        projectsTitle: "Meus Projetos",
        repository: "Repositório",
        siteButton: "Site",

        // Projeto 1
        project1Title: "Adote um Amigo",
        project1Desc: "Site de adoção de animais desenvolvido com HTML, CSS e JavaScript, com listagem de animais disponíveis para adoção e interface intuitiva para facilitar o processo de adoção responsável.",

        // Projeto 2
        project2Title: "Grano D´oro",
        project2Desc: "Landing Page de uma cafeteria desenvolvida em HTML, CSS e JavaScript treinando o conceito de Landing Pages",

        // Projeto 3
        project3Title: "Neo Store",
        project3Desc: "Exemplo de site de E-commerce construído com HTML, CSS e JavaScript, esse projeto foi feito para a disciplina de Desenvolvimento de Aplicações para Internet.",

        // Projeto 4
        project4Title: "Pokedex",
        project4Desc: "Uma Pokédex interativa desenvolvida com HTML, Tailwind CSS e JavaScript, utilizando a PokéAPI para buscar informações dos Pokémons.",

        // Projeto 5
        project5Title: "Sistema de Gerenciamento de Ordens de Serviço",
        project5Desc: "Este é um sistema desktop desenvolvido em Java utilizando elementos Swing para gerenciamento completo de clientes e ordens de serviço (OS).",

        // Projeto 6
        project6Title: "Sistema de Produtos",
        project6Desc: "Um sistema desktop desenvolvido em Java (Swing) para gerenciamento de Categorias e Produtos. Ele permite cadastrar categorias, cadastrar produtos, alterar produtos existentes e consultar produtos filtrando por categoria.",

        // Projeto 7
        project7Title: "Calculadora de Comissões",
        project7Desc: "Um sistema desktop desenvolvido em Python para gerenciamento de comissões e despesas. Esse software foi feito para diminuição de esforço em momentos que é necessário utilizar muito a calculadora, tudo vem automatizado.",

        // Education
        educationTitle: "Educação",
        educationDate: "2025 - presente",
        educationDegree: "Graduação em Análise e Desenvolvimento de Sistemas",
        educationDesc: "Atualmente estou desenvolvendo sólidas competências em programação back-end e front-end, modelagem e gestão de bancos de dados, e engenharia de software. Também estou me aprofundando em metodologias ágeis como Scrum. Meu foco está na resolução prática de problemas e na criação de sistemas eficientes que atendam às necessidades do mercado.",
        technologist: "Tecnólogo",
        ongoing: "Em andamento",

        // Certifications
        certTitle: "Certificações",
        formationTitle: "Formação & Certificados",

        // Cert 1
        cert1Title: "Java Development",
        cert1Desc: "• Aprendi conceitos de classes, objetos, herança, polimorfismo, encapsulamento e interfaces.\n• Aplicação prática em projetos Java reais.",
        cert1Institution: "FIAP",

        // Cert 2
        cert2Title: "Scrum Fundamentals Certified",
        cert2Desc: "• Entendimento dos papéis de Scrum Master, Product Owner e Time de Desenvolvimento.\n• Estudo dos principais artefatos: Product Backlog, Sprint Backlog e Increment.\n• Entendi como aplicar o Scrum em diferentes contextos organizacionais.\n• Entendi como desenvolver boas práticas de colaboração, priorização e entrega contínua.",
        cert2Institution: "VMEdu Inc",

        // Contact
        contactTitle: "Contato",
        nameLabel: "Nome",
        emailLabel: "E-mail",
        subjectLabel: "Assunto",
        messageLabel: "Mensagem",
        sendButton: "Enviar",
        namePlaceholder: "Seu nome",
        emailPlaceholder: "voce@email.com",
        subjectPlaceholder: "Assunto da mensagem",
        messagePlaceholder: "Escreva sua mensagem...",
        socialText: "Ou me encontre nas redes:",

        // Footer
        footer: "Yan Kenny © 2026 • Desenvolvedor de Software"
    },
    en: {
        // Menu
        home: "HOME",
        about: "ABOUT",
        projects: "PROJECTS",
        certifications: "CERTIFICATIONS",
        contact: "CONTACT",

        // Hero
        welcome: "Welcome!",
        iam: "I'm",
        role: "Software Developer",

        // About
        aboutTitle: "About me",
        aboutText: "My passion for technology was born from curiosity to transform ideas into reality through code lines. As a developer, I find beauty in the harmony between expressive frontend and robust backend. I love creating practical solutions that solve real problems, always prioritizing responsive design and intuitive interfaces that delight users. Each project is an opportunity to unite logic and creativity.",
        downloadCV: "Download Resume (PDF)",

        // Projects
        projectsTitle: "My Projects",
        repository: "Repository",
        siteButton: "Site",

        // Project 1
        project1Title: "Adopt a Friend",
        project1Desc: "Animal adoption website built with HTML, CSS and JavaScript, with a listing of animals available for adoption and an intuitive interface to make the responsible adoption process easier.",

        // Project 2
        project2Title: "Grano D´oro",
        project2Desc: "Landing Page for a coffee shop developed in HTML, CSS and JavaScript practicing the concept of Landing Pages",

        // Project 3
        project3Title: "Neo Store",
        project3Desc: "E-commerce website example built with HTML, CSS and JavaScript, this project was made for the Internet Applications Development course.",

        // Project 4
        project4Title: "Pokedex",
        project4Desc: "An interactive Pokédex developed with HTML, Tailwind CSS and JavaScript, using PokéAPI to fetch Pokémon information.",

        // Project 5
        project5Title: "Service Order Management System",
        project5Desc: "This is a desktop system developed in Java using Swing elements for complete management of clients and service orders.",

        // Project 6
        project6Title: "Product System",
        project6Desc: "A desktop system developed in Java (Swing) for managing Categories and Products. It allows registering categories, registering products, changing existing products and querying products filtered by category.",

        // Project 7
        project7Title: "Commission Calculator",
        project7Desc: "A desktop system developed in Python for managing commissions and expenses. This software was made to reduce effort when it's necessary to use the calculator a lot, everything is automated.",

        // Education
        educationTitle: "Education",
        educationDate: "2025 - present",
        educationDegree: "Bachelor's in Systems Analysis and Development",
        educationDesc: "I am currently developing solid skills in back-end and front-end programming, database modeling and management, and software engineering. I am also deepening my knowledge in agile methodologies like Scrum. My focus is on practical problem-solving and creating efficient systems that meet market needs.",
        technologist: "Technologist",
        ongoing: "In progress",

        // Certifications
        certTitle: "Certifications",
        formationTitle: "Education & Certifications",

        // Cert 1
        cert1Title: "Java Development",
        cert1Desc: "• Learned concepts of classes, objects, inheritance, polymorphism, encapsulation and interfaces.\n• Practical application in real Java projects.",
        cert1Institution: "FIAP",

        // Cert 2
        cert2Title: "Scrum Fundamentals Certified",
        cert2Desc: "• Understanding of Scrum Master, Product Owner and Development Team roles.\n• Study of main artifacts: Product Backlog, Sprint Backlog and Increment.\n• Learned how to apply Scrum in different organizational contexts.\n• Learned how to develop best practices for collaboration, prioritization and continuous delivery.",
        cert2Institution: "VMEdu Inc",

        // Contact
        contactTitle: "Contact",
        nameLabel: "Name",
        emailLabel: "Email",
        subjectLabel: "Subject",
        messageLabel: "Message",
        sendButton: "Send",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@email.com",
        subjectPlaceholder: "Message subject",
        messagePlaceholder: "Write your message...",
        socialText: "Or find me on social media:",

        // Footer
        footer: "Yan Kenny © 2026 • Software Developer"
    }
};

let currentLang = 'pt';

function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';

    document.getElementById('langFlag').textContent = '🌐';
    document.getElementById('langText').textContent = currentLang === 'pt' ? 'PT' : 'EN';
    document.getElementById('mobileLangFlag').textContent = '🌐';
    document.getElementById('mobileLangText').textContent = currentLang === 'pt' ? 'PT' : 'EN';

    updateContent();
}

function updateContent() {
    const t = translations[currentLang];

    // Menu
    document.querySelectorAll('.lang-pt').forEach(el => {
        el.classList.toggle('hidden', currentLang !== 'pt');
    });
    document.querySelectorAll('.lang-en').forEach(el => {
        el.classList.toggle('hidden', currentLang !== 'en');
    });

    // Hero
    document.querySelector('#inicio .text-3xl').textContent = t.welcome;
    document.querySelector('#inicio h1').innerHTML = `${t.iam} <span class="text-red-deep">Yan</span>`;
    document.querySelector('#inicio .text-xl').textContent = t.role;

    // About
    document.querySelector('#sobre h2').textContent = t.aboutTitle;
    document.querySelector('#sobre .card p').textContent = t.aboutText;
    document.querySelector('#baixarCurriculo').innerHTML = `<i class="fas fa-download"></i> ${t.downloadCV}`;

    // Projects
    document.querySelector('#projetos h2').textContent = t.projectsTitle;

    // Projeto 1
    const project1 = document.querySelector('#projetos .grid > div:nth-child(1)');
    if (project1) {
        project1.querySelector('h3').textContent = t.project1Title;
        project1.querySelector('p.text-gray-400').textContent = t.project1Desc;
    }

    // Projeto 2
    const project2 = document.querySelector('#projetos .grid > div:nth-child(2)');
    if (project2) {
        project2.querySelector('h3').textContent = t.project2Title;
        project2.querySelector('p.text-gray-400').textContent = t.project2Desc;
    }

    // Projeto 3
    const project3 = document.querySelector('#projetos .grid > div:nth-child(3)');
    if (project3) {
        project3.querySelector('h3').textContent = t.project3Title;
        project3.querySelector('p.text-gray-400').textContent = t.project3Desc;
    }

    // Projeto 4
    const project4 = document.querySelector('#projetos .grid > div:nth-child(4)');
    if (project4) {
        project4.querySelector('h3').textContent = t.project4Title;
        project4.querySelector('p.text-gray-400').textContent = t.project4Desc;
    }

    // Projeto 5
    const project5 = document.querySelector('#projetos .grid > div:nth-child(5)');
    if (project5) {
        project5.querySelector('h3').textContent = t.project5Title;
        project5.querySelector('p.text-gray-400').textContent = t.project5Desc;
    }

    // Projeto 6
    const project6 = document.querySelector('#projetos .grid > div:nth-child(6)');
    if (project6) {
        project6.querySelector('h3').textContent = t.project6Title;
        project6.querySelector('p.text-gray-400').textContent = t.project6Desc;
    }

    // Projeto 7
    const project7 = document.querySelector('#projetos .grid > div:nth-child(7)');
    if (project7) {
        project7.querySelector('h3').textContent = t.project7Title;
        project7.querySelector('p.text-gray-400').textContent = t.project7Desc;
    }

    // Botões "Site" dos cards com imagem
    document.querySelectorAll('#projetos .btn-site').forEach(el => {
        el.innerHTML = `<i class="fas fa-globe"></i> ${t.siteButton}`;
    });

    // Repository text (cards sem imagem)
    document.querySelectorAll('#projetos .text-xs.text-gray-500').forEach(el => {
        el.innerHTML = `<i class="fab fa-github"></i> ${t.repository}`;
    });

    // ===== FORMAÇÃO & CERTIFICADOS =====
    const mainTitle = document.querySelector('#certificacoes h2');
    if (mainTitle) {
        mainTitle.textContent = t.formationTitle;
    }

    // ===== EDUCAÇÃO =====
    const educationSection = document.querySelector('#certificacoes > div > div.mb-16');
    console.log('Education section found:', educationSection);

    if (educationSection) {
        // Título Educação
        const eduTitle = educationSection.querySelector('h3.text-3xl');
        console.log('Education title element:', eduTitle);

        if (eduTitle) {
            eduTitle.textContent = t.educationTitle;
        }

        // Data
        const dateBadge = educationSection.querySelector('.date-badge');
        if (dateBadge) dateBadge.innerHTML = `<i class="far fa-calendar-alt mr-2"></i>${t.educationDate}`;

        // Título do curso
        const courseTitle = educationSection.querySelector('h3.text-3xl.font-bold');
        if (courseTitle) courseTitle.textContent = t.educationDegree;

        // Descrição
        const eduDesc = educationSection.querySelector('p.text-gray-300');
        if (eduDesc) eduDesc.textContent = t.educationDesc;

        // Badges
        const badges = educationSection.querySelectorAll('.gap-2 span');
        if (badges.length >= 2) {
            badges[0].textContent = t.technologist;
            badges[1].textContent = t.ongoing;
        }
    }

    // ===== CERTIFICAÇÕES =====
    const certSection = document.querySelector('#certificacoes > div > div:last-child');
    if (certSection) {
        // Título Certificações
        const certTitle = certSection.querySelector('h3.text-3xl');
        if (certTitle) certTitle.textContent = t.certTitle;

        // Certificado 1
        const cert1 = certSection.querySelector('.grid > div:first-child');
        if (cert1) {
            const cert1Title = cert1.querySelector('h3');
            const cert1Desc = cert1.querySelector('p');
            const cert1Inst = cert1.querySelector('.bg-red-deep\\/10');

            if (cert1Title) cert1Title.textContent = t.cert1Title;
            if (cert1Desc) {
                cert1Desc.innerHTML = t.cert1Desc.replace(/\n/g, '<br>');
            }
            if (cert1Inst) cert1Inst.textContent = t.cert1Institution;
        }

        // Certificado 2
        const cert2 = certSection.querySelector('.grid > div:last-child');
        if (cert2) {
            const cert2Title = cert2.querySelector('h3');
            const cert2Desc = cert2.querySelector('p');
            const cert2Inst = cert2.querySelector('.bg-red-deep\\/10');

            if (cert2Title) cert2Title.textContent = t.cert2Title;
            if (cert2Desc) {
                cert2Desc.innerHTML = t.cert2Desc.replace(/\n/g, '<br>');
            }
            if (cert2Inst) cert2Inst.textContent = t.cert2Institution;
        }
    }

    // ===== CONTATO =====
    document.querySelector('#contato h2').textContent = t.contactTitle;

    // Labels
    const labels = document.querySelectorAll('#contato label');
    if (labels.length >= 4) {
        labels[0].textContent = t.nameLabel;
        labels[1].textContent = t.emailLabel;
        labels[2].textContent = t.subjectLabel;
        labels[3].textContent = t.messageLabel;
    }

    // Placeholders
    const inputs = document.querySelectorAll('#contato input');
    if (inputs.length >= 3) {
        inputs[0].placeholder = t.namePlaceholder;
        inputs[1].placeholder = t.emailPlaceholder;
        inputs[2].placeholder = t.subjectPlaceholder;
    }

    const textarea = document.querySelector('#contato textarea');
    if (textarea) textarea.placeholder = t.messagePlaceholder;

    // Botão enviar
    const sendButton = document.querySelector('#contato button[type="submit"]');
    if (sendButton) sendButton.innerHTML = `<i class="fas fa-paper-plane mr-2"></i>${t.sendButton}`;

    // Texto social
    const socialText = document.querySelector('#contato .text-2xl.text-gray-300');
    if (socialText) socialText.textContent = t.socialText;

    // Footer
    const footer = document.querySelector('footer');
    if (footer) footer.textContent = t.footer;
}

// Event listeners do botão de idioma
document.getElementById('languageToggle').addEventListener('click', toggleLanguage);
document.getElementById('mobileLanguageToggle').addEventListener('click', toggleLanguage);

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

// Formulário de Contato
document.getElementById('formContato').addEventListener('submit', async function (e) {
    e.preventDefault();

    console.log('Formulário enviado!'); // Debug

    const nome = this.querySelector('input[name="nome"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const assunto = this.querySelector('input[name="assunto"]').value;
    const mensagem = this.querySelector('textarea[name="mensagem"]').value;

    console.log('Dados:', { nome, email, assunto, mensagem }); // Debug

    // Validação
    if (!nome || !email || !assunto || !mensagem) {
        alert(currentLang === 'pt' ? 'Preencha todos os campos!' : 'Fill in all fields!');
        return;
    }

    // Feedback Visual
    const btn = this.querySelector('button[type="submit"]');
    const textoOriginal = btn.innerHTML;

    const textos = {
        pt: {
            enviando: 'Enviando...',
            sucesso: 'Enviado com sucesso!',
            erro: '✗ Erro ao enviar'
        },
        en: {
            enviando: 'Sending...',
            sucesso: 'Sent successfully!',
            erro: '✗ Error sending'
        }
    };

    btn.innerHTML = textos[currentLang].enviando;
    btn.disabled = true;
    btn.style.opacity = '0.7';

    // Envio para o Formspree
    try {
        const response = await fetch('https://formspree.io/f/xgolgegy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                assunto: assunto,
                mensagem: mensagem,
                _replyto: email,
                _subject: currentLang === 'pt'
                    ? `Novo contato do portfólio: ${assunto}`
                    : `New portfolio contact: ${assunto}`
            })
        });

        console.log('Resposta:', response);

        if (response.ok) {
            btn.innerHTML = textos[currentLang].sucesso;
            btn.style.backgroundColor = '#10b981';
            this.reset();

            setTimeout(() => {
                btn.innerHTML = textoOriginal;
                btn.style.backgroundColor = '#7f1d1d';
                btn.disabled = false;
                btn.style.opacity = '1';
            }, 3000);
        } else {
            const errorData = await response.json();
            console.error('Erro do servidor:', errorData);
            throw new Error(errorData.error || 'Erro no envio');
        }
    } catch (error) {
        console.error('Erro:', error);
        btn.innerHTML = textos[currentLang].erro;
        btn.style.backgroundColor = '#dc2626';

        setTimeout(() => {
            btn.innerHTML = textoOriginal;
            btn.style.backgroundColor = '#7f1d1d';
            btn.disabled = false;
            btn.style.opacity = '1';
        }, 3000);
    }
});

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