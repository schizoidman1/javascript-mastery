const ID = Symbol("id")

class Person {
    constructor(name, age, id) {
        this.name = name,
        this.age = age,
        this[ID] = id
    }

    static fun() {
        return Math.random()
    }
}

lucca = new Person("Lucca", 25, 123)

console.log(Object.keys(lucca))

console.log(Reflect.ownKeys(lucca))

console.log(lucca.id)

lucca.id = 890

console.log(lucca.id)

console.log(Reflect.ownKeys(lucca))
console.log(lucca[ID])