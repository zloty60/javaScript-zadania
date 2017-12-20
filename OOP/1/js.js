function Phone(brand, price, color, system, availability) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.system = system;
    this.availability = availability;
  
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " the price is " + this.price + " and system is " + this.system + ".");
}

Phone.prototype.checkAvailability = function() {
  if (this.availability == true) {
    console.log("availability");
  } else {
    console.log("not availability");
  }
}


var iphone6s = new Phone("Apple", 2250, "silver", "iOS", true);
var GalaxyS6 = new Phone("Samsung", 2000, "gold", "Android 5.0" ,false);
var Note8 = new Phone("Samsung", 3600, "black", "Android 7.1.1" , true);

iphone6s.printInfo();
GalaxyS6.printInfo();
Note8.printInfo();
GalaxyS6.checkAvailability();
Note8.checkAvailability();
