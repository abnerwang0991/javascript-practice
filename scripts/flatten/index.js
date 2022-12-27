const flatten = (array, shallow = true) => {
    if(shallow) {
        return array.reduce((prev, curr) => (prev.concat(curr)), [])
    }
    while(array.some(elm => Array.isArray(elm))) {
        array = [].concat(...array)
    }

    return array
}

module.exports = flatten