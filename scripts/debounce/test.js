const debounce = require('./index')

test('debounce', async () => {
    const fn = jest.fn();
    const testDebounce = debounce(fn)
    testDebounce()
    testDebounce()
    testDebounce()
    await new Promise(r => setTimeout(r, 100))
    expect(fn).toHaveBeenCalledTimes(1)
})