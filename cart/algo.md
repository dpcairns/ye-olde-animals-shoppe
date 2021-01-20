## I have a cart item and the animals array:

 ```js
    {
        animal: 5,
        quantity: 3
    }
```

## How can I find the _cost_ of the item in the cart?

1) Get the `animal` id from the cart item.
2) Loop through the `animals` array
3) For each animal, check the id
    - if it is a match with the item in the cart, grab the price
    - if not, move on to the next item
4) Store the price
5) Get the `quantity` from the cart object
6) Store the quantity
7) totalPrice is now stored: quantity times stored price.

<!-- ## How many pigs are in the cart?

1) Find the id of the pig
    a) iterate/loop through the animals array
    b) check the `species` property of each item
    c) if the `species` property is `pig`, we've found the pig!
       - If no match, repeat this check with the next item
    d) Get the `id` property of the pig we found.
        - store the id for later
2) Find an object in the cart array with an `animal` of matching id.
    a) Iterate/loop through the cart
    b) Check the `animal` property of each item
    c) If the `animal` property is the same as the `id` we found, it's a match!
        - If no match, repeat this check with the next item
    c) Get the `quantity` property of this matching obejct. -->