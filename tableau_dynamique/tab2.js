function ajouterLigne() {
    var table = document.getElementById("myTable");
    var nom = document.getElementById("nom").value;
    var age = document.getElementById("age").value;

    if (nom == null || age == null) {
        alert("remplissez les input");
        return;
    } else if (age < 10) {
        alert("Trop jeune")
        return;
    } else if (age > 20) {
        alert("Trop vieux")
        return;
    }

    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerText = nom.toString();
    cell2.innerText = age.toString();
}