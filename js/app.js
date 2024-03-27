const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');

const hijos = (id) => {
  // for (const hijo of hijos) {
  //   hijo.id = id;
  //   if (id === hijo.id) {
  //   }
  // }
};

for (const iterator of titanContent) {
  iterator.addEventListener('click', (e) => {
    const copyTemplate = document.importNode(template.content, true);
    const hijos = copyTemplate.querySelectorAll('*');

    // hijos(e.currentTarget.id);
  });
}
