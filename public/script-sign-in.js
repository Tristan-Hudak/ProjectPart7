const goBack = () => {
    console.log("test")
    window.location.assign("index.html");
    return;
 };

 document.getElementById("btn-enter").onclick = goBack;