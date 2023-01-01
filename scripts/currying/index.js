// fn參數確定
exports.curry = (fn) => (
    curried = (...args) => (
        args.length >= fn.length
            ? fn(...args)
            : (...arg) => curried(...args, ...arg)
    )
)

// fn參數不確定
exports.currying = (fn) => {
    let records = []
    
    return curried = (...args) => {
        if(args.length) {
            records.push(...args)
            return curried
        } else {
            const res = fn(...records)
            records = []
            return res
        }
    }
}