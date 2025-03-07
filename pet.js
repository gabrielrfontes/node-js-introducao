class Animal {
    constructor(cat) {
        this.name = cat
    }

    myPetIs() {
        return `And I have a ${this.name} as a pet.`
    }
}

class AnimalName {
    constructor(animalName) {
        this.name = animalName
    }

    petName() {
        return `It's name is ${this.name}!`
    }
}

module.exports = {
    Animal,
    AnimalName,
}

console.log(Animal)