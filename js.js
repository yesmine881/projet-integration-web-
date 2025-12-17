
function mettrePrix() {
    calculerTotal();
}

function calculerTotal() {
    const prix = parseFloat(document.getElementById("vehicule").value);
    const jours = parseInt(document.getElementById("jours").value);

    if (jours > 0) {
        document.getElementById("total").value = (prix * jours) + " DT";
    } else {
        document.getElementById("total").value = "0 DT";
    }
}
