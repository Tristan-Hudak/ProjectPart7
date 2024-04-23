const makeNewCharacter = () => {
    console.log("this area work for creating character")
    document.getElementById("character-modal").classList.remove("show-hide");
}


const showModal = (id,clicked) => {
    
    //create

    if(id == "file"){
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
    }
    

    //delete

    if(id == "delete"){
        console.log("in",id, clicked)

        document.getElementById("delete-modal").classList.add("show-hide");

        document.getElementById("close_box_d").onclick = () => {
            //console.log("do i get in")
            hideModal();
            return;
        };
        //console.log("do i get past")
    }

    //rest

    if(id == "rest"){
        console.log("in",id, clicked)

        document.getElementById("rest-modal").classList.add("show-hide");

        document.getElementById("close_box_r").onclick = () => {
            //console.log("do i get in")
            hideModal();
            return;
        };
        //console.log("do i get past")
    }

    //lvl

    if(id == "level-up"){
        console.log("in",id, clicked)

        document.getElementById("lvl-modal").classList.add("show-hide");

        document.getElementById("close_box_lvl").onclick = () => {
            hideModal();
            return;
        };
        //console.log("do i get past")
    }

    //else

    else{
        return;
    }    

};

const hideModal = () => {
    console.log("say hello")
    document.getElementById("delete-modal").classList.remove("show-hide");
    document.getElementById("character-modal").classList.remove("show-hide");
    document.getElementById("lvl-modal").classList.remove("show-hide");
    document.getElementById("rest-modal").classList.remove("show-hide");

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



