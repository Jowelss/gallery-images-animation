const images = document.querySelectorAll('.image-content');
const title = document.querySelector('.title');

images.forEach((image) => {
  image.addEventListener('click', () => {
    image.style.filter = ' brightness(10%)';
    title.style.top = '0'; // Prueba para hacer que titulo se vaya para arriba, falta transicion y aplicarla a todos los titles
  });
});
