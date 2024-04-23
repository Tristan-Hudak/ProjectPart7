
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

        const place1 = document.getElementById("character-place")
        const place2 = document.getElementById("character-delete-place")

        const div = document.createElement("div");
        div.id = "one-character";
        div.classList.add("flex-box");

        const section01 = document.createElement("section");
        section01.innerHTML = "Name: " + character.character_name;
        section01.id = "name-area";
        section01.classList.add("coll1of3");
        const section02 = document.createElement("section");
        section02.innerHTML = "Class: " + character.character_class + " " +character.character_lvl; 
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

        place1.append(div)
        place2.append(div)

    });

}

const populateCharacter = async(id) => {

    let Characters = await getCharacters();

    Characters.forEach((char)=>{
        if (char._id == id){

            const name = document.getElementById("replace_name");
            name.innerHTML = char.character_name
            const level = document.getElementById("replace_level");
            level.html = char.character_lvl
            const initiative = document.getElementById("replace_init");
            initiative.innerHTML = modDetect(char.character_dex);
            const hp = document.getElementById("replace_hp");
            hp.innerHTML = char.hp
            const speed = document.getElementById("replace_speed");
            speed.innerHTML = "30"
            const hd = document.getElementById("replace_hd");
            hd.innerHTML = char.character_lvl + "d" + checkClass(char.character_class);
            const ac = document.getElementById("replace_ac");
            ac.innerHTML = modDetect(char.character_dex)
            const prof = document.getElementById("replace_prof");
            prof.innerHTML = char.character_prof
            //str
            const strScore = document.getElementById("s_score");
            strScore.innerHTML = char.character_str;
            const strMod = document.getElementById("s_mod");
            strMod.innerHTML = modDetect(char.character_str)
            const strSave = document.getElementById("s_save");
            strSave.innerHTML = modDetect(char.character_str);
            const psm = document.getElementById("prof_str_mod");
            psm.innerHTML = modDetect(char.character_str);
            //dex
            const dexScore = document.getElementById("d_score");
            dexScore.innerHTML = char.character_dex;
            const dexMod = document.getElementById("d_mod");
            dexMod.innerHTML = modDetect(char.character_dex)
            const dexSave = document.getElementById("d_save");
            dexSave.innerHTML = modDetect(char.character_dex);
            const pdm = document.getElementById("prof_dex_mod");
            pdm.innerHTML = modDetect(char.character_dex);
            //con
            const conScore = document.getElementById("c_score");
            conScore.innerHTML = char.character_con;
            const conMod = document.getElementById("c_mod");
            conMod.innerHTML = modDetect(char.character_con)
            const conSave = document.getElementById("c_save");
            conSave.innerHTML = modDetect(char.character_con);       
            //int
            const intScore = document.getElementById("i_score");
            intScore.innerHTML = char.character_int;
            const intMod = document.getElementById("i_mod");
            intMod.innerHTML = modDetect(char.character_int)
            const intSave = document.getElementById("i_save");
            intSave.innerHTML = modDetect(char.character_int);
            const pim = document.getElementById("prof_int_mod");
            pim.innerHTML = modDetect(char.character_int);
            //wis
            const wisScore = document.getElementById("w_score");
            wisScore.innerHTML = char.character_wis;
            const wisMod = document.getElementById("w_mod");
            wisMod.innerHTML = modDetect(char.character_wis)
            const wisSave = document.getElementById("w_save");
            wisSave.innerHTML = modDetect(char.character_wis);
            const pwm = document.getElementById("prof_wis_mod");
            pwm.innerHTML = modDetect(char.character_wis);
            //cha
            const chaScore = document.getElementById("cha_score");
            chaScore.innerHTML = char.character_cha;
            const chaMod = document.getElementById("cha_mod");
            chaMod.innerHTML = modDetect(char.character_cha)
            const chaSave = document.getElementById("cha_save");
            chaSave.innerHTML = modDetect(char.character_cha);
            const pcm = document.getElementById("prof_cha_mod");
            pcm.innerHTML = modDetect(char.character_cha);
            
            //profs
            const athletics = document.getElementById("athletics");
            const acrobatics = document.getElementById("acrobatics");
            const slieghtOfHand = document.getElementById("soh");
            const stealth = document.getElementById("stealth");
            const arcana = document.getElementById("arcana");
            const history = document.getElementById("history");
            const investigation = document.getElementById("invest");
            const nature = document.getElementById("nature");
            const religion = document.getElementById("religion");
            const animalHandeling = document.getElementById("animal");
            const insight = document.getElementById("insight");
            const medicine = document.getElementById("medic");
            const perception = document.getElementById("perception");
            const survival = document.getElementById("survival");
            const deception = document.getElementById("decep");
            const intimidation = document.getElementById("intim");
            const performance = document.getElementById("perform");
            const persuasion = document.getElementById("persuasion");


            profsArray[
                athletics,
                acrobatics,
                slieghtOfHand,
                stealth,
                arcana,
                history,
                investigation,
                nature,
                religion,
                animalHandeling,
                insight,
                medicine,
                perception,
                survival,
                deception,
                intimidation,
                performance,
                persuasion
            ]

            console.log(profsArray);




        }else{
            return;
        }
    })

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
    let hp =  checkClassHp(formData.get("character_class"), formData.get("character_con"));
    formData.delete("character_hp");
    formData.append("character_hp", hp.value);


    console.log(hp.value)

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
    createCharacter(formData);


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


const checkClassHp = async(cls, con) => {
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

const checkClass = async(cls) => {

    if(cls == "fighter"){
        return 10

    }else if(cls == "cleric"){
        return 8

    }else if(cls == "wizard"){
        return 6
    }else {
        return 0;
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


