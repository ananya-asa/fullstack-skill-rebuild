const fs =require("fs");
const { json } = require("stream/consumers");

function loadNotes(){
    try{
        const data= fs.readFileSync("notes.json","utf-8");
        return JSON.parse(data);

    }
    catch{
      return [];
    }
}

function saveNotes(notes){
    fs.writeFileSync("notes.json",JSON.stringify(notes,null,2));
}

function addNotes(title,body){
 const notes=loadNotes();
 notes.push({title,body});
 saveNotes(notes);
 console.log("Notes added successfully!");
}

function listNotes(){
    const notes=loadNotes();
    console.log("Your notes: ");
    notes.forEach((note,index)=>{
        console.log(`${index+1}. ${note.title} - ${note.body} `);
    })
}

function deleteNote(title){
  let notes=loadNotes();
  const filtered=notes.filter(n=>n.title!=title);

  saveNotes(filtered);
  console.log("Note deleted successfully!!");
}

module.exports={addNotes,listNotes,deleteNote};