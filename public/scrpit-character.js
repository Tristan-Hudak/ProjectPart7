
const showModal = (e) => {
    console.log(e.target.getAttribute('id'));

};



document.getElementById("file").onclick = showModal();
document.getElementById("delete").onclick = showModal();
document.getElementById("rest").onclick = showModal();
document.getElementById("level-up").onclick = showModal();