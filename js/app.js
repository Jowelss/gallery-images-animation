const images = document.querySelectorAll('.image-content');
const titleBestia = document.querySelector('.title-bestia');
const titanBestiaInfo = document.querySelector('.titan-bestia__info');
const titleAcorazado = document.querySelector('.title-acorazado');
const titanAcorazadoInfo = document.querySelector('.titan-acorazado__info');

let activatorBestia = true;
let activatorAcorazado = true;

images.forEach((image) => {
  image.addEventListener('click', (imageEvent) => {
    if (imageEvent.target.classList[1] === 'titan-bestia' && activatorBestia) {
      console.log(imageEvent.target);
      imageEvent.target.style.filter = 'brightness(20%)';
      imageEvent.target.style.transition = '1s';
      titleBestia.style.bottom = '330px';
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
      titanBestiaInfo.style.transition = '0.3s';
      titanBestiaInfo.style.opacity = '0';

      activatorBestia = true;
    }

    if (
      imageEvent.target.classList[1] === 'titan-acorazado' &&
      activatorAcorazado
    ) {
      console.log(imageEvent.target);
      imageEvent.target.style.filter = 'brightness(20%)';
      imageEvent.target.style.transition = '1s';
      titleAcorazado.style.bottom = '370px';
      titleAcorazado.style.fontSize = '1.3rem';
      titanAcorazadoInfo.style.transition = '1s';
      titanAcorazadoInfo.style.transitionDelay = '0.7s';
      titanAcorazadoInfo.style.zIndex = '1';
      titanAcorazadoInfo.style.opacity = '1';

      activatorAcorazado = false;
    } else {
      imageEvent.target.style.filter = 'brightness(100%)';
      titleAcorazado.style.bottom = '0px';
      titleAcorazado.style.fontSize = '2rem';
      titanAcorazadoInfo.style.zIndex = '-1';
      titanAcorazadoInfo.style.transition = '0.3s';
      titanAcorazadoInfo.style.opacity = '0';

      activatorAcorazado = true;
    }
  });
});
