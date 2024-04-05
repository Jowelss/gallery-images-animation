const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');
const fragment = document.createDocumentFragment();

const getData = (labels) => {
  const copyTemplate = document.importNode(template.content, true);
  const element = copyTemplate.querySelectorAll('.info');
  for (const child of element) {
    if (labels.children[2]) {
      child.style.animationName = 'transitionInfoTwo';

      labels.removeChild(labels.children[2]);
      return;
    } else if (labels.id === child.id) {
      child.style.animationName = 'transitionInfo';
      fragment.appendChild(child);
      labels.appendChild(fragment);
      return;
    }
  }
};
let activador = true;
for (const label of titanContent) {
  label.addEventListener('click', (e) => {
    const childTitle = e.currentTarget.children[1];
    //Hacer el efecto de subir y bajar el title, el operador ternario no funciona, probar con ifelse creo que así si funcionaba
    return getData(e.currentTarget);
  });
}
