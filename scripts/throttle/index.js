const throttle = (callback, cd = 100) => {
    let timer = null
    return function(...args) => {
        if(timer) return
        callback.apply(this, args)
        timer = setTimeout(() => {
            timer = null
        }, cd);
    }
}

module.exports = throttle
