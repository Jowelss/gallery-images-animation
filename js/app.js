const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');

const hijos = (id) => {
  const copyTemplate = document.importNode(template.content, true);
  const hijos = copyTemplate.querySelectorAll('*');
  for (const hijo of hijos) {
    console.log(hijo);
  }
};
hijos();
// for (const iterator of titanContent) {
//   iterator.addEventListener('click', (e) => {
//     hijos(e.currentTarget.id);
//   });
// }
