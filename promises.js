const p1 = Promise.resolve(10);

const p2 = p1.then(x => x * 2);

// p1 ─────► Promise #1
// p2 ─────► Promise #2

// Promise #1
// [[PromiseState]] -> fulfilled
// [[PromiseResult]] -> 10

// .then(fn)
// ↓
// Cria Promise #2
// ↓
// Promise #2
// [[PromiseState]] -> pending
// [[PromiseResult]] -> undefined

// Promise #1
// [[PromiseFulfillReactions]] -> [ fn ]


// Resolve(Promise #2, 20)


