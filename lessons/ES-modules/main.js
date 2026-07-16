import {Ninja} from './ninja.js';
import { Weapon } from './weapon.js';

const kunai = new Weapon("Kunai", 5)

const naruto_jutsu = [{name: "Rasengan", cost: 20, damage: 55}, {name: "Shadow Clone Jutsu", cost: 50, damage: 40}]
const naruto = new Ninja("Naruto", naruto_jutsu, "Leaf", kunai)

const sasuke_jutsu = [{name: "Chidori", cost: 50, damage: 60}]
const sasuke = new Ninja("Sasuke", sasuke_jutsu, "Leaf", kunai)




naruto.cast(0, sasuke)
naruto.stats()
sasuke.stats()
