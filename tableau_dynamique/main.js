function ajouterLigne() {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = "Nouveau Nom";
    cell2.innerHTML = "Nouvel Age";
}