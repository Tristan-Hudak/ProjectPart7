const makeNewCharacter = () => {
    console.log("this area work for creating character")
    return;
}



const showModal = (id) => {
    if(id == "file"){
        console.log("in",id)
        document.getElementById("character-modal").style.display = "block";

        document.getElementById("close_box").onclick = hideModal;
        document.getElementById("create-character").onclick = makeNewCharacter;
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

    return;

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



