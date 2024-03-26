const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');

for (const elemento of titanContent) {
  elemento.addEventListener('click', () => {
    const copyTemplate = document.importNode(template.content, true);
    console.log(copyTemplate.textContent);
  });
}
