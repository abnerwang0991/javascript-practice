const promiseAll = require('./index')

test('promise all resolve', async () => {
    const results = await promiseAll([
        Promise.resolve(60),
        3,
        new Promise(resolve => setTimeout(() => resolve(100), 100))
    ])

    expect(results).toEqual([60, 3, 100])
})

test('promise all', async () => {
    await expect(promiseAll([
        new Promise(resolve => setTimeout(() => resolve(100), 100)),
        6,
        Promise.reject(new Error('e'))
    ])).rejects.toThrow('e')
})