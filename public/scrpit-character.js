
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

    console.log("in the div area")
    characterInDiv(document.getElementById("character-place"));
    characterInDiv(document.getElementById("character-delete-place"));
    characterInDiv(document.getElementById("character-lvl-place"));

}


const characterInDiv = async(place) => {
    let Characters = await getCharacters();

    Characters.forEach((character)=>{

        console.log(character);

        const place1 = place

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
        if(place == document.getElementById("character-place")){
            button.id = "display_character";
            button.innerHTML = "Display Character"
            button.onclick = populateCharacter.bind(this, character);
            button.setAttribute("name", character._id);
        }

        else if(place == document.getElementById("character-delete-place")){
            button.id = "delete_character";
            button.innerHTML = "Delete Character"
            button.onclick = deleteCharacter.bind(this, character);
            button.setAttribute("name", character._id);
        }

        else if(place == document.getElementById("character-lvl-place")){
            button.id = "lvl_character";
            button.innerHTML = "Level Up"
            button.onclick = lvlCharacter.bind(this, character);
            button.setAttribute("name", character._id);
        }
        

        section03.append(button);

        section03.id = "display";
        section03.classList.add("coll1of3");

        div.append(section01);
        div.append(section02);
        div.append(section03);

        place1.append(div);
    });


};

const populateFromSubmitCharacter = async() => {
    console.log("larger area where stats are displayed")
    

    let Characters = await getCharacters();

    console.log(Characters.length)
    console.log(Characters[Characters.length])

    let char_length = Characters.length;

    Characters.forEach(async(char)=>{
        if (char_length == 1){

            const name = document.getElementById("replace_name");
            name.innerHTML = char.character_name
            const cls = document.getElementById("replace_class");
            cls.innerHTML = char.character_class;
            const level = document.getElementById("replace_level");
            level.innerHTML = char.character_lvl;
            console.log(level.innerHTML);
            const initiative = document.getElementById("replace_init");
            initiative.innerHTML = modDetect(char.character_dex);
            const hp = document.getElementById("replace_hp");
            hp.innerHTML = char.character_hp;
            const speed = document.getElementById("replace_speed");
            speed.innerHTML = "30"
            const hd = document.getElementById("replace_hd");
            const hitDice = await checkClass(char.character_class);
            hd.innerHTML = char.character_lvl + "d" + hitDice;
            const ac = document.getElementById("replace_ac");
            ac.innerHTML = 10 + modDetect(char.character_dex)
            const prof = document.getElementById("replace_prof");
            prof.innerHTML = "+ " + await checkProfLvl(char.character_lvl)
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
            const perception = document.getElementById("preception");
            const survival = document.getElementById("survival");
            const deception = document.getElementById("decep");
            const intimidation = document.getElementById("intim");
            const performance = document.getElementById("perform");
            const persuasion = document.getElementById("persuasion");


            const profsArray = [
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
            ];

            const profsNumArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

            let profs = []

            console.log(char.character_prof[0]);
            profs= char.character_prof[0].split(",")

            console.log(profs);
            console.log(profsArray);



            profsNumArray.forEach((prof)=>{
                console.log(prof);
                for(let i = 1; i < profsNumArray.length+1; i++){
                    console.log(prof, i, profsNumArray[i-1],profsArray[i-1])
                    if(prof == profsNumArray[i-1]){
                        //console.log(profsArray[i], profsNumArray[i])
                        profsArray[i-1].innerHTML = whichProf(i,char.character_str, char.character_dex, char.character_int, char.character_wis, char.character_cha);
                    }else{
                        console.log("no match for text area2");
                    }
                }
                profs.forEach(async(myProf)=>{
                    console.log(myProf);
                    if(myProf == prof){
                        console.log(myProf + " and "+ prof + " are a match");
                        for(let i = 1; i < profsNumArray.length+1; i++){
                            console.log(prof, i, profsNumArray[i-1], profsArray[i-1], checkProfLvl(char.character_lvl))
                            if(prof == profsNumArray[i-1]){
                                //console.log(profsArray[i], profsNumArray[i])
                                profsArray[i-1].innerHTML = whichProf(i,char.character_str, char.character_dex, char.character_int, char.character_wis, char.character_cha) + await checkProfLvl(char.character_lvl);
                                return;
                            }else{
                                console.log("no match for text area1");
                            }
                        }
                    }else{
                        console.log("no match");
                    }
                })
                

            })
        }else{
            char_length = char_length - 1;
            return;
        }
    })

}

const populateCharacter = async(character) => {

    let Characters = await getCharacters();

    Characters.forEach(async(char)=>{
        if (char._id == character._id){

            const name = document.getElementById("replace_name");
            name.innerHTML = char.character_name
            const cls = document.getElementById("replace_class");
            cls.innerHTML = char.character_class;
            const level = document.getElementById("replace_level");
            level.innerHTML = char.character_lvl;
            const initiative = document.getElementById("replace_init");
            initiative.innerHTML = modDetect(char.character_dex);
            const hp = document.getElementById("replace_hp");
            hp.innerHTML = char.character_hp;
            const speed = document.getElementById("replace_speed");
            speed.innerHTML = "30"
            const hd = document.getElementById("replace_hd");
            const hitDice = await checkClass(char.character_class);
            hd.innerHTML = char.character_lvl + "d" + hitDice;
            const ac = document.getElementById("replace_ac");
            ac.innerHTML = 10 + modDetect(char.character_dex)
            const prof = document.getElementById("replace_prof");
            prof.innerHTML = "+ " + await checkProfLvl(char.character_lvl)
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
            const perception = document.getElementById("preception");
            const survival = document.getElementById("survival");
            const deception = document.getElementById("decep");
            const intimidation = document.getElementById("intim");
            const performance = document.getElementById("perform");
            const persuasion = document.getElementById("persuasion");


            const profsArray = [
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
            ];

            const profsNumArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

            let profs = []

            console.log(char.character_prof[0]);
            profs= char.character_prof[0].split(",")

            console.log(profs);
            console.log(profsArray);



            profsNumArray.forEach((prof)=>{
                console.log(prof);
                for(let i = 1; i < profsNumArray.length+1; i++){
                    console.log(prof, i, profsNumArray[i-1],profsArray[i-1])
                    if(prof == profsNumArray[i-1]){
                        //console.log(profsArray[i], profsNumArray[i])
                        profsArray[i-1].innerHTML = whichProf(i,char.character_str, char.character_dex, char.character_int, char.character_wis, char.character_cha);
                    }else{
                        console.log("no match for text area2");
                    }
                }
                profs.forEach(async(myProf)=>{
                    console.log(myProf);
                    if(myProf == prof){
                        console.log(myProf + " and "+ prof + " are a match");
                        for(let i = 1; i < profsNumArray.length+1; i++){
                            console.log(prof, i, profsNumArray[i-1], profsArray[i-1], checkProfLvl(char.character_lvl))
                            if(prof == profsNumArray[i-1]){
                                //console.log(profsArray[i], profsNumArray[i])
                                profsArray[i-1].innerHTML = whichProf(i,char.character_str, char.character_dex, char.character_int, char.character_wis, char.character_cha) + await checkProfLvl(char.character_lvl);
                                return;
                            }else{
                                console.log("no match for text area1");
                            }
                        }
                    }else{
                        console.log("no match");
                    }
                })
                

            })
        }else{
            char_length = char_length - 1;
            return;
        }
    })
    hideModal();
}

const lvlCharacter = async(character) =>{

    let Characters = await getCharacters();

    Characters.forEach(async(char)=>{
        if(character._id == char._id){
            const form = document.getElementById("character-maker-form");

            form._id.value = char._id;
            form.character_name.value = char.character_name;
            form.character_class.value = char.character_class;
            form.character_race.value = char.character_race;
            form.character_str.value = char.character_str;
            form.character_dex.value = char.character_dex;
            form.character_con.value = char.character_con;
            form.character_int.value = char.character_int;
            form.character_wis.value = char.character_wis;
            form.character_cha.value = char.character_cha;
            form.charcater_prof.value = char.character_prof;

            form.character_hp.value = char.character_hp + ( checkClassHp(char.character_class[0], char.character_con[0]) / 2);
            form.character_lvl.value = char.character_lvl[0] + 1;


            const formData = new FormData(form);
            let response;

            console.log(...formData)

            response = await fetch(`/api/characters/${form._id.value}`,{
                method:"PUT",
                body:formData
            });

            if (response.status != 200) {
                console.log("Error adding / editing data");
                document.getElementById("character-form-submit").innerHTML = "Did you forget Something? Try Again";
            }

            await response.json();
            resetForm();
            hideModal();
            createCharacter();
            populateCharacter(char._id);


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
    let hp = await checkClassHp(formData.get("character_class"), formData.get("character_con"));
    formData.delete("character_hp");
    formData.append("character_hp", hp);


    console.log(hp.value)

    console.log(...formData);
    console.log(formData.length);

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
        document.getElementById("character-form-submit").innerHTML = "Did you forget Something? Try Again";
    }

    await response.json();
    resetForm();
    hideModal();
    createCharacter();
    populateFromSubmitCharacter();


}

const resetForm = () => {
    const form = document.getElementById("character-maker-form");
    form.reset();
};

const deleteCharacter = async(character)=> {
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
    document.getElementById("character-place").innerHTML = ""
    document.getElementById("character-delete-place").innerHTML = ""
    document.getElementById("character-lvl-place").innerHTML = ""
    document.getElementById("rest-place").innerHTML = ""
    createCharacter();
    hideModal();
    //populateCharacter();
};

const whichProf = (prof,str,dex,int,wis,cha) => {
    console.log(prof)
    
    if(prof == 1){
        console.log(prof + str)
        return modDetect(str);
    }else if(prof <=4 && prof >=2){
        console.log(prof + dex)
        return modDetect(dex);
    }else if(prof <=9 && prof >=5){
        console.log(prof + int)
        return modDetect(int);
    }else if(prof <=14 && prof >=10){
        console.log(prof + wis)
        return modDetect(wis);
    }else if(prof <=18 && prof >=15){
        console.log(prof + cha)
        return modDetect(cha);
    }else{
        return 0;
    }

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

const checkProfLvl = async(lvl) => {
    if(lvl <= 4 && lvl >= 1){
        return 2;
    }else if(lvl <= 8 && lvl >= 5){
        return 3;
    }else if(lvl <= 12 && lvl >= 9){
        return 4;
    }else if(lvl <= 16 && lvl >= 13){
        return 5;
    }else if(lvl <= 20 && lvl >= 17){
        return 6;
    }else if(lvl > 20){
        return 6;
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
    modalOpen = false;
}

const makeNewCharacter = () => {
    console.log("this area work for creating character")
    document.getElementById("character-modal").classList.remove("show-hide");
    document.getElementById("character-crafter-modal").classList.add("show-hide");
}

let modalOpen = false;
let hasBeenClicked = false

document.getElementById("file").onclick = function(){
    
    if(hasBeenClicked == false){
        hasBeenClicked = true;
        modalOpen = true;
        showModal("file",hasBeenClicked);
    }
    else if(hasBeenClicked == true && modalOpen == false){
        hasBeenClicked = false;
        return;
    }else if(hasBeenClicked == true && modalOpen == true){
        return;
    }
    
}
document.getElementById("delete").onclick = function(){

    if(hasBeenClicked == false){
        hasBeenClicked = true;
        modalOpen = true;
        showModal("delete",hasBeenClicked);
    }
    else if(hasBeenClicked == true && modalOpen == false){
        hasBeenClicked = false;
        return;
    }else if(hasBeenClicked == true && modalOpen == true){
        return;
    }
}
document.getElementById("rest").onclick = function(){
    if(hasBeenClicked == false){
        hasBeenClicked = true;
        modalOpen = true;
        showModal("rest",hasBeenClicked);
    }
    else if(hasBeenClicked == true && modalOpen == false){
        hasBeenClicked = false;
        return;
    }else if(hasBeenClicked == true && modalOpen == true){
        return;
    }
    
}
document.getElementById("level-up").onclick = function(){
    if(hasBeenClicked == false){
        hasBeenClicked = true;
        modalOpen = true;
        showModal("level-up",hasBeenClicked);
    }
    else if(hasBeenClicked == true && modalOpen == false){
        hasBeenClicked = false;
        return;
    }else if(hasBeenClicked == true && modalOpen == true){
        return;
    }

}

document.getElementById("character-form-submit").onclick = submitCharacterForm;



window.onload = () => {
    createCharacter();
}