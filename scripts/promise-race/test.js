const promiseRace = require('./index')

test('primise race resolve', async () => {
    const result = await promiseRace([
        new Promise(resolve => setTimeout(() => resolve(100), 100)),
        new Promise(resolve => setTimeout(() => resolve(600), 600)),
    ])

    expect(result).toBe(100)
})

test('primise race', async () => {
    await expect(promiseRace([
        new Promise(resolve => setTimeout(() => resolve(100), 300)),
        new Promise(resolve => setTimeout(() => resolve(600), 600)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error('100')), 100)),
    ])).rejects.toThrow('100')

})