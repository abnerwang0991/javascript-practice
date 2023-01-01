Array.prototype.customReduce = function(callback, initialValue) {
    let init = initialValue || this[0]
    const start = initialValue ? 0 : 1
    for(let i = start; i < this.length; i++) {
        init = callback(init, this[i], i, this)
    }

    return init
}

module.exports = Array