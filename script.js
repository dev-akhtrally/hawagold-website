const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const location = document.getElementById('location').value.trim();
  const message = document.getElementById('message').value.trim();
  const text = `Assalamualaikum Hawa Gold.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AProject location: ${encodeURIComponent(location)}%0AProject details: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/60173394771?text=${text}`, '_blank');
});
