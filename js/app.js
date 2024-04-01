const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');
const fragment = document.createDocumentFragment();

const getData = (labels) => {
  const copyTemplate = document.importNode(template.content, true);
  const element = copyTemplate.querySelectorAll('.info');
  for (let i = 0; i < element.length; i++) {
    if (labels.id === element[i].id) {
      const coso = element[i];
      labels.appendChild(coso);
      if (coso > 2) {
        coso.remove('id');
      }
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
