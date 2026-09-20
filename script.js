const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

/* ---------- Language switcher (EN / BM) ---------- */
function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val !== null) el.innerHTML = val;
  });
  document.querySelectorAll('[data-en-ph]').forEach(el => {
    const val = el.getAttribute('data-' + lang + '-ph');
    if (val !== null) el.placeholder = val;
  });
  document.documentElement.lang = (lang === 'ms') ? 'ms' : 'en';
  document.querySelectorAll('.lang-opt').forEach(o => {
    o.classList.toggle('active', o.dataset.lang === lang);
  });
  try { localStorage.setItem('hg-lang', lang); } catch (e) {}
}

let savedLang = null;
try { savedLang = localStorage.getItem('hg-lang'); } catch (e) {}
// Default to Malay for Malaysian/Indonesian browsers, otherwise English
if (!savedLang) {
  const browserLang = (navigator.language || 'en').toLowerCase();
  savedLang = (browserLang.startsWith('ms') || browserLang.startsWith('id')) ? 'ms' : 'en';
}
setLanguage(savedLang);

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = document.documentElement.lang === 'ms' ? 'ms' : 'en';
    setLanguage(current === 'ms' ? 'en' : 'ms');
  });
}

/* ---------- WhatsApp enquiry form ---------- */
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const location = document.getElementById('location').value.trim();
  const message = document.getElementById('message').value.trim();
  const text = `Assalamualaikum Hawa Gold.%0A%0ANama: ${encodeURIComponent(name)}%0ATelefon: ${encodeURIComponent(phone)}%0ALokasi projek: ${encodeURIComponent(location)}%0AButiran projek: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/60173394771?text=${text}`, '_blank');
});
