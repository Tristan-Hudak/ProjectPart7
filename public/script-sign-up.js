const getUsers = async() => {
    try {
        const response = await fetch("api/users/");
        return await response.json();
    }
    catch(error) {
        console.log(error)
    }
}

const submitUserUp = async (e) => {
    e.preventDefault();
    const form = document.getElementById("signup");
    
    const formData = new FormData(form);
    let response;

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
    goBack();
}

const resetForm = () => {
    const form = document.getElementById("form-created-item");
    form.reset();
};


const goBack = async() => {
    console.log("test")
    window.location.assign("index.html");
    return;
};

document.getElementById("btn-enter").onclick = submitUserUp;


