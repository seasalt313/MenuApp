/** 1. Toggle between two views using 'hidden' class.
2. Search through an array of foods.
3. Add Items to array of foods
4. Render an array of foods to the DOM
*/

let foods = [{
        name: "Cupcakes ",
        price: 8.67,
        description: 'Mini Cakes with frosting'
    },
    {
        name: "Birthday Cake",
        price: 9.67,
        description: 'Cake with party sprinkles'
    },
    {
        name: "Chocolate Mousse",
        price: 11.67,
        description: 'Chocolate dessert'
    },
]

// let foodList = require('./foods');


window.addEventListener("load", function() {
    //My two navigational elements
    let nav_list = document.querySelector("#show-list");
    let nav_add = document.querySelector("#show-add");

    let view_list = document.querySelector("#list-view");
    let view_add = document.querySelector("#add-view");

    let search_box = document.querySelector("#search");

    //When I click the nav_list element, show the list view.
    nav_list.addEventListener("click", function() {;
        console.log("hi");
        view_list.classList.remove('hidden');
        view_add.classList.add('hidden');

    });

    nav_add.addEventListener("click", function() {;
        console.log("hi");
        view_list.classList.add('hidden');
        view_add.classList.remove('hidden');

    });

    search_box.addEventListener('keyup', function() {
        console.log(search_box.value);
        //perfect use of filter
        //find all the items that include search text in their name

        let keepers = [];

        for (let i = 0; i < foods.length; i++) {
            let food_name = foods[i].name.toLowerCase();
            let search_term = search_box.value.toLowerCase();
            // Does this foods name include the search text?
            if (food_name.includes(search_term)) {
                keepers.push(foods[i]);
                console.log(keepers);
            }
        }
        showFoods(keepers)
    })

    showFoods(foods)
})

/**
Input: array
Show: a list of foods in the DOM
*/

function showFoods(foods) {
    let parent = document.querySelector("#menu"); //get our ul

    parent.innerHTML = '';

    for (let i = 0; i < foods.length; i++) {
        //Create an li, fill it with text content and then append it.
        let child = document.createElement("li");

        //mustache, text content
        child.innerHTML = Mustache.render(
            document.querySelector("#menu-item").innerHTML, foods[i]
        );
        parent.appendChild(child);

    }
}
