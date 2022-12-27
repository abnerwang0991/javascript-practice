const throttle = require('./index')

test('throttle', async () => {
    const fn = jest.fn()
    const testThrottle = throttle(fn)
    Array(3).fill().forEach(() => testThrottle())
    await new Promise(r => setTimeout(r, 100))
    expect(fn).toHaveBeenCalledTimes(1)
})

test('throttle', async () => {
    const fn = jest.fn()
    const testThrottle = throttle(fn)
    Array(3).fill().forEach(() => testThrottle())
    await new Promise(r => setTimeout(r, 100))
    Array(3).fill().forEach(() => testThrottle())
    await new Promise(r => setTimeout(r, 100))
    expect(fn).toHaveBeenCalledTimes(2)
})