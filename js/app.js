const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');
const fragment = document.createDocumentFragment();
let activador = true;
const getData = (labels) => {
  const copyTemplate = document.importNode(template.content, true);
  const element = copyTemplate.querySelectorAll('.info');
  for (let i = 0; i < element.length; i++) {
    if (labels.id === element[i].id && activador) {
      const coso = element[i];
      coso.style.transition = '2s';
      labels.appendChild(coso);
    }
  }
};

for (const label of titanContent) {
  label.addEventListener('click', (e) => {
    const child = e.currentTarget.lastElementChild;
    child.style.bottom = '360px';
    return getData(e.currentTarget);
  });
}
