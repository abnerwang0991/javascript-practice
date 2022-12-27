const flatten = require('./index')

test('flatten shallow', () => {
    expect(flatten([1, 2, [3, [4, [5, 6]]]])).toEqual([1, 2, 3, [4, [5, 6]]])
})

test('flatten deep', () => {
    expect(flatten([1, 2, [3, [4, [5, 6]]]], false)).toEqual([1, 2, 3, 4, 5, 6])
})