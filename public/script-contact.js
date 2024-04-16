//7adf455e-b8e4-4a08-96b1-b91b25cf7221 my acsess key

const showEmailResults = async(e) => {
    e.preventDefault();

    const result = document.getElementById("result");
    let response =  await getEmailResult();

    if(response.status == 200){
        result.innerHTML = "Email.succesfully sent"
        console.log("the email sent to my school email will send proof in submition")
    }
    else {
        result.innerHTML = "Email not succesfully sent"
    }
};

const getEmailResult = async() => {

    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";

    try {

        const response = await fetch("https://api.web3forms.com/submit" ,  {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });

        return response;

    }
    catch(error){
        console.log(error);
        result.innerHTML = "Sorry, email couldnt be submited."
    }


};

document.getElementById("contact-form").onsubmit = showEmailResults;