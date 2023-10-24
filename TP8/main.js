function resetVars() {

    r1.value = 0;
    r2.value = 0;
    r3.value = 0;
    r4.value = 0;

    
    q1.value = 0;
    q2.value = 0;
    q3.value = 0;

    
    a1.value = "A1";
    a2.value = "A2";
    a3.value = "A3";

}

function result() {
    var pr1 = document.getElementById("p1").value;
    var pr2 = document.getElementById("p2").value;
    var pr3 = document.getElementById("p3").value;

    var qu1 = document.getElementById("q1").value;
    var qu2 = document.getElementById("q2").value;
    var qu3 = document.getElementById("q3").value;

    var result1 = pr1 * qu1;
    var result2 = pr2 * qu2;
    var result3 = pr3 * qu3;
    var total = result1 + result2 + result3;

    r1.value = result1;
    r2.value = result2;
    r3.value = result3;
    r4.value = total;
}