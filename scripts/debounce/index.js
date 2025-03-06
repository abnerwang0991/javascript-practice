const debounce = (callback, cd = 100) => {
    let timer = null
    return function(...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this.args)
        }, cd)
    }
}

module.exports = debounce
