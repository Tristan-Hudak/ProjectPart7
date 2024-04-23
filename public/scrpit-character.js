const makeNewCharacter = () => {
    console.log("this area work for creating character")
    document.getElementById("character-modal").classList.remove("show-hide");
}




const showModal = (id,clicked) => {
    
    //create

    console.log("in",id, clicked)
    

    document.getElementById("close_box").onclick = () => {
        hideModal();
        return;
    };

    document.getElementById("create-character").onclick = () =>{
        makeNewCharacter();
        return;
    }

    document.getElementById("character-modal").classList.add("show-hide");

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

let hasBeenClicked = false

document.getElementById("file").onclick = function(){
    
    if(hasBeenClicked == false){
        hasBeenClicked = true;
        showModal("file",hasBeenClicked);
    }
    else if(hasBeenClicked == true){
        hasBeenClicked = false;
        return;
    }
    
}
document.getElementById("delete").onclick = function(){

    if(hasBeenClicked == false){
        hasBeenClicked = true;
        showModal("delete",hasBeenClicked);
    }
    else if(hasBeenClicked == true){
        hasBeenClicked = false;
        return;
    }
}
document.getElementById("rest").onclick = function(){
    if(hasBeenClicked == false){
        hasBeenClicked = true;
        showModal("rest",hasBeenClicked);
    }
    else if(hasBeenClicked == true){
        hasBeenClicked = false;
        return;
    }
    
}
document.getElementById("level-up").onclick = function(){
    if(hasBeenClicked == false){
        hasBeenClicked = true;
        showModal("level-up",hasBeenClicked);
    }
    else if(hasBeenClicked == true){
        hasBeenClicked = false;
        return;
    }

}



