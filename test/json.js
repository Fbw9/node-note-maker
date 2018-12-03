// const object = {
//     name: "Ryan"
// }
// const great = JSON.stringify(object)
// console.log(great)
// console.log(typeof great)

// const jsontest = '{"name":"Ryan", "age": 27}'
// const converted = JSON.parse(jsontest)
// console.log(converted)
// console.log(typeof converted)

const fs = require('fs');

const testNote = {
    title: 'Testing',
    body: 'testing testing 123'
}

const noteString = JSON.stringify(testNote)
fs.writeFileSync('notes.json', noteString)

const noteString2 = fs.readFileSync('notes.json')
const note = JSON.parse(noteString2)
console.log(note.title)
console.log(typeof note)
