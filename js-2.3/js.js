var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var newText = text.replace("Velociraptor", dinosaur.toUpperCase()).slice(0, text.length/2);
console.log(newText);