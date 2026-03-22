/* --- Smooth Scroll --- */
const links = document.querySelectorAll('nav a');
for (const link of links) {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
}

/* --- Fade-in Sections --- */
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

/* --- Back to Top Button --- */
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.textContent = '↑ Haut';
document.body.appendChild(backToTop);

backToTop.style.cssText = `
    position: fixed; bottom: 30px; right: 30px;
    padding: 10px 15px; font-size: 18px; 
    display: none; cursor: pointer; border-radius: 8px;
    background: #4CAF50; color: white; border: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: 0.3s;
`;

backToTop.addEventListener('mouseenter', () => backToTop.style.background = '#3e8e41');
backToTop.addEventListener('mouseleave', () => backToTop.style.background = '#4CAF50');

window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

/* --- Typing Effect Header --- */
const title = document.querySelector('header h1');
const text = "Portfolio de Roukia 🖤💻";
let index = 0;
function type() {
    if(index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
title.textContent = '';
type();

/* --- Project Hover Pop --- */
const projectCards = document.querySelectorAll('#projects p');
projectCards.forEach(card => {
    card.style.transition = 'transform 0.3s, box-shadow 0.3s';
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});
