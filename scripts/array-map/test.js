const Array = require('./index')
test('array map', () => {
    expect([1, 2, 3].customMap((elm, i) => elm + i)).toEqual([1, 3, 5])
})