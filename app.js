var food = [{
        name: "Spaghetti",
        description: "spaghetti noodles tossed in marinara sauce",
        price: 12.32,
    },
    {
        name: "French Toast",
        description: "Challah french toast with maple syrup topped with powdered sugar",
        price: 12.32,
    },
    {
        name: "Philly Cheese Steak",
        description: "Beef, American Cheese, peppers and onions",
        price: 12.32,
    },
    {
        name: "Chai Tea Latte",
        description: "House-blend masala spices with steamed milk",
        price: 12.32,
    },
]

function addFood() {

    let addItem = document.querySelector(".menu_ul");
    let listItem = document.createElement("li");
    let name = document.createElement("h4");
    let description = document.createElement("p");
    let price = document.createElement("h5");

    let nameInput = document.querySelector("#enter_name").value;
    let descInput = document.querySelector("#enter_desc").value;
    let priceInput = document.querySelector("#enter_price").value;

    console.log(nameInput, descInput, priceInput)

      name.textContent = nameInput;
      description.textContent = descInput;
      price.textContent = priceInput;

      addItem.appendChild(listItem);
      listItem.appendChild(name);
      listItem.appendChild(description);
      listItem.appendChild(price);

      console.log(addItem);

      let old_menu = document.querySelector(".menu_ul")
      let new_menu = document.querySelector(".new_menu_ul");
      old_menu.classList.add("hidden");
      new_menu.classList.remove("hidden");

}

function showFood() {
    console.log("show food function");
    let old_menu = document.querySelector(".menu_ul");
    let new_menu = document.querySelector(".new_menu_ul");

    old_menu.classList.remove("hidden");
    new_menu.classList.add("hidden");

    // addItemButton = document.querySelector("#addItemButton");
    // addItemButton.addEventListener("click", addFood);

    // displayItemsButton = document.querySelector("#displayItemsButton");
    // displayItemsButton.addEventListener("click", showFood);

}

window.addEventListener("load", function() {
    addItemButton = document.querySelector("#addItemButton");
    addItemButton.addEventListener("click", addFood);

    displayItemsButton = document.querySelector("#displayItemsButton");
    displayItemsButton.addEventListener("click", showFood);

    food.forEach(function(plate) {
      let addItem = document.querySelector(".menu_ul");
      let listItem = document.createElement("li");
      let name = document.createElement("h4");
      let description = document.createElement("p");
      let price = document.createElement("h5");

      name.textContent = plate.name;
      description.textContent = plate.description;
      price.textContent = plate.price;

      addItem.appendChild(listItem);
      listItem.appendChild(name);
      listItem.appendChild(description);
      listItem.appendChild(price);

    })
})
