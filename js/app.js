const images = document.querySelectorAll('.image');
const titleBestia = document.querySelector('.title-bestia');
const titanBestiaInfo = document.querySelector('.titan-bestia__info');
const titleAcorazado = document.querySelector('.title-acorazado');
const titanAcorazadoInfo = document.querySelector('.titan-acorazado__info');

let activatorBestia = true;
let activatorAcorazado = true;

images.forEach((image) => {
  image.addEventListener('click', (imageEvent) => {
    imageEvent.target.style.filter = 'brightness(20%)';
    imageEvent.target.style.transition = '1s';

    if (imageEvent.target.classList[1] === 'titan-bestia' && activatorBestia) {
      titleBestia.style.bottom = '340px';
      titleBestia.style.fontSize = '1.3rem';
      titanBestiaInfo.style.transition = '1s';
      titanBestiaInfo.style.transitionDelay = '0.7s';
      titanBestiaInfo.style.zIndex = '1';
      titanBestiaInfo.style.opacity = '1';

      activatorBestia = false;
    } else {
      imageEvent.target.style.filter = 'brightness(100%)';
      titleBestia.style.bottom = '0px';
      titleBestia.style.fontSize = '2rem';
      titanBestiaInfo.style.zIndex = '-1';
      titanBestiaInfo.style.transition = '0.2s';
      titanBestiaInfo.style.opacity = '0';

      activatorBestia = true;
    }
  });

  image.addEventListener('mouseout', () => {
    titleBestia.style.fontSize = '2rem';
    titleBestia.style.bottom = '0px';
    titanBestiaInfo.style.transition = '0.2s';
    titanBestiaInfo.style.zIndex = '-1';
    titanBestiaInfo.style.opacity = '1';

    activatorBestia = true;
  });
});
