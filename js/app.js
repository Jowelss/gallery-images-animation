const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');
const fragment = document.createDocumentFragment();

const getData = (labels) => {
  const copyTemplate = document.importNode(template.content, true);
  const element = copyTemplate.querySelectorAll('.info');

  for (const child of element) {
    if (labels.children[2]) {
      labels.children[0].style.filter = 'brightness(100%)';
      labels.children[2].style.animationName = 'transitionInfoBottom';
      labels.children[2].style.transition = '0.1s';
      labels.children[2].style.opacity = '0';

      setTimeout(() => {
        labels.removeChild(labels.children[2]);
      }, 100);

      return;
    } else if (labels.id === child.id) {
      child.style.animationName = 'transitionInfoTop';
      labels.children[0].style.filter = 'brightness(20%)';

      fragment.appendChild(child);
      labels.appendChild(fragment);

      return;
    }
  }
};
for (const label of titanContent) {
  let activador = true;

  label.addEventListener('click', (e) => {
    const childTitle = e.currentTarget.children[1];

    childTitle.style.animationName = activador
      ? 'moveTitleTop'
      : 'moveTitleBottom';

    activador = !activador;

    return getData(e.currentTarget);
  });
}
