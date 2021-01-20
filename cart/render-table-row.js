// cartItem: quantity, id
export function renderTableRow(cartItem, animal) {
    const quantity = cartItem.quantity;

    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = animal.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = `$${getAnimalTotal(cartItem, animal)}`;

    tr.append(nameTd, quantityTd, priceTd);
    
    return tr;
}

export function getAnimalTotal(cartItem, animal) {
    return cartItem.quantity * animal.price;
}