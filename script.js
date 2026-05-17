/* ============ EASTER EGG ============ */
console.log('%c👋 Olá dev curioso!', 'font-size:20px;color:#6ee7b7;font-weight:bold;');
console.log('%cGostou do código? Vamos conversar:\n📧 emachadoferla@gmail.com', 'color:#38bdf8;font-size:14px;');

/* ============ LOADER ============ */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 600);
});

/* ============ ANO ============ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============ MENU MOBILE ============ */
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');
menuToggle?.addEventListener('click', () => navList.classList.toggle('open'));
document.querySelectorAll('#navList a').forEach(a =>
  a.addEventListener('click', () => navList.classList.remove('open'))
);

/* ============ TEMA ============ */
const themeBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.dataset.theme = savedTheme;
themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
themeBtn.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
});

/* ============ IDIOMAS ============ */
const translations = {
  pt: {
    'nav.about': 'Sobre', 'nav.skills': 'Habilidades', 'nav.projects': 'Projetos',
    'nav.exp': 'Experiências', 'nav.contact': 'Contato',
    'hero.eyebrow': '// Olá, eu sou', 'hero.iam': 'Programador',
    'hero.lead': 'Busco uma oportunidade para iniciar minha carreira como Programador, onde posso aplicar e expandir meus conhecimentos em um ambiente prático.',
    'hero.cta1': 'Ver projetos', 'hero.cta2': '📄 Baixar CV',
    'stats.projects': 'Projetos', 'stats.exp': 'Experiências',
    'stats.tech': 'Tecnologias', 'stats.years': 'anos estudando',
    'about.title': 'Sobre mim',
    'about.text': 'Tenho 18 anos, moro em Cascavel - Paraná, e sou apaixonado por tecnologia e desenvolvimento web. Tenho formação técnica em Informática para Internet e estou cursando Análise e Desenvolvimento de Sistemas.',
    'about.birth': 'Nascimento:', 'about.age': 'Idade:', 'about.years': 'anos',
    'about.loc': 'Localização:', 'about.langs': 'Idiomas',
    'about.native': 'Nativo', 'about.intermediate': 'Intermediário',
    'edu.title': 'Formação', 'edu.1': 'Ênfase em programação web, design e banco de dados.',
    'skills.title': 'Habilidades Técnicas',
    'featured.eyebrow': 'Projeto em destaque',
    'featured.sub': 'Assistente de IA pessoal em Python',
    'featured.desc': 'Assistente virtual inteligente capaz de reconhecer comandos de voz, executar tarefas no sistema, responder perguntas e automatizar atividades do dia a dia. Desenvolvido do zero em Python.',
    'featured.demo': 'Ver demo', 'featured.code': 'Código',
    'projects.title': 'Projetos', 'projects.all': 'Todos', 'projects.system': 'Sistema',
    'p.1.t': 'Site Pessoal Estático', 'p.1.d': 'Site estático para apresentar informações pessoais e projetos.',
    'p.2.t': 'Gerenciador de Tarefas', 'p.2.d': 'Aplicação web simples para gerenciar e listar tarefas pessoais.',
    'p.3.t': 'Portal de Notícias', 'p.3.d': 'Site de notícias simples desenvolvido com HTML, CSS e JavaScript.',
    'p.4.t': 'E-commerce de Roupas', 'p.4.d': 'Site de vendas de roupas usando PHP, HTML, CSS, JS e SQL.',
    'p.5.t': 'Plataforma de Cursos', 'p.5.d': 'Site de vendas de cursos online com PHP, HTML, CSS, JS e SQL.',
    'p.6.tag': 'Sistema · Hardware', 'p.6.t': 'Registro de Atrasos Escolares',
    'p.6.d': 'Plataforma para registro dos atrasos dos alunos, vinculada à carteirinha da biblioteca e à impressora térmica de tickets.',
    'p.7.d': 'Assistente pessoal inteligente desenvolvido em Python.',
    'exp.title': 'Experiências',
    'exp.1': 'Auxiliar de Mídia e Marketing',
    'exp.2': 'Suporte técnico em backup e cybersegurança',
    'exp.3': 'Suporte e automação em empresa de TI',
    'exp.4.t': 'Oficina de Pianos', 'exp.4': 'Auxiliar de produção',
    'contact.title': 'Vamos conversar',
    'contact.sub': 'Estou aberto a oportunidades e parcerias.',
    'contact.phone': 'Telefone', 'contact.loc': 'Localização',
    'form.name': 'Nome', 'form.msg': 'Mensagem', 'form.send': 'Enviar mensagem',
    'footer.made': 'Feito com',
  },
  en: {
    'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects',
    'nav.exp': 'Experience', 'nav.contact': 'Contact',
    'hero.eyebrow': '// Hi, I am', 'hero.iam': 'Developer',
    'hero.lead': "I'm looking for an opportunity to start my career as a Developer, where I can apply and expand my knowledge in a practical environment.",
    'hero.cta1': 'View projects', 'hero.cta2': '📄 Download CV',
    'stats.projects': 'Projects', 'stats.exp': 'Experiences',
    'stats.tech': 'Technologies', 'stats.years': 'years studying',
    'about.title': 'About me',
    'about.text': "I'm 18, based in Cascavel - Paraná, Brazil, passionate about tech and web development. I have a technical degree in Internet Computing and I'm pursuing Systems Analysis and Development.",
    'about.birth': 'Born:', 'about.age': 'Age:', 'about.years': 'years old',
    'about.loc': 'Location:', 'about.langs': 'Languages',
    'about.native': 'Native', 'about.intermediate': 'Intermediate',
    'edu.title': 'Education', 'edu.1': 'Focus on web programming, design and databases.',
    'skills.title': 'Technical Skills',
    'featured.eyebrow': 'Featured project',
    'featured.sub': 'Personal AI assistant in Python',
    'featured.desc': 'Smart virtual assistant capable of recognizing voice commands, executing system tasks, answering questions and automating daily activities. Built from scratch in Python.',
    'featured.demo': 'See demo', 'featured.code': 'Code',
    'projects.title': 'Projects', 'projects.all': 'All', 'projects.system': 'System',
    'p.1.t': 'Personal Static Site', 'p.1.d': 'Static website to present personal info and projects.',
    'p.2.t': 'Task Manager', 'p.2.d': 'Simple web app to manage and list personal tasks.',
    'p.3.t': 'News Portal', 'p.3.d': 'Simple news website built with HTML, CSS and JavaScript.',
    'p.4.t': 'Clothing E-commerce', 'p.4.d': 'Clothing sales site using PHP, HTML, CSS, JS and SQL.',
    'p.5.t': 'Courses Platform', 'p.5.d': 'Online courses sales site with PHP, HTML, CSS, JS and SQL.',
    'p.6.tag': 'System · Hardware', 'p.6.t': 'School Late-Arrival Tracker',
    'p.6.d': 'Platform to register student late arrivals, linked to library cards and thermal ticket printer.',
    'p.7.d': 'Smart personal assistant built in Python.',
    'exp.title': 'Experience',
    'exp.1': 'Media & Marketing assistant',
    'exp.2': 'Tech support — backup & cybersecurity',
    'exp.3': 'Support and automation at an IT company',
    'exp.4.t': 'Piano Workshop', 'exp.4': 'Production assistant',
    'contact.title': "Let's talk",
    'contact.sub': "I'm open to opportunities and partnerships.",
    'contact.phone': 'Phone', 'contact.loc': 'Location',
    'form.name': 'Name', 'form.msg': 'Message', 'form.send': 'Send message',
    'footer.made': 'Made with',
  },
};
const langBtn = document.getElementById('langToggle');
let lang = localStorage.getItem('lang') || 'pt';
function applyLang(l) {
  lang = l;
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
  langBtn.textContent = l === 'pt' ? 'EN' : 'PT';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[l][key]) el.textContent = translations[l][key];
  });
  localStorage.setItem('lang', l);
}
applyLang(lang);
langBtn.addEventListener('click', () => applyLang(lang === 'pt' ? 'en' : 'pt'));

/* ============ TYPING ============ */
const wordsByLang = {
  pt: ['Web', 'Full-Stack', 'PHP / Laravel', 'em formação'],
  en: ['Web', 'Full-Stack', 'PHP / Laravel', 'in training'],
};
const typedEl = document.getElementById('typed');
let wIdx = 0, cIdx = 0, deleting = false;
function type() {
  const words = wordsByLang[lang] || wordsByLang.pt;
  const current = words[wIdx % words.length];
  if (deleting) {
    typedEl.textContent = current.substring(0, cIdx--);
    if (cIdx < 0) { deleting = false; wIdx++; setTimeout(type, 300); return; }
  } else {
    typedEl.textContent = current.substring(0, cIdx++);
    if (cIdx > current.length) { deleting = true; setTimeout(type, 1500); return; }
  }
  setTimeout(type, deleting ? 50 : 110);
}
type();

/* ============ SCROLL REVEAL ============ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section, .project, .exp, .c-card, .t-item, .bar, .stat')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });

/* ============ SKILL BARS FILL ============ */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.fill + '%';
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.fill').forEach(b => barObserver.observe(b));

/* ============ COUNTER ANIMADO ============ */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = +el.dataset.target;
      let n = 0;
      const step = Math.max(1, Math.floor(target / 30));
      const tick = () => {
        n += step;
        if (n >= target) { el.textContent = target; return; }
        el.textContent = n;
        requestAnimationFrame(tick);
      };
      tick();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.num').forEach(n => counterObserver.observe(n));

/* ============ FILTRO DE PROJETOS ============ */
const filterBtns = document.querySelectorAll('.filter');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filter;
    document.querySelectorAll('.project').forEach(p => {
      p.classList.toggle('hide', cat !== 'all' && p.dataset.cat !== cat);
    });
  });
});

/* ============ FORMULÁRIO ============ */


/* ============ BACK TO TOP ============ */
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ============ CURSOR BLOB ============ */
const blob = document.getElementById('cursorBlob');
document.addEventListener('mousemove', (e) => {
  blob.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
});

/* ============ PARTICLES ============ */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
function initParticles() {
  resizeCanvas();
  particles = Array.from({ length: 50 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2 + 1,
  }));
}
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const color = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
  particles.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    // linhas
    particles.slice(i + 1).forEach(p2 => {
      const dx = p.x - p2.x, dy = p.y - p2.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 120) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.globalAlpha = 1 - d / 120;
        ctx.lineWidth = 0.4;
        ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    });
  });
  requestAnimationFrame(animateParticles);
}
initParticles();
animateParticles();
window.addEventListener('resize', initParticles);

emailjs.init("SUA_PUBLIC_KEY");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
      "SEU_SERVICE_ID",
      "SEU_TEMPLATE_ID",
      this
    )
    .then(() => {

      document.getElementById("status").innerText =
        "Mensagem enviada com sucesso!";

      this.reset();

    })
    .catch((error) => {

      document.getElementById("status").innerText =
        "Erro ao enviar.";

      console.log(error);

    });

});