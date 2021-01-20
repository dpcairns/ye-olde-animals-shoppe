// import functions and grab DOM elements
// CONVERSATION

import { animals } from '../data.js';
import { renderAnimal } from './render-animal.js';

// a empty div to inject stuff into
const list = document.getElementById('list');

// "loop" through the animals array
// "loop" means: do something to every item in an array
for (let animal of animals) {
    // for each animal in the animals array
    // feed it into the renderAnimal function
    // it returns a DOM element called animalElement
    const animalElement = renderAnimal(animal);

    // append it to our empty list
    list.append(animalElement);
}

// initialize state

// set event listeners to update state and DOM