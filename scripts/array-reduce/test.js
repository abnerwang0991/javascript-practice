const Array = require('./index')

test('array reduce', () => {
    const result = ['a', 'b', 'b', 'a', 'c']
        .customReduce((pre, curr) => {
            pre[curr] = (pre[curr] || 0) + 1
            
            return pre
        }, {})

    expect(result).toEqual({a: 2, b: 2, c: 1})
})