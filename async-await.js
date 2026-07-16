async function ninja() {

    console.log("A");

    const value = await Promise.resolve(10);

    console.log("B");

    return value;

}

console.log("1");

ninja();

console.log("2");