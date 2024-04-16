
const showHidePlayer = () => {
    console.log("in show hide");
    document.getElementById("nav-items-p1").classList.toggle("hide-small");
    document.getElementById("pointer-char").classList.toggle("down")
};




document.getElementById("pointer-char").onclick = showHidePlayer;