// IMPORT MODULES under test here:
import { renderAnimal } from '../products/render-animal.js';
import { findById } from '../utils.js';
import { animals } from '../animals.js';
import { setCart, getCart } from '../cart-utils.js';
// laboratory for our function



const test = QUnit.test;

// test('should take in an animal and return a li', (expect) => {
//     const fred = {
//         id: 1,
//         price: 40,
//         image: 'iguana.png',
//         legs: 4,
//         species: 'iguana',
//         size: 'huge',
//         name: 'Fred',
//         hasFur: false,
//     };
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = `<li class="animal-item"><h3 class="animal-name">Freddy Guana</h3><img class="animal-image" src="assets/pictures/iguana.png"><p class="animal-species">iguana</p><p class="animal-price">$40</p><p class="animal-legs">4 legs</p><p class="animal-furry">Smooth</p><button>Add to cart</button></li>`;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = renderAnimal(fred);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });

// test('findById should take in an 2 and the animals array and return the dog', (expect) => {
//     // const animals = [
//     //     {
//     //         id: 1,
//     //         price: 40,
//     //         image: 'iguana.png',
//     //         legs: 4,
//     //         species: 'iguana',
//     //         size: 'huge',
//     //         name: 'Freddy Guana',
//     //         hasFur: false,
//     //     },
//     //     {
//     //         id: 2,
//     //         price: 50,
//     //         image: 'dog.png',
//     //         legs: 4,
//     //         species: 'dog',
//     //         size: 'medium',
//     //         name: 'Phillip',
//     //         hasFur: true,
//     //     },
//     //     {
//     //         id: 3,
//     //         price: 20,
//     //         image: 'pig.png',
//     //         legs: 4,
//     //         species: 'pig',
//     //         size: 'small',
//     //         name: 'Willow-Suzie',
//     //         hasFur: false,
//     //     },
//     //     {
//     //         id: 4,
//     //         price: 10,
//     //         image: 'trash-panda.png',
//     //         legs: 4,
//     //         species: 'trash-panda',
//     //         size: 'medium',
//     //         name: 'Cassidy',
//     //         hasFur: true,
//     //     },
//     //     {
//     //         id: 5,
//     //         price: 90,
//     //         image: 'red-panda.png',
//     //         legs: 4,
//     //         species: 'red-panda',
//     //         size: 'small',
//     //         name: 'Penny',
//     //         hasFur: true,
//     //     },
//     // ];
//     // //Arrange
//     // // Set up your arguments and expectations
//     const expected = {
//         id: 2,
//         price: 50,
//         image: 'dog.png',
//         legs: 4,
//         species: 'dog',
//         size: 'medium',
//         name: 'Phillip',
//         hasFur: true,
//     };
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = findById(2, animals);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(actual, expected);
// });

test('getCart should get the correct cart from local storage', (expect) => {
    const testCart = [
        { 
            id: 3,
            quantity: 2
        },
        { 
            id: 4,
            quantity: 1
        },
    ];
    const stringyCart = JSON.stringify(testCart);

    localStorage.setItem('CART', stringyCart);
    
    const cart = getCart();

    expect.deepEqual(cart, testCart);
});