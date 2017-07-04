/**
 * Created by maxbotta on 06.05.17.
 */

function test() {
    alert("erfolgreich");
}

function closeTools () {
    var tools = document.getElementById("tools");
    tools.style.height = "0%";
}

function openTools() {
    var tools = document.getElementById("tools");
    tools.style.height = "100%";
}

function mars() {
    var planet = document.getElementById("planet");
    planet.src = "pictures/Mars.gif";
}
function neptun() {
    var planet = document.getElementById("planet");
    planet.src = "pictures/Neptun.gif";
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("div", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("div");
    ev.target.appendChild(document.getElementById(data));
}





