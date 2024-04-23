const makeNewCharacter = () => {
    console.log("this area work for creating character")

    let justClosed = true
    return justClosed;
}


let isClosed = false;

const showModal = (id) => {
    
    if(id == "file" && isClosed == false){
        console.log("in",id,isClosed)
        document.getElementById("character-modal").style.display = "block";

        document.getElementById("close_box").onclick = () => {
            isClosed = hideModal;
            console.log("finished" + isClosed);
            return;
        };

        document.getElementById("create-character").onclick = () =>{
            isClosed = makeNewCharacter;
            return;
        }



    }else if(id == "file" && isClosed == true){
        console.log("in",id,isClosed)
        document.getElementById("character-modal").style.display = "none";
        return;
    }


/*
    if(id == "delete"){
        console.log("in",id)
        document.getElementById("delete-modal").style.display = "block";
    }
    else{
        return;
    }    
*/
};

const hideModal = () => {
    console.log("say hello")
    document.getElementById("delete-modal").style.display = "none";
    document.getElementById("character-modal").style.display = "none";

    let justClosed = true

    return justClosed;

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



