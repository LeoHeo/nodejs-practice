var animals = ["dog", "cat", "python"];

for(var i=0; i<animals.length; i++) {
    var animal = animals[i];
    console.log(animal + "를 키웁니다.");
}

for(var i in animals) {
    var animal = animals[i];
    console.log(animal);
}

animals.forEach(function(animal){
    console.log(animal);
})
