
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
/*
const showItems = async() => {
    //console.log("is work");

    let ItemsJson = await getItems();
    ItemsJson.forEach((item) => {
        let sectionIn = whichIsWhich(item.category);
        const section = document.getElementById(sectionIn)
        //console.log(getJsonItem(item))
        section.append(getJsonItem(item));
    });
    

}

const getJsonItem = (item) => {

    const itemCat = item.category;
    const itemName = item.name;
    const itemImg = item.image;
    const itemAmount = item.amount;
    const itemDice = item.dice;
    const itemType = item.type;
    const itemProperties = item.type;
    
    /*
    const valsArray = getObjectProp(item.values);

    const valAmount = valsArray[0];
    const valDice = valsArray[1];
    const valType = valsArray[2];
    const valProp = valsArray[3];
    

    const div = document.createElement("div");
    div.classList.add("item-box")

    const section01 = document.createElement("section");
    const section02 = document.createElement("section");
    const img =  document.createElement("img");

    section01.classList.add("coll1of2");
    section02.classList.add("coll1of2");

    img.setAttribute('id',"item-image");

    img.src = itemImg;

    const flexDiv = document.createElement("div");
    flexDiv.classList.add("flex-box")

    section01.append(img);
    section02.append(itemCat + " Name: " + itemName);

    flexDiv.append(section01);
    flexDiv.append(section02);

    // second row
    const flexDiv2 = document.createElement("div");
    flexDiv2.classList.add("flex-box");

    const section11 = document.createElement("section");
    const section12 = document.createElement("section");


    section11.classList.add("coll1of3");
    section12.classList.add("coll1of3");


    section11.append(valAmount + valDice);
    section12.append(valType);

    flexDiv2.append(section11);
    flexDiv2.append(section12);

    //third row
    const cond_prop =  document.createElement("p");

    const propVal = getPropertiesFromJson(valProp);
    //console.log(propVal.innerHTML);

    cond_prop.innerHTML ="Properties: " + propVal.innerHTML;


    //final construct
    div.append(flexDiv);
    div.append(flexDiv2);
    div.append(cond_prop);

    return div;

}

const getObjectProp = (valsObj) => {
    valObjArray = [];

    valsObj.forEach((valObj) =>{

        valObjArray = Object.values(valObj);

    });
    //console.log(valObjArray);

    return valObjArray;
}


const getPropertiesFromJson = (properties) => {
    const p =  document.createElement("p");

    properties.forEach((property)=>{
        p.append(property + ", ");
        //console.log(p);
    });

    return p
}*/

// Creating an item
/*

class Item {

    constructor(category, name, type, property, condition, diceAmount, diceValue, description, itemIMG) {
        this.category = category;
        this.name = name;
        this.type =type
        this.property = property;
        this.condition = condition;
        this.diceAmount = diceAmount;
        this.diceValue = diceValue;
        this.description = description;
        this.itemIMG = itemIMG;

    }

    get createItem() {
        const div = document.createElement("div");
        div.classList.add("item-box")


        //top flexbox

        const section01 = document.createElement("section");
        const section02 = document.createElement("section");
        const img =  document.createElement("img");

        section01.classList.add("coll1of2");
        section02.classList.add("coll1of2");

        img.setAttribute('id',"item-image");

        img.src = this.itemIMG;

        const flexDiv = document.createElement("div");
        flexDiv.classList.add("flex-box")

        section01.append(img);
        section02.append(this.category + " Name: " + this.name);

        flexDiv.append(section01);
        flexDiv.append(section02);


        //middle flexbox
        const flexDiv2 = document.createElement("div");
        flexDiv2.classList.add("flex-box");

        const section11 = document.createElement("section");
        const section12 = document.createElement("section");


        section11.classList.add("coll1of3");
        section12.classList.add("coll1of3");


        section11.append(this.diceAmount + this.diceValue);
        section12.append(this.type + " Damage");

        flexDiv2.append(section11);
        flexDiv2.append(section12);


        //third row
        const cond_prop =  document.createElement("p");
        const descrip =  document.createElement("p");

        cond_prop.innerHTML ="Properties: " + this.property + " Conditions: " + this.condition;
        descrip.innerHTML = "Description: " + this.description;



        div.append(flexDiv);
        div.append(flexDiv2);
        div.append(cond_prop);
        div.append(descrip);

        return div;
        
    }
}*/

const createItems = async() => {

    let Items = await getItems();

    Items.forEach((item)=>{
        console.log(item);

        const category = document.getElementById(whichIsWhich(item.category));

        const div = document.createElement("div");
        div.classList.add("item-box")


        //top flexbox

        const section01 = document.createElement("section");
        const section02 = document.createElement("section");
        const img =  document.createElement("img");

        section01.classList.add("coll1of2");
        section02.classList.add("coll1of2");

        img.setAttribute('id',"item-image");

        img.src = item.image;

        const flexDiv = document.createElement("div");
        flexDiv.classList.add("flex-box")

        section01.append(img);
        section02.append(item.category + " Name: " + item.name);

        flexDiv.append(section01);
        flexDiv.append(section02);


        //middle flexbox
        const flexDiv2 = document.createElement("div");
        flexDiv2.classList.add("flex-box");

        const section11 = document.createElement("section");
        const section12 = document.createElement("section");


        section11.classList.add("coll1of3");
        section12.classList.add("coll1of3");


        section11.append(item.amount + item.dice);
        section12.append(item.type + " Damage");

        flexDiv2.append(section11);
        flexDiv2.append(section12);


        //third row
        const cond_prop =  document.createElement("p");
        const descrip =  document.createElement("p");

        cond_prop.innerHTML ="Properties: " + item.properties + " Conditions: " + item.condition;
        descrip.innerHTML = "Description: " + item.description;



        div.append(flexDiv);
        div.append(flexDiv2);
        div.append(cond_prop);
        div.append(descrip);

        category.append(div);

    });
}

const submitCreateItemForm = async (e) => {
    e.preventDefault();
    const form = document.getElementById("form-created-item");
    
    const formData = new FormData(form);
    let response;
    
    const con = formData.getAll("item-conditions");
    const prop = formData.getAll("item-properties")
    console.log(con , prop, form._id);
    formData.delete("item-conditions");
    formData.append("item-conditions", con);
    formData.append("item-properties", prop);

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
}

/*const submitCreateItemForm = (e) => {
    e.preventDefault();
    //console.log("hi")
    
    const form = e.target;
    const itemCategory = form.elements["item-category"].value;
    const itemName = form.elements["item-name"].value;
    const itemDamageType = form.elements["item-damage-type"].value;
    const itemProperties = getPropertyConditionValue("item-properties");
    const itemConditions = getPropertyConditionValue("item-conditions");
    const itemDiceAmount = form.elements["item-dice-amount"].value;
    const itemDiceType = form.elements["item-dice-type"].value;
    const itemDescription = form.elements["item-desc"].value;
    const imageSRC = "images/signin.png";

    console.log(
        "Category " + itemCategory + 
        " Name " + itemName + 
        " damage type " + itemDamageType + 
        " properties " + itemProperties.innerHTML +
        " condoitions " + itemConditions.innerHTML +
        " dice amount " + itemDiceAmount + 
        " dice type D" + itemDiceType + 
        " descrip " + itemDescription
    );

    console.log(whichIsWhich(itemCategory))


    //const item = new Item(`${itemCategory}`, `${itemName}`, `${itemDamageType}`, `${itemProperties.innerHTML}`, `${itemConditions.innerHTML}`, `${itemDiceAmount}`, `${itemDiceType}`, `${itemDescription}`, imageSRC )
    //console.log(item)
    console.log(whichIsWhich(itemCategory))
    document.getElementById(whichIsWhich(itemCategory)).append(item.createItem);
    resetForm();
}*/

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

const getPropertyConditionValue = (thingy) => {

    // attributed code : https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/storing-values-from-multiple-select-into/td-p/1252385
    const optionsTest = document.getElementById(thingy).selectedOptions;
    const values = Array.from(optionsTest).map(({value}) => " " + value );

    const p = document.createElement("p")

    for(let i in values) {
        //console.log(values);
        const splicedThing = values.splice(0)
        p.append(splicedThing);
        //console.log(p)

    };

    //console.log(p)
    
    return p;

}



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
    //showItems();





};