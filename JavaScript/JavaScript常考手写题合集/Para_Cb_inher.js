//寄生组合式继承


function Animal() {
  this.name = "animal";
}

function Dog() {
  this.type = "dog";
  Animal.call(this);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
