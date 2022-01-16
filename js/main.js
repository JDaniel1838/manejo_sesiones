const user = document.getElementById("user"),
password = document.getElementById("password"),
myAlert = document.querySelector(".alert"),
closeAlert = document.getElementById("close-alert");

const startLogin =(user) =>{
    
    if (localStorage.getItem('userMisPelis')===null || localStorage.getItem('userMisPelis')!=JSON.stringify(user)) {
        localStorage.setItem('userMisPelis', `${JSON.stringify(user)}`);
        
    }
    

    window.location.replace(`http://127.0.0.1:5500/my_movies.html`);

    

};

const getAll = async () => {
    try {
        let res = await fetch("http://localhost:3000/users"),
        json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        //Validando el usuario
        json.forEach(el => {
            if (el.name===user.value) {
                //Usuario conocido
                
                if (el.password===password.value) {
                    startLogin(el);
                    
                }else{
                    //Contraseña incorrecta
                    myAlert.classList.add("active");
                }
            }else{
                //USUARIO NO RECONOCIDO
                myAlert.classList.add("active");
            }
        });
        
    }catch(err){
        let message = err.statusText || "Ocurrio un error :(";
        console.log({err:err.status, message});
       
    };
}
document.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Enviado");
    getAll();
});


closeAlert.onclick = ()=> myAlert.classList.remove("active");
