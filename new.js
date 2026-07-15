


function myNew(Constructor, ...args) {

    // Etapa 1
    if (typeof Constructor !== "function") {
        throw new TypeError("Not a constructor")
    }
    try {
        Reflect.construct(String, [], Constructor)
    } catch {
        throw new TypeError("Not a constructor")
    }

    // Etapa 2
    const obj = {};
    
    // Etapa 3
    Object.setPrototypeOf(obj, Constructor.prototype);

    // Etapa 4
    const result = Constructor.apply(obj, args)

    // Etapa 5
    if (typeof result === "object" && result !== null) {
        return result
    }

    if (typeof result === "function") {
        return result
    }


    return obj;
}



function Ninja() {
    this.name = "Naruto"
}

Ninja.prototype.attack = function () {
    console.log("Rasengan")
}

naruto = myNew(Ninja)

console.log(naruto)