// import functions and grab DOM elements
import { animals } from './data.js';
import { renderAnimal } from './render-animal.js';
console.log(animals);

const list = document.getElementById('list');

for (let animal of animals) {
    const animalElement = renderAnimal(animal);

    list.prepend(animalElement);
}

// initialize state

// set event listeners to update state and DOM