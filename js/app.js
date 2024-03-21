const images = document.querySelectorAll('.image');
const titleBestia = document.querySelector('.title-bestia');
const titleBestiaInfo = document.querySelector('.titan-bestia__info');
const titleAcorazado = document.querySelector('.title-acorazado');

images.forEach((image) => {
  image.addEventListener('click', (imageEvent) => {
    imageEvent.target.style.filter = 'brightness(20%)';
    imageEvent.target.style.transition = '1s';

    if (imageEvent.target.classList[1] === 'titan-bestia') {
      titleBestia.style.bottom = '360px';
      titleBestia.style.fontSize = '1.3rem';
      titleBestiaInfo.style.transition = '1s';
      titleBestiaInfo.style.transitionDelay = '0.6s';
      titleBestiaInfo.style.zIndex = '1';
      titleBestiaInfo.style.opacity = '1';
    }

    if (imageEvent.target.classList[1] === 'titan-acorazado') {
      titleAcorazado.style.bottom = '300px';
      titleAcorazado.style.fontSize = '1.3rem';
    }
  });
});
