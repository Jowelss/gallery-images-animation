const template = document.getElementById('template');
const titanContent = document.querySelectorAll('.titan-content');

const coso = () => {
  const copyTemplate = document.importNode(template.content, true);

  for (const item of copyTemplate.children) {
    const almacen = {
      id: item.id,
    };
    if (almacen.id === 'titan-bestia') {
      console.log(almacen.id);
    } else {
    }
  }
};

for (const element of titanContent) {
  element.addEventListener('click', coso);
}
