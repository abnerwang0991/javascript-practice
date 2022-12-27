const throttle = (callback, cd = 100) => {
    let timer = null
    return (...args) => {
        if(timer) return
        timer = setTimeout(() => {
            callback(args)
            timer = null
        }, cd);
    }
}

module.exports = throttle