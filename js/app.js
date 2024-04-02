const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');
const fragment = document.createDocumentFragment();

const getData = (labels) => {
  const copyTemplate = document.importNode(template.content, true);
  const element = copyTemplate.querySelectorAll('.info');
  for (const child of element) {
    if (labels.children[2]) {
      console.log('nashe');
    } else if (labels.id === child.id) {
      fragment.appendChild(child);
      labels.appendChild(fragment);
    }
  }
};

for (const label of titanContent) {
  label.addEventListener('click', (e) => {
    const childTitle = e.currentTarget.children[1];

    childTitle.style.bottom = '360px';

    return getData(e.currentTarget);
  });
}
