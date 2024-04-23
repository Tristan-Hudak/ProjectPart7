const makeNewCharacter = () => {
    console.log("this area work for creating character")
    document.getElementById("character-modal").classList.remove("show-hide");
}




const showModal = (id,clicked) => {
    
    //create

    console.log("in",id, clicked)
    

    document.getElementById("close_box").onclick = () => {
        hideModal;
        return;
    };

    document.getElementById("create-character").onclick = () =>{
        makeNewCharacter;
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
        showModal("file",clicked);
    }
    else if(hasBeenClicked == true){
        return;
    }
    
}
document.getElementById("delete").onclick = function(){

    if(hasBeenClicked == false){
        hasBeenClicked = true;
        showModal("delete",clicked);
    }
    else if(hasBeenClicked == true){
        return;
    }
}
document.getElementById("rest").onclick = function(){
    if(hasBeenClicked == false){
        hasBeenClicked = true;
        showModal("rest",clicked);
    }
    else if(hasBeenClicked == true){
        return;
    }
    
}
document.getElementById("level-up").onclick = function(){
    if(hasBeenClicked == false){
        hasBeenClicked = true;
        showModal("level-up",clicked);
    }
    else if(hasBeenClicked == true){
        return;
    }

}



