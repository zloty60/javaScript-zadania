function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iphone6s = new Phone("Apple", 2250, "silver");
var GalaxyS6 = new Phone("Samsung", 2000, "gold");
var Note8 = new Phone("Samsung", 3600, "black");

iphone6s.printInfo();
GalaxyS6.printInfo();
Note8.printInfo(); 
