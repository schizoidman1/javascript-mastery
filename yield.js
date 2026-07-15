function* generator() {
    let a = "A"
    let b = "B"
    console.log(a)

    yield a

    console.log(b)

    yield b
}


const abc = generator()

abc.next()

console.log(abc.next())