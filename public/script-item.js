
const getItems = async() => {
    //const url = "https://tristan-hudak.github.io/projects/part6/JSON/item-shop.json";

    try {
        const response = await fetch("api/items/");
        return await response.json();
    }
    catch(error) {
        console.log(error)
    }
};

const createItems = async() => {

    let Items = await getItems();

    Items.forEach((item)=>{
        console.log(item.item_category, item.category);

        const category = document.getElementById(whichIsWhich(item.item_category));
        //console.log(category);

        const div = document.createElement("div");
        div.classList.add("item-box")


        //top flexbox

        const section01 = document.createElement("section");
        const section02 = document.createElement("section");
        const section03 = document.createElement("section");
        const img =  document.createElement("img");

        section01.classList.add("coll1of2");
        section02.classList.add("coll1of2");

        img.setAttribute('id',"item-image");

        img.src = item.item_image;

        const eLink = document.createElement("span");
        eLink.innerHTML = "&#9998;";
        eLink.id = "edit-item";
        eLink.setAttribute("name", item._id);
        eLink.onclick = showItemInForm;

        const flexDiv = document.createElement("div");
        flexDiv.classList.add("flex-box")

        section01.append(img);
        section02.append(item.item_category + " Name: " + item.item_name);
        section03.append(eLink);

        flexDiv.append(section01);
        flexDiv.append(section02);
        flexDiv.append(section03);


        //middle flexbox
        const flexDiv2 = document.createElement("div");
        flexDiv2.classList.add("flex-box");

        const section11 = document.createElement("section");
        const section12 = document.createElement("section");


        section11.classList.add("coll1of3");
        section12.classList.add("coll1of3");


        section11.append(item.item_dice_amount + item.item_dice_type);
        section12.append(item.item_damage_type + " Damage");

        flexDiv2.append(section11);
        flexDiv2.append(section12);


        //third row
        const cond_prop =  document.createElement("p");
        const descrip =  document.createElement("p");

        cond_prop.innerHTML ="Properties: " + item.item_properties + " Conditions: " + item.item_conditions;
        descrip.innerHTML = "Description: " + item.item_desc;



        div.append(flexDiv);
        div.append(flexDiv2);
        div.append(cond_prop);
        div.append(descrip);

        //console.log(div);
        

        category.append(div);

    });

    const containerLeft = document.querySelector("#left-box");

    const editMatches = containerLeft.querySelectorAll(`a[id^="edit-item"]`);


    editMatches.forEach((span)=>{
        span.onclick = showItemInForm;
        //console.log(span.getAttribute("name"))
    })



}

const submitCreateItemForm = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form-created-item");
    
    const formData = new FormData(form);
    let response;
    
    const con = formData.getAll("item_conditions");
    const prop = formData.getAll("item_properties")
    //console.log(con , prop, form._id);
    formData.delete("item_conditions");
    formData.delete("item_properties");
    formData.append("item_conditions", con);
    formData.append("item_properties", prop);

    console.log(...formData);
    

    //add request
    if (form._id.value.trim() == "") {
        console.log("in post");
        response = await fetch("/api/items", {
            method: "POST",
            body: formData,
        });
    } else {
        //put request
        console.log("in put");
        response = await fetch(`/api/items/${form._id.value}`,{
            method:"PUT",
            body:formData
        });
    }
    //successfully got data from server
    if (response.status != 200) {
        console.log("Error adding / editing data");
    }

    await response.json();
    resetForm();
    document.getElementById("nav-items-w").innerHTML = "";
    document.getElementById("nav-items-s").innerHTML = "";
    document.getElementById("nav-items-m").innerHTML = "";
    document.getElementById("nav-items-e").innerHTML = "";
    createItems();
}

const showItemInForm = async(e) => {
    console.log("hello");
    let items = await getItems();

    items.forEach((item) => {
        if (e.target.getAttribute("name") == item._id){
            const form = document.getElementById("form-created-item");

            form._id.value = item._id;
            form.item_category = popCat(item.item_category);
            form.item_name.value = item.item_name;
            form.item_damage_type = popDT(item.item_damage_type);
            form.item_properties = popProp(item.item_properties);
            form.item_conditions = popCon(item.item_conditions);
            form.item_dice_amount = popDiceA(item.item_dice_amount);
            form.item_dice_type = popDiceT(item.item_dice_type);
            form.item_image = popImg(item.item_image);
            form.item_desc.value = item.item_desc;
            
        }
    })
}

const popCat = (cat) => {
    console.log(cat);
    const selector = document.getElementById("item-cat");
    console.log(selector)
    selector.value = cat;
}
popDT = (DT) => {
    console.log(DT);
    const selector = document.getElementById("damage-type");
    console.log(selector)
    selector.value = DT;
}
popProp = (props) => {
    var element = document.getElementById('item-properties');
    var values = props;
    console.log(values);
    for (var i = 0; i < element.options.length; i++) {
        element.options[i].selected = values.indexOf(element.options[i].value) >= 0;
    }
}
popCon = (cons) => {
    var element = document.getElementById('item-conditions');
    var values = cons;
    for (var i = 0; i < element.options.length; i++) {
        element.options[i].selected = values.indexOf(element.options[i].value) >= 0;
    }
    
}
popDiceA = (diceA) => {
    console.log(diceA);
    const selector = document.getElementById("hmd");
    console.log(selector)
    selector.value = diceA;
}
popDiceT = (diceT) => {
    console.log(diceT);
    const selector = document.getElementById("dice-type");
    console.log(selector)
    selector.value = diceT;
}
popImg = (img) => {
    console.log(img);
    const selector = document.getElementById("item-img");
    console.log(selector)
    selector.value = img;
}




const resetForm = () => {
    const form = document.getElementById("form-created-item");
    form.reset();
};

const whichIsWhich = (cat) => {

    let theRightOne = "";

    if(cat == "Weapon") {
        theRightOne = "nav-items-w";
        console.log(theRightOne);
    }
    else if (cat == "Spell") {
        theRightOne = "nav-items-s";
        console.log(theRightOne);
    }
    else if (cat == "Wonder") {
        theRightOne = "nav-items-m";
        console.log(theRightOne);
    }
    else if (cat == "Equipment") {
        theRightOne = "nav-items-e";
        console.log(theRightOne);
    }

    console.log(theRightOne);

    return theRightOne;

};


document.getElementById("form-created-item").onsubmit = submitCreateItemForm;

//nav stuff


const showHideNavWepon = () => {
    console.log("in show hide");
    document.getElementById("nav-items-w").classList.toggle("hide-small");
    document.getElementById("pointer1").classList.toggle("down")
};
const showHideNavSpell = () => {
    console.log("in show hide");
    document.getElementById("nav-items-s").classList.toggle("hide-small");
    document.getElementById("pointer2").classList.toggle("down")
};
const showHideNavWItems = () => {
    console.log("in show hide");
    document.getElementById("nav-items-m").classList.toggle("hide-small");
    document.getElementById("pointer3").classList.toggle("down")
};
const showHideNavEquipment = () => {
    console.log("in show hide");
    document.getElementById("nav-items-e").classList.toggle("hide-small");
    document.getElementById("pointer4").classList.toggle("down")
};


//nav stuff
document.getElementById("up-left-box").onclick = showHideNavWepon;
document.getElementById("bot-left-box").onclick = showHideNavSpell;
document.getElementById("up-right-box").onclick = showHideNavWItems;
document.getElementById("bot-right-box").onclick = showHideNavEquipment;

//JSON stuff
window.onload = () => {
    createItems();





};