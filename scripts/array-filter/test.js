const Array = require('./index')

test('array filter', () => {
    expect([1, 2, 3].customFilter((elm, i) => elm === i + 1)).toEqual([1, 2, 3])
})