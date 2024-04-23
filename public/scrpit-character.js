const makeNewCharacter = () => {
    console.log("this area work for creating character")
    document.getElementById("character-modal").classList.remove("show-hide");
}




const showModal = (id) => {
    
    //create

    console.log("in",id)
    document.getElementById("character-modal").classList.add("show-hide");

    document.getElementById("close_box").onclick = () => {
        hideModal;
        return;
    };

    document.getElementById("create-character").onclick = () =>{
        makeNewCharacter;
        return;
    }

    //delete

    if(id == "delete"){
        console.log("in",id)
        document.getElementById("delete-modal").classList.add("show-hide");

        document.getElementById("close_box").onclick = () => {
            hideModal;
            return;
        };
    }
    else{
        return;
    }    

};

const hideModal = () => {
    console.log("say hello")
    document.getElementById("delete-modal").classList.remove("show-hide");
    document.getElementById("character-modal").classList.remove("show-hide");

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



