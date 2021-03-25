const treks = ['kareri_delhi', 'kareri_kareri', 'dhauladhar_trek', 'manali_trek'];
const url = window.location.href;
const getData = function() {
    console.info(window.location.href);
    fetch(`${url}/pages/home.html`)
        .then((response) => response.text())
        .then((response) => {
            document.getElementById("theme").innerHTML = response;
        });
    treks.forEach((trek) => getTrekDetails(trek));
};

document.addEventListener("DOMContentLoaded", () => getData(), false);
const getTrekDetails = (trekName) => {
    fetch(`${url}/pages/${trekName}.html`)
        .then(response => response.text())
        .then(response => {
            var modal = document.createElement("li");
            modal.innerHTML = response;
            document.body.appendChild(modal);
        });
}