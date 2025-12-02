const args=process.argv


const command=args[2];

const { deleteNote } = require("./notes");
const {addNotes}= require("./notes");
const { listNotes } = require("./notes");

if(command=="add"){
    const title=args[3];
    const body=args[4];

addNotes(title,body);
}
else if(command=="list"){
    listNotes();
}
else if(command=="delete"){
    const title=args[3];
    deleteNote(title);
}