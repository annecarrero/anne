

function enquanto() {
    var user;
    var password;
    var recorrente;
    
    recorrente = true;
    while (recorrente == true) {
        window.alert("Digite o seu nome de usuário!");
        user = window.prompt('Enter a value for user');
        window.alert("Digite sua senha!");
        password = window.prompt('Enter a value for password');
        if (user == "annely") {
            if (password == "12345") {
                window.alert("você será redirecionado ao seu perfil.");
                recorrente = false;
            } else {
                window.alert("Usuário ou senha inválido.");
            }
        } else {
            window.alert("usuário ou senha inválido.");
        }
    }
}


function faça() {
    var user;
    var password;
    var recorrente;
    
    recorrente = true;
    do {
        window.alert("Digite o seu nome de usuário!");
        user = window.prompt('Enter a value for user');
        window.alert("Digite sua senha!");
        password = window.prompt('Enter a value for password');
        if (user == "anne") {
            if (password == "1234") {
                window.alert("Você será redirecionado ao seu perfil.");
                recorrente = false;
            } else {
                window.alert("Usuário ou senha inválido.");
            }
        } else {
            window.alert("Usuário ou senha inválido.");
        }
    } while (recorrente == true);
}

