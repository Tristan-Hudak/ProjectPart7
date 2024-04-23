
const showModal = (id) => {
    if(id == "file"){
        console.log("in",id)
        document.getElementById("character-modal").style.display = "block";

    }
    if(id == "delete"){
        console.log("in",id)
        document.getElementById("delete-modal").style.display = "block";
    }
    else{
        return;
    }    

};

const hideModal = () => {
    console.log("say hello")
    document.getElementById("delete-modal").style.display = "none";
    document.getElementById("character-modal").style.display = "none";

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

document.getElementById("create-character").onclick = hideModal;

