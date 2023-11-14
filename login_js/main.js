function affichagetab() {
    document.write('<table border=2px width=30%');
    for (var i = 0; i <= 5; i++) {
        document.write('<tr><td>* </td><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function affichagetab2() {
    var lignes = prompt("Combiens de lignes voulez-vous?")
    if (lignes >= 9000) {
        document.write('<h1>ITS OVER 9000 !!!</h1>')
    }
    document.write('<table border=2px width=30%');
    for (var i = 1; i <= lignes; i++) {
        document.write('<tr><td>*'+i+' </td><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
    
}

function login() {
    var username = prompt("Entrez votre pseudo:");
    var password = prompt("Mot de passe:");

    if (!username=="admin") {
        alert("Accès refusé!");
    } else if (password=="admin") {
        document.write("Bienvenue "+username+"!");
    } else {
        alert("Accès refusé!");
    }
}

function login2() {
    var username2 = document.getElementById("t1").value;
    var password2 = document.getElementById("t2").value;

    if (username2 == null || password2 == null) {
        return;
    } else if (username2 == "admin" || password2 == "admin") {
        window.location.href = "adminlogin.html";
    } else {
        window.location.href = "wronglogin.html";
    }
    
}

function login3() {
    var i = 0;
    do {
        var id = prompt("Entrez votre nom d'utilisateur:");
        var mdp = prompt("Entrez votre mot de passe:");
        if (id == "admin" && mdp=="admin") {
            document.write("Bienvenue "+id);
            break;
        } else {
            alert("Accès refusé!");
        }
    i += 1;
    } while (i<3);
    if (i==3)
    alert("Délai dépassé");
}

function cdc() {
    var str = prompt("Entrez une chaine de charactères:");
    document.write(str.toUpperCase()+"<br>")
    document.write(str.toLowerCase()+"<br>")
    document.write("La chaîne contiens "+str.length+" caractères.<br>")
    document.write("La première lettre est "+str.substring(0,1)+".<br>")

    if(str.length>10) {
        alert("Votre string est trop longue.")
    } else {
        document.write(str+", il n'y a que ça de bon dans la vie...")
    }
    
}

function swich() {
    var couleur = prompt("Quelle couleur voulez-vous comme background?")
    var lowC_couleur = couleur.toLowerCase();
    switch(lowC_couleur) {
        case "rouge": document.body.style.background = "red";
        break;
        case "bleu": document.body.style.background = "blue";
        break;
        case "vert": document.body.style.background = "green";
        break;
        case "jaune": document.body.style.background = "yellow";
        break;
        case "orange": document.body.style.background = "orange";
        break;
        case "violet": document.body.style.background = "purple";
        break;
        case "rose": document.body.style.background = "pink";
        break;

        default:alert("ERREUR: couleur non définie.");
    }
    
}

function bonus() {
    
}