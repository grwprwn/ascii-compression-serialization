const serialize = dataSet => {
    let outData = ''
    for (const element of dataSet) {
        outData += String.fromCharCode(parseInt(element))
    }
    return outData
}

const deserialize = dataSet => {
    let outData = []
    for (let i = 0; i < dataSet.length; i++) {
        outData = outData.concat(dataSet.charCodeAt(i))
    }
    return outData
}


module.exports = { serialize, deserialize }