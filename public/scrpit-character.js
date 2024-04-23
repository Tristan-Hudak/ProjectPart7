
const getCharacters = async() => {
    try {
        const response = await fetch("api/characters/");
        return await response.json();
    }
    catch(error) {
        console.log(error)
    }
};

const createCharacter = async() => {

    let Characters = await getCharacters();

    Characters.forEach((character)=>{

        const place = document.getElementById("character-place")

        const div = document.createElement("div");
        div.id = "one-character";
        div.classList.add("flex-box");

        const section01 = document.createElement("section");
        section01.innerHTML = "Name: " + character.character_name;
        section01.id = "name-area";
        section01.classList.add("coll1of3");
        const section02 = document.createElement("section");
        section02.innerHTML = "Class: " + character.character_class + character.character_lvl; 
        section02.id = "class-area";
        section02.classList.add("coll1of3");
        const section03 = document.createElement("section");
        const button = document.createElement("button");

        button.id = "display_character";
        button.innerHTML = "Display Character"
        button.setAttribute("name", character._id);

        section03.append(button);

        section03.id = "display";
        section03.classList.add("coll1of3");

        div.append(section01);
        div.append(section02);
        div.append(section03);

        place.append(div)

    });

}



const submitCharacterForm = async(e) => {
    e.preventDefault();
    const form = document.getElementById("character-maker-form");

    const formData = new FormData(form);
    let response;

    const prof = formData.getAll("character_prof");
    formData.delete("character_prof");
    const selectProf = prof;
    formData.append("character_prof", selectProf);
    const lvl = 1;
    formData.delete("character_lvl");
    formData.append("character_lvl", lvl);
    let hp =  checkClass(formData.get("character_class"), formData.get("character_con"));
    formData.delete("character_hp");
    formData.append("character_hp", hp);


    console.log(hp)

    console.log(...formData);

    if (form._id.value.trim() == "") {
        console.log("in post");
        response = await fetch("/api/characters", {
            method: "POST",
            body: formData,
        });
    } else {
        //put request
        console.log("in put");
        response = await fetch(`/api/characters/${form._id.value}`,{
            method:"PUT",
            body:formData
        });
    }

    if (response.status != 200) {
        console.log("Error adding / editing data");
    }

    await response.json();
    resetForm();
    hideModal();
    createCharacter();


}

const resetForm = () => {
    const form = document.getElementById("character-maker-form");
    form.reset();
};

const deleteNote = async(character)=> {
    console.log(character._id);
    let response = await fetch(`/api/character/${character._id}`, {
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
    hideModal();
    //populateCharacter();
};

const collectFour = async(prof) => {
    let prof4 = []

    for(let i=0; i < 4; i++){
        console.log(prof[i])
        prof4[i] = prof[i];
    }

    return prof4;

}

const modDetect = (thing) =>{
    let value = 0;

    if(thing == 0 || thing == 1){
        value = -5;
    }else if(thing == 2 || thing == 3){
        value = -4;
    }else if(thing == 4 || thing == 5){
        value = -3;
    }else if(thing == 6 || thing == 7){
        value = -2;
    }else if(thing == 8 || thing == 9){
        value = -1;
    }else if(thing == 10 || thing == 11){
        value = 0;
    }else if(thing == 12 || thing == 13){
        value = 1;
    }else if(thing == 14 || thing == 15){
        value = 2;
    }else if(thing == 16 || thing == 17){
        value = 3;
    }else if(thing == 18 || thing == 19){
        value = 4;
    }else if(thing == 20 || thing == 21){
        value = 5;
    }

    return value;
}


const checkClass = async(cls, con) => {
    console.log(cls, con)

    const value = modDetect(con)

    if(cls == "fighter"){
        return 10+value;

    }else if(cls == "cleric"){
        return 8+value;

    }else if(cls == "wizard"){
        return 6+value;
    }else {
        return value;
    }

}




const showModal = (id,clicked) => {
    
    //create

    if(id == "file"){
        console.log("in",id, clicked)
        

        document.getElementById("close_box").onclick = () => {
            hideModal();
            return;
        };
        document.getElementById("close_box_crafter").onclick = () => {
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
    document.getElementById("character-crafter-modal").classList.remove("show-hide");
    document.getElementById("lvl-modal").classList.remove("show-hide");
    document.getElementById("rest-modal").classList.remove("show-hide");
}

const makeNewCharacter = () => {
    console.log("this area work for creating character")
    document.getElementById("character-modal").classList.remove("show-hide");
    document.getElementById("character-crafter-modal").classList.add("show-hide");
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

document.getElementById("character-form-submit").onclick = submitCharacterForm;


