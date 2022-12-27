const debounce = (callback, cd = 100) => {
    let timer = null
    return (...args) => {
        if(timer) clearTimeout(timer)

        timer = setTimeout(() => {
            callback(args)
        }, cd)
    }
}

module.exports = debounce