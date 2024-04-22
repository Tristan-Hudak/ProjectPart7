const getNotes = async() => {
    //const url = "https://tristan-hudak.github.io/projects/part6/JSON/item-shop.json";

    try {
        const response = await fetch("api/note/");
        return await response.json();
    }
    catch(error) {
        console.log(error)
    }
};


const createNotes = async() => {

    let Notes = await getNotes();

    Notes.forEach((note)=>{

        const place = document.getElementById("notes-done")

        const div = document.createElement("div");
        div.id = "one-note";

        const section01 = document.createElement("section");
        const section02 = document.createElement("section");
        const section03 = document.createElement("section");
        const section04 = document.createElement("section");

        section01.classList.add("coll1of3");
        section01.id = "title";
        section02.classList.add("coll1of3");
        section01.id = "category";
        section03.classList.add("coll1of3");
        section01.id = "time";
        section04.classList.add("coll1of3");
        section01.id = "ed-del";

        section01.append("Title: "+note.note_name)
        section02.append("Note Category: "+note.note_category)


        const currentDate = new Date();
        const timestamp = currentDate.getDate() + "/" + currentDate.getHours() + "/" + currentDate.getMinutes() + "." + currentDate.getSeconds();
        section03.append("Last edited:"+timestamp)

        const eLink = document.createElement("span");
        eLink.innerHTML = "&#9998;";
        eLink.id = "edit-note";
        eLink.setAttribute("name", note._id);
        eLink.onclick = showNoteInForm;

        const dLink = document.createElement("span");
        dLink.innerHTML = "&#9249;";
        dLink.id = "delete-note";
        dLink.setAttribute("name", note._id);
        dLink.onclick = deleteNote.bind(this, note);

        section04.append(eLink);
        section04.append(dLink);

        const flexDiv = document.createElement("div");
        flexDiv.classList.add("flex-box");

        flexDiv.append(section01);
        flexDiv.append(section02);
        flexDiv.append(section03);
        flexDiv.append(section04);

        const p = document.createElement("p");

        p.innerHTML = note.note_desc;
        p.id = "text-area-notes"

        div.append(flexDiv);
        div.append(p);
       
        place.append(div);
    });

    const container = document.querySelector("#notes-done");
    const editMatches = container.querySelectorAll(`a[id^="edit-note"]`);

    editMatches.forEach((span)=>{
        span.onclick = showNoteInForm;
        //console.log(span.getAttribute("name"))
    })


}


const submitNotesForm = async (e) => {
    e.preventDefault();
    const form = document.getElementById("add-notes-form");
    
    const formData = new FormData(form);
    let response;
    

    console.log(...formData);

    //add request
    if (form._id.value.trim() == "") {
        console.log("in post");
        response = await fetch("/api/note", {
            method: "POST",
            body: formData,
        });
    } else {
        //put request
        console.log("in put");
        response = await fetch(`/api/note/${form._id.value}`,{
            method:"PUT",
            body:formData
        });
    }
    //successfully got data from server
    if (response.status != 200) {
        console.log("Error adding / editing data");
    }

    await response.json();
    resetForm();
    document.getElementById("notes-done").innerHTML = ""
    createNotes();
}

const resetForm = () => {
    const form = document.getElementById("add-notes-form");
    form.reset();
};


const showNoteInForm = async(e) => {
    console.log("hello");
    let notes = await getNotes();

    notes.forEach((note) => {
        if (e.target.getAttribute("name") == note._id){
            const form = document.getElementById("add-notes-form");

            form._id.value = note._id;
            form.note_name.value = note.note_name;
            form.note_category = nc(note.note_category)
            form.note_desc.value = note.note_desc;
        }
    })
}

const nc = (cat) => {
    console.log(cat);
    const selector = document.getElementById("note_category");
    //console.log(selector)
    selector.value = cat;
}

const deleteNote = async(note)=> {
    let response = await fetch(`/api/note/${note._id}`, {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json;charset=utf-8"
      }
    });
  
    if(response.status != 200){
      console.log("Error deleting");
      return;
    }
  
    await response.json();
    resetForm();
    createNotes();
};


document.getElementById("add-notes-form").onsubmit = submitNotesForm;


window.onload = () => {
    createNotes();
};