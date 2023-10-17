function add() {
    var n1 = document.getElementById("nb1").value;
    var n2 = document.getElementById("nb2").value;
    var resultat = Number(n1) + Number(n2);

    result.value = resultat;
}

function sub() {
    var n1 = document.getElementById("nb1").value;
    var n2 = document.getElementById("nb2").value;
    var resultat = Number(n1) - Number(n2);

    result.value = resultat;
}


function div() {
    var n1 = document.getElementById("nb1").value;
    var n2 = document.getElementById("nb2").value;
    var resultat = Number(n1) / Number(n2);

    result.value = resultat;
}


function mult() {
    var n1 = document.getElementById("nb1").value;
    var n2 = document.getElementById("nb2").value;
    var resultat = Number(n1) * Number(n2);

    result.value = resultat;
}

function par() {
    var v = Number(document.getElementById("result").value);
    if(v%2==0)
        parite.value = ("Pair");
    else
        parite.value = ("Impair");

}

function prmt() {
    var n1 = document.getElementById("nb1").value;
    var n2 = document.getElementById("nb2").value;
    var holdn1 = n1;
    n1 = n2;
    n2 = holdn1;

    nb1.value = n1;
    nb2.value = n2;
}