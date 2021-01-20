// we will assume valid input: an array with objects that all have an id
export function findById(id, array) {
    // iterate/loop through the array
    for (let item of array) {
        // compare our id to the id of the item
        if (id === item.id) {
            // if they match, return that item
            return item;
        }
    }
}