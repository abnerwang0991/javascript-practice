const promiseAll = (array) => {
    if(!Array.isArray(array)) return 

    return new Promise((resolve, reject) => {
        const results = []
        let completion = 0

        array.forEach((item, index) => {
            Promise.resolve(item)
                .then(value => {
                    completion++
                    results[index] = value

                    if(completion === array.length) {
                        resolve(results)
                    }
                })
                .catch(e => reject(e))
        })
    })
}

module.exports = promiseAll