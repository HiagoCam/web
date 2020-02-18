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

function mostrar(chk){
    var senha = document.querySelector("#senha");
    if(chk.checked==false){
        senha.type="password";
    }
    else{
        senha.type="text";
    }

}