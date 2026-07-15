


const naruto = {
    age: 16,
    village: "Leaf",
    name: "Naruto",

    [Symbol.iterator]() {
        const argumentss = [this.age, this.village, this.name]
        let index = 0
        return {
            next() {
                if (index < argumentss.length) {
                    return {
                        argss: argumentss[index++],
                        done: false
                    }
                }
            }
        }
    }
}

for (const value of naruto) {
    console.log(value);
}