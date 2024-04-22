
const showModal = (id) => {
    if(id == "file"){
        console.log("in",id)
        document.getElementById("character-modal").style.display = "block";
    }
    if(id == "delete"){
        console.log("in",id)
        document.getElementById("delete-modal").style.display = "block";
    }
    

};



document.getElementById("file").onclick = showModal("file");
document.getElementById("delete").onclick = showModal("delete");
document.getElementById("rest").onclick = showModal("rest");
document.getElementById("level-up").onclick = showModal("level-up");