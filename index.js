console.log("i am Note");
showNotes();
let addtxt = document.getElementById("addtxt");
addtxt.addEventListener("click", function (e) {


    let titleTxt = document.getElementById("titleTxt");
    let writetxt = document.getElementById("writetxt");





    let notes = localStorage.getItem("note");

    if (notes == null) {

        notesObj = [];

    }

    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push([titleTxt.value, writetxt.value]);

    localStorage.setItem("note", JSON.stringify(notesObj));

    writetxt.value = "";
    titleTxt.value = "";
    console.log(notesObj)
    showNotes();
})








function showNotes() {
    let notes = localStorage.getItem("note");

    if (notes == null) {

        notesObj = [];

    }

    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {


        html += `
        <div class="box">
      
         <h3> ${element[0]}</h3>
        <p>${element[1]} 

        </p>
        <button id="${index}"  onclick="delNote(this.id)" class="delete">Delete</button>
    </div>
        `

    });


    let noteShow = document.getElementById("notes");

    if (notesObj.length != 0) {
        noteShow.innerHTML = html;

        // console.log(noteShow)
    }

    else {
        noteShow.innerHTML = `nothing to show , write  your notes `
    }

};









function delNote(index) {
    let notes = localStorage.getItem("note");

    if (notes == null) {

        notesObj = [];

    }

    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 3);

    localStorage.setItem("note", JSON.stringify(notesObj));


    showNotes();
}