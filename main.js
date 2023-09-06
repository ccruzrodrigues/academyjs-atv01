
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Depois das aulas de JS bate aquela fome. Resolvi pegar um :insertX: no :insertY:. Vou pagar com :insertZ:. Pensando em levar alguem pra dividir esse mico comigo.';
const insertX = ['Café com pão de queijo', 'Espetinho de gato', 'Lanche do T5'];
const insertY = ['Queijo Minas no Shopping', 'Churrasquinho do Frajola', 'Lanche completo por 1 Real'];
const insertZ = ['Cartão Diners Club', 'Moeda de 1 Real', 'Corinho de rato de 5 Centavos'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertX:', xItem);
  newStory = newStory.replaceAll(':insertY:', yItem);
  newStory = newStory.replaceAll(':insertZ:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('alguem', name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}