class Ninja {
    constructor(name, rank, jutsu) {
        this.name = name,
        this.rank = rank,
        this.jutsu = jutsu
    }

    attack(key) {
        console.log(this.name + " used " + this.jutsu[key])
    }
}

narutoJutsu = ["Rasengan", "Shadow Clone Jutsu"]
naruto = new Ninja("Naruto", "Hokage", narutoJutsu)

naruto.attack(0)

for (const ninja of naruto.jutsu) {
    console.log(ninja)
}




class Deck {
    constructor() {
        this.nipes = ['Copas', 'Ouros', 'Espadas', 'Paus'];
        this.valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];
        this.deck = this.criarBaralho()
    }

    criarBaralho() {
        let baralho = []

        for (let i = 0; i < this.nipes.length; i++) {
            for (let j = 0; j < this.valores.length; j++) {
                baralho.push({
                    nome: `${this.valores[j]} de ${this.nipes[i]}`
                })
            }
        }
        return baralho
    }
}

const myDeck = new Deck()

console.log(myDeck.deck[0])

const a = myDeck.deck[Symbol.iterator]()

a.next()
console.log(Object.keys(a))

