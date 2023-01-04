// function 
exports.cacheDecorator = (fn) => {
    const cache = new Map()

    return (val) => {
        if(cache.has(val)) return cache.get(val)

        const result = fn(val)
        cache.set(val, result)

        return val
    }
}

// object method
exports.cachingDecorator = (fn) => {
    const cache = new Map()

    return function(val) {
        if(cache.has(val)) return cache.get(val)

        const result = fn.call(this, val)
        cache.set(val, result)

        return val
    }
}