const treks = ['kareri_delhi', 'kareri_kareri', 'dhauladhar_trek', 'manali_trek'];

const getData = function() {
    fetch("/kareri_lake_trek/pages/home.html")
        .then((response) => response.text())
        .then((response) => {
            document.getElementById("theme").innerHTML = response;
        });
    treks.forEach((trek) => getTrekDetails(trek));
};

document.addEventListener("DOMContentLoaded", () => getData(), false);
const getTrekDetails = (trekName) => {
    fetch(`/kareri_lake_trek/pages/${trekName}.html`)
        .then(response => response.text())
        .then(response => {
            var modal = document.createElement("li");
            modal.innerHTML = response;
            document.body.appendChild(modal);
        });
}