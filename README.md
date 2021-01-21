# Adding local storage

1) Make it so you can click on products and add them to the cart in localStorage
    1) We need a button to click
    2) Add an event listener to the button
    3) On click, we should
        1) Look at the id of the thing we clicked on.
        2) We should add/increment that item in the cart.
            0) Get the cart from localStorage
            1) Check if an item with this ID is already in the cart. 
                - If so, increment the quantity
                - If it's not in the cart, put one in there with a quantity of 1.

2) Load the cart page from localStorage
    1) Grab the cart from localStorage, and store it in a variable.
    2) Replace our hard-coded cart with that variable.
