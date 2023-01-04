const {cacheDecorator, cachingDecorator} = require('./index')

test('decorator function', () => {
    let calculate = (val) => val * 3
    calculate = cacheDecorator(calculate)
    calculate(3)
    expect(calculate(3)).toBe(9)
})

test('decorator object method', () => {
    let calculator = {
        multiple: 3,
        calculate(val) {
            return val * this.multiple
        }
    }
    calculator.calculate = cachingDecorator(calculator.calculate)
    calculator.calculate(3)
    expect(calculator.calculate(3)).toBe(9)
})