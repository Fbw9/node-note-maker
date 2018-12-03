console.log('Starting app');



const yargs = require('yargs')

const notes = require('./notes');

const argv = yargs.argv
const command = argv._[0]
console.log('Command: ', command);
console.log('Yargs:', argv)

if (command === "add") {
    let note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note created')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    } else {
        console.log('Note title already taken')
    }
} else if (command === "list") {
    notes.getAll()
} else if (command === "remove") {
    notes.removeNote(argv.title)
} else if (command === "read") {
    notes.getNote(argv.title)
} else {
    console.log('command not recognized')
}