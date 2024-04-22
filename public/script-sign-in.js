const getUsers = async() => {
    try {
        const response = await fetch("api/users/");
        return await response.json();
    }
    catch(error) {
        console.log(error)
    }
}

const sumbitUserIn = async(e) => {
    e.preventDefault();
    let Users = await getUsers();
    const form = document.getElementById("signin");

    const formData = new FormData(form);

    console.log(...formData);
    

    Users.forEach((user) => {
        if(formData.user == user.user && formData.pass == user.pass){
            
            resetForm();
            goBack();

        }else{

            document.getElementById("errortxt").innerHTML = "Either your Username or Password was incorrect. Please Try Again"

        }
    });
}

const resetForm = () => {
    const form = document.getElementById("signin");
    form.reset();
};


const goBack = async() => {
    console.log("test")
    window.location.assign("index.html");
    return;
};

const goSignUp = async() => {
    console.log("test")
    window.location.assign("sign-up.html");
    return;
};



document.getElementById("btn-enter").onclick = sumbitUserIn;
document.getElementById("btnsignup").onclick = goSignUp;