//=> Exibe ou Esconde a senha
function senha() {
    item = document.getElementById('eye');
    input = document.getElementById('senha');

    if (item.className == "fa-solid fa-eye-slash") {
        item.className = "fa-solid fa-eye";
        input.type = "password";
    }

    else {
        item.className = "fa-solid fa-eye-slash";
        input.type = "text";
    }
}

//> Saberá se o toggle está checado ou não
function MudarModo() {
    check = document.getElementById("checkbox");

    if (check.checked == 1) {
        document.getElementById('log').style.color = "rgb(48, 85, 54)";
        document.getElementById('reg').style.color = "#faebd7";

        //Apresentação
        document.getElementById('greet').style.left = "-750px";

        //Login Field
        document.getElementById('login').style.opacity = "0%";
        document.getElementById('login').style.left = "700px";
        document.getElementById('login').style.pointerEvents = "none";
        document.getElementById('login').style.zIndex = "0";

        //Register Field
        document.getElementById('register').style.opacity = "100%";
        document.getElementById('register').style.left = "840px";
        document.getElementById('register').style.pointerEvents = "all";
        document.getElementById('register').style.zIndex = "2";

        console.log("Cadastrar");
    }

    else {
        document.getElementById('reg').style.color = "rgb(48, 85, 54)";
        document.getElementById('log').style.color = "#faebd7";

        //Apresentação
        document.getElementById('greet').style.left = "0px";

        //Login Field
        document.getElementById('login').style.opacity = "100%";
        document.getElementById('login').style.left = "0px";
        document.getElementById('login').style.pointerEvents = "all";
        document.getElementById('login').style.zIndex = "2";

        //Register Field
        document.getElementById('register').style.opacity = "0%";
        document.getElementById('register').style.left = "0px";
        document.getElementById('register').style.pointerEvents = "none";
        document.getElementById('register').style.zIndex = "0";

        console.log("Entrar");
    }
}