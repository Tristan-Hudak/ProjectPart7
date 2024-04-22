
const showModal = (id) => {
    if(id == "file"){
        console.log("in",id)
        document.getElementById("character-modal").style.display = "block";
        document.getElementById("character-modal").id = "character-modal-click"
    }
    if(id == "delete"){
        console.log("in",id)
        document.getElementById("delete-modal").style.display = "block";
        document.getElementById("delete-modal").id = "delete-modal-click"
    }
    else{
        return;
    }    

};

const hideModal = () => {
    document.getElementById("delete-modal").style.display = "none";
    document.getElementById("character-modal").style.display = "none";

    document.getElementById("character-modal-click").id = "character-modal"
    document.getElementById("delete-modal-click").id = "delete-modal"
}



document.getElementById("file").onclick = function(){
    showModal("file");
}
document.getElementById("delete").onclick = function(){
    showModal("delete");
}
document.getElementById("rest").onclick = function(){
    showModal("rest");
}
document.getElementById("level-up").onclick = function(){
    showModal("level-up");
}

document.getElementById("close_box").onclick = hideModal();

