const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');

const store = [];

const getData = () => {
  const copyTemplate = document.importNode(template.content, true);
  for (const elemento of copyTemplate.children) {
    store.push({ id: elemento.id });
  }
};
