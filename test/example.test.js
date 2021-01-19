// IMPORT MODULES under test here:
import { renderAnimal } from '../render-animal.js';

const test = QUnit.test;

test('should take in an animal and return a li', (expect) => {
    const fred = {
        id: 1,
        price: 40,
        image: 'iguana.png',
        legs: 4,
        species: 'iguana',
        size: 'huge',
        name: 'Fred',
        hasFur: false,
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="animal-item"><h3 class="animal-name">Freddy Guana</h3><img class="animal-image" src="assets/pictures/iguana.png"><p class="animal-species">iguana</p><p class="animal-price">$40</p><p class="animal-legs">4 legs</p><p class="animal-furry">Smooth</p><button>Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderAnimal(fred);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
