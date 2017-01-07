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


      name.textContent = nameInput;
      description.textContent = descInput;
      price.textContent = priceInput;

      addItem.appendChild(listItem);
      listItem.appendChild(name);
      listItem.appendChild(description);
      listItem.appendChild(price);

}

function showFood() {
    console.log("show food function");
    let addItem = document.querySelector(".menu_ul");
    let listItem = document.createElement("li");
    let name = document.createElement("h4");
    let description = document.createElement("p");
    let price = document.createElement("h5");

    food.map(function(plate) {

      name.textContent = plate.name;
      description.textContent = plate.description;
      price.textContent = plate.price;

      addItem.appendChild(listItem);
      listItem.appendChild(name);
      listItem.appendChild(description);
      listItem.appendChild(price);

    })
}

window.addEventListener("load", function() {
    addItemButton = document.querySelector("#addItemButton");
    addItemButton.addEventListener("click", addFood);

    displayItemsButton = document.querySelector("#displayItemsButton");
    displayItemsButton.addEventListener("click", showFood);
})
