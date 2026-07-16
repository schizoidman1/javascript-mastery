export class Ninja {
    constructor(name, jutsus, village, weapon) {
        this.name = name
        this.jutsus = jutsus
        this.village = village
        this.chakra = 100
        this.health = 100
        this.weapon = weapon
    }

    attack(weapon) {
        console.log(`${this.name} dealt ${weapon.damage} with ${weapon.name}`)
    }

    takeDamage(enemy) {
        this.health -= enemy.weapon.damage
        console.log(`${this.name} took ${enemy.weapon.damage} damage from ${enemy.name} using a ${enemy.weapon.name}`)
    }

    cast(jutsu_key, enemy){
        let jutsu_cost = this.jutsus[jutsu_key].cost
        let jutsu_name = this.jutsus[jutsu_key].name
        let jutsu_damage = this.jutsus[jutsu_key].damage

        if (this.chakra > jutsu_cost) {
            this.chakra -= jutsu_cost
            enemy.health -= jutsu_damage
            console.log(`${this.name} used ${jutsu_name} on ${enemy.name} dealing ${jutsu_damage} damage`)
        }
        
    }

    stats() {
        console.log(`
            ------------------------------
            Name  : ${this.name}
            Health: ${this.health}
            Chakra: ${this.chakra}
            Weapon: ${this.weapon.name}`)
    }
}


