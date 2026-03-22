/* =====================
   Smooth Scroll
===================== */
const links = document.querySelectorAll('nav a');
for (const link of links) {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
}

/* =====================
   Fade-in Sections
===================== */
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

/* =====================
   Back to Top Button
===================== */
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
backToTop.addEventListener('
