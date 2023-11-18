const { serialize, deserialize } = require('./module.js')
const fs = require('node:fs')
const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const byteSize = str => new Blob([str]).size;

const dataSets = [[], [], [], [], []]
for (let i = 0; i < 50; i++) {
    dataSets[0].push(randomIntFromInterval(1, 9))
}

for (let i = 0; i < 100; i++) {
    dataSets[1].push(randomIntFromInterval(1, 9))
}

for (let i = 0; i < 500; i++) {
    dataSets[2].push(randomIntFromInterval(1, 9))
}

for (let i = 0; i < 1000; i++) {
    dataSets[3].push(randomIntFromInterval(1, 9))
}

for (let i = 1; i < 300; i++) {
    dataSets[4] = dataSets[4].concat([i, i, i])
}

const serializedDataSets = [serialize(dataSets[0]), serialize(dataSets[1]), serialize(dataSets[2]), serialize(dataSets[3]), serialize(dataSets[4])]

let content = 'Я не до конца уверен, что верно понял, какие данные брать для тестов, но допуская, что данные передаются, например через запрос с использованием JSON и изначально они передавались бы в формате "[1, 2, 3]", писал тесты именно так, можно увидеть в файле test.js, и я сравнивал байтовую длину для получения коээфициента\n\n\n'

for (const index in dataSets) {
    content += `DataSet: [${dataSets[index]}]; SerializedDataSet: ${serializedDataSets[index]}; CompressionCoefficient: ${byteSize(serializedDataSets[index]) / byteSize(dataSets[index].join + '[]')};\n`
}

fs.writeFile('test.txt', content, err => {
    if (err) {
        console.error(err)
    }
})