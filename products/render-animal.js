import { addToCart } from '../cart-utils.js';

export function renderAnimal(animal) {
    /*
    animal has 
        { 
            name, 
            price, 
            legs, 
            hasFur, 
            species, 
            image, 
            size
        }
    */
   
    const li = document.createElement('li');
    li.classList.add('animal-item');
   
    const h3 = document.createElement('h3');
    h3.classList.add('animal-name');
    h3.textContent = animal.name;
    li.append(h3);
   
    const img = document.createElement('img');
    img.classList.add('animal-image');
    li.append(img);
    img.src = `../assets/pictures/${animal.image}`;

    const pSpecies = document.createElement('p');
    pSpecies.classList.add('animal-species');
    pSpecies.textContent = animal.species;
    li.append(pSpecies);
   
    const pPrice = document.createElement('p');
    pPrice.classList.add('animal-price');
    pPrice.textContent = `$${animal.price}`;
    li.append(pPrice);
   
    const pLegs = document.createElement('p');
    pLegs.classList.add('animal-legs');
    pLegs.textContent = `${animal.legs} legs`;
    li.append(pLegs);

    const pFurry = document.createElement('p');
    pFurry.classList.add('animal-furry');

    if (animal.hasFur) {
        pFurry.textContent = 'Furry';
    } else {
        pFurry.textContent = 'Smooth';
    }
    
    li.append(pFurry);
   
    const button = document.createElement('button');
    button.addEventListener('click', () => {
        addToCart(animal.id);
    });

    button.textContent = 'Add to cart';
    li.append(button);

    return li;
}