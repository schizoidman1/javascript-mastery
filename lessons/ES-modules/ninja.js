export class Ninja {
    constructor(name, jutsus, village) {
        this.name = name
        this.jutsus = jutsus
        this.village = village
        this.chakra = 100
        this.health = 100
        this.weapon = undefined
    }

    attack(enemy) {
        if (this.weapon) {
            enemy.takeDamage(this.weapon.damage, this)
            console.log(`${this.name} dealt ${this.weapon.damage} damage to ${enemy.name} with ${this.weapon.name}`)
        } else {
            enemy.takeDamage(1, this)
            console.log(`${this.name} punched ${enemy.name}`)
        }
    }

    attachWeapon(weapon) {
        this.weapon = weapon
    }

    takeDamage(damage, enemy) {
        this.health -= damage
        console.log(`${this.name} took ${damage} damage from ${enemy.name}`)
    }

    cast(jutsu_key, enemy){
        let jutsu_cost = this.jutsus[jutsu_key].cost
        let jutsu_name = this.jutsus[jutsu_key].name
        let jutsu_damage = this.jutsus[jutsu_key].damage

        if (this.chakra > jutsu_cost) {
            this.chakra -= jutsu_cost
            this.takeDamage(jutsu_damage, enemy)
            console.log(`${this.name} used ${jutsu_name} on ${enemy.name} dealing ${jutsu_damage} damage`)
        }
        
    }

    stats() {
        console.log(`
            ------------------------------
            Name  : ${this.name}
            Health: ${this.health}
            Chakra: ${this.chakra}
            Weapon: ${this?.weapon?.name}`)
    }
}


