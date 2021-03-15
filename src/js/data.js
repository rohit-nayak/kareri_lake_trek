const treks = ['kareri_delhi', 'kareri_kareri', 'dhauladhar_trek'];

const getData = function() {
    fetch("../../pages/home.html")
        .then((response) => response.text())
        .then((response) => {
            document.getElementById("theme").innerHTML = response;
        });
    treks.forEach((trek) => getTrekDetails(trek));
};

document.addEventListener("DOMContentLoaded", () => getData(), false);
const getTrekDetails = (trekName) => {
    fetch(`../../pages/${trekName}.html`)
        .then(response => response.text())
        .then(response => {
            var modal = document.createElement("li");
            modal.innerHTML = response;
            document.body.appendChild(modal);
        });
}