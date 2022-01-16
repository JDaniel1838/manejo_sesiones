document.addEventListener("DOMContentLoaded",(e)=>{
    if (localStorage.getItem('userMisPelis')===null) {
        window.location.replace(`http://127.0.0.1:5500/index.html`);
    }
    const myUser = JSON.parse(localStorage.getItem('userMisPelis'));


    document.getElementById("userName").textContent= myUser.name;

    setTimeout(() => {
        document.querySelector(".loader").classList.remove("active");    
    }, 2000);
    
});


document.addEventListener("click",(e)=>{
    if (e.target===document.getElementById("close-session")) {
        localStorage.removeItem('userMisPelis');
        window.location.replace(`http://127.0.0.1:5500/index.html`);
    }
});