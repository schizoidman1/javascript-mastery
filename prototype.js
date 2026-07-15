// ===========================
// Creation Phase (Global EC)
// ===========================

// A engine cria um Function Object chamado Ninja.
//
// Esse Function Object possui, internamente:
//
// [[Call]]
// [[Construct]]
// [[Environment]]
// [[Prototype]] -----> Function.prototype
//
// E também cria automaticamente:
//
// Ninja.prototype -----> {
//     constructor: Ninja
// }

function Ninja() {}


// ===========================
// Execution Phase
// ===========================

// A engine procura a propriedade "prototype" da função Ninja.
//
// Ela encontra o objeto:
//
// {
//     constructor: Ninja
// }
//
// Agora adiciona uma nova propriedade nesse objeto:
//
// attack -> Function Object

Ninja.prototype.attack = function () {
    console.log("Rasengan");
};


// ===========================
// new Ninja()
// ===========================

// 1. Cria um novo objeto vazio.
//
// {}
//
// 2. Define:
//
// novoObjeto.[[Prototype]] = Ninja.prototype
//
// 3. Executa Ninja() usando:
//
// this = novoObjeto
//
// (Como Ninja está vazia, nada acontece)
//
// 4. Retorna novoObjeto

const naruto = new Ninja();


// O mesmo processo acontece novamente.

const sasuke = new Ninja();


// ==========================================
// O que existe na memória neste momento?
// ==========================================

/*

                  Function Object (Ninja)

        [[Prototype]] --------------------> Function.prototype

        prototype ------------------------> {
                                               constructor: Ninja,
                                               attack: FunctionObject
                                           }


naruto

[[Prototype]]
      │
      ▼
Ninja.prototype


sasuke

[[Prototype]]
      │
      ▼
Ninja.prototype


Perceba:

naruto e sasuke COMPARTILHAM exatamente
o mesmo objeto Ninja.prototype.

Não existe uma cópia de attack() para cada um.

*/


// ==========================================
// O que acontece aqui?
// ==========================================

console.log(naruto.prototype);

// A engine procura:
//
// Existe "prototype" em naruto?
//
// Não.
//
// Vai para naruto.[[Prototype]]
//
// Existe "prototype" em Ninja.prototype?
//
// Não.
//
// Vai para Object.prototype
//
// Existe "prototype"?
//
// Não.
//
// null.
//
// Resultado:
//
// undefined

// Instâncias NÃO possuem a propriedade "prototype".
// Apenas funções possuem.


// ==========================================
// O que acontece aqui?
// ==========================================

naruto.attack();

// A engine faz:
//
// Existe "attack" em naruto?
//
// Não.
//
// Vai para naruto.[[Prototype]]
//
// (Ninja.prototype)
//
// Existe "attack"?
//
// Sim.
//
// Retorna a Function Object.
//
// Agora cria um novo Execution Context:
//
// this -> naruto
//
// console.log("Rasengan")
//
// Output:
//
// Rasengan