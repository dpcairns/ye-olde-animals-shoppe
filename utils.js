// we will assume valid input: an array with objects that all have an id
export function findById(id, array) {
    // iterate/loop through the array
    for (let item of array) {
        // compare our id to the id of the item
        if (item.id === id) {
            // if they match, return that item
            return item;
        }
    }
}

// we will assume valid input: an array with objects that all have an id
export function alternativeFindById(id, array) {
    // iterate/loop through the array
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        // compare our id to the id of the item
        if (id === item.id) {
            // if they match, return that item
            return item;
        }
    }
}