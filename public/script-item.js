
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
        console.log(item);

        const category = document.getElementById(whichIsWhich(item.category));
        console.log(category);

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
    
    const con = formData.getAll("item_conditions");
    const prop = formData.getAll("item_properties")
    console.log(con , prop, form._id);
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