function calcul_moyenne(){
    var n1 = prompt("Saisir la première note:");
    var n2 = prompt("Saisir la seconde note:");
    var n3 = prompt("Saisir la troisième note:");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme: "+somme+"<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne:"+moyenne+"<br>");

    if(moyenne<10)
    document.write("Vous êtes redoublant.");
    else if(document<20)
    document.write("Tu a réussi ton année.");
    else
    document.write("Villain tricheur");
}
function verify_age(){
    var dateNaissance = prompt("Quelle est votre année de naissance?");

    var dateNaissanceNum = Number(dateNaissance);
    var age = 2023 - dateNaissanceNum;

    if(age >= 18) {
        document.write("<font size='6em'>Vous êtes majeur. </font><br>");
        document.bgColor="white";
    } else {
        document.write("<font size='6em'>Vous êtes mineur! </font>");
        document.bgColor="red";
    }
        
}

function change_bg(){
    var couleur = prompt("Donnez une couleur (en anglais):");
    document.body.style.background=couleur
}

function display_name() {
    var prenom = prompt("Donnez votre prenom:")
    var nom = prompt("Donnez votre nom:")

    document.write("<div style='margin: auto; width: 500px; border: 2px solid blue;'>")
    document.write("<font size='8em'>Bonjour, "+prenom+" "+nom+"! </font>")
    document.write("</div>")
}
//change_bg()