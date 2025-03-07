const { Person } = require('./person');
const { Animal } = require('./pet');
const { AnimalName } = require('./pet')

const person = new Person('Gabriel');
const animal = new Animal('cat');
const petName = new AnimalName('Lilo')

console.log(person.sayMyName());
console.log(animal.myPetIs());
console.log(petName.petName());