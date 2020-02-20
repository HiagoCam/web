function entrar() {
    var login = document.getElementById("login");
    var senha = document.getElementById("senha");
    if (login.value == "hiago" && senha.value == "123") {
        window.location.assign("dashboard.html");
    }
    else {
        alert("senha incorreta");
    }

}

function mostrar(){
    var cbx = document.querySelector("#cbx");
    var senha = document.querySelector("#senha");
    if(cbx.checked){
        senha.type="text";
    }
    else{
        senha.type="password";
    }

}

document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
    else{
        entrar();
    }
})

