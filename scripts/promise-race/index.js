const promiseRace = (array) => {
    if(!Array.isArray(array)) return
    return new Promise((resolve, reject) => {
        for(let item of array) {
            Promise.resolve(item).then(val => resolve(val)).catch(e => reject(e))
        }
    })
}

module.exports = promiseRace