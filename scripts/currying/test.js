const {curry, currying} = require('./index')


test('curring certain function arguments', () => {
    const add = (a, b, c) => a + b + c
    const curriedAdd = curry(add)
    
    expect(curriedAdd(1)(2)(3)).toBe(6)
    expect(curriedAdd(1, 2)(3)).toBe(6)
    expect(curriedAdd(1)(2, 3)).toBe(6)
})

test('currying uncertain function arguments', () => {
    const add = (...args) => args.reduce((a, b) => a + b)
    const curriedAdd = currying(add)

    expect(curriedAdd(1)(2)(3)(4, 5)()).toBe(15)
    expect(curriedAdd(1)(2)(3, 4, 5)()).toBe(15)
    expect(curriedAdd(1)(2, 3, 4, 5)()).toBe(15)
})