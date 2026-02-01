var products = [
    // Electronics
    { name: "Laptop", price: 45000, rating: 5, category: "Electronics", image: "Laptop.jpeg" },
    { name: "Phone", price: 15000, rating: 4, category: "Electronics", image: "Phone.jpeg" },
    { name: "Headphones", price: 2000, rating: 3, category: "Electronics", image: "Headphones.jpeg" },
    { name: "Smart Watch", price: 3500, rating: 4, category: "Electronics", image: "SmartWatch.jpeg" },
    { name: "Tablet", price: 12000, rating: 5, category: "Electronics", image: "Tablet.jpeg" },
    { name: "T-Shirt", price: 500, rating: 4, category: "Fashion", image: "Tshirt.jpeg" },
    { name: "Jeans", price: 1200, rating: 3, category: "Fashion", image: "Jeans.jpeg" },
    { name: "Sneakers", price: 2500, rating: 5, category: "Fashion", image: "Sneakers.jpeg" },
    { name: "Jacket", price: 3000, rating: 4, category: "Fashion", image: "Jacket.jpeg" },
    { name: "Cap", price: 300, rating: 2, category: "Fashion", image: "Caps.jpeg" },
    { name: "Coffee Maker", price: 4000, rating: 4, category: "Home", image: "Coffee maker.jpeg" },
    { name: "Blender", price: 1500, rating: 3, category: "Home", image: "Blender.jpeg" },
    { name: "Toaster", price: 1200, rating: 4, category: "Home", image: "Toaster.jpeg" },
    { name: "Microwave", price: 6000, rating: 5, category: "Home", image: "Microwave.jpeg" },
    { name: "Lamp", price: 800, rating: 2, category: "Home", image: "lamp.jpeg" },
    { name: "Novel", price: 400, rating: 5, category: "Books", image: "Novel.jpeg" },
    { name: "Science Book", price: 900, rating: 4, category: "Books", image: "Science Books.jpeg" },
    { name: "Cookbook", price: 600, rating: 5, category: "Books", image: "Cook Books.jpeg" },
    { name: "History Book", price: 750, rating: 3, category: "Books", image: "History book.jpeg" },
    { name: "Comic", price: 150, rating: 4, category: "Books", image: "Comic books.jpeg" }
];
function render() {
    var cat = document.getElementById("catSelect").value;
    var sort = document.getElementById("sortSelect").value;
    var list = document.getElementById("container");
    list.innerHTML = "";
    var filtered = products.filter(function(item) {
        if (cat == "all") {
            return true;
        }
        return item.category == cat;
    });
    if (sort == "priceLow") {
        filtered.sort(function(a, b) { return a.price - b.price; });
    } 
    else if (sort == "priceHigh") {
        filtered.sort(function(a, b) { return b.price - a.price; });
    } 
    else if (sort == "ratingHigh") {
        filtered.sort(function(a, b) { return b.rating - a.rating; });
    } 
    else if (sort == "nameAsc") {
        filtered.sort(function(a, b) { 
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });
    }
    for (var i = 0; i < filtered.length; i++) {
        var item = filtered[i];
        var box = document.createElement("div");
        box.className = "card";
        box.innerHTML = "<img src='" + item.image + "' alt='" + item.name + "'>" +
                        "<h3>" + item.name + "</h3>" +
                        "<p>" + item.category + "</p>" +
                        "<p class='price'>Rs " + item.price + "</p>" +
                        "<p class='rating'>Rating: " + item.rating + "/5</p>";

        list.appendChild(box);
    }
}
render();
