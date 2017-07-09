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
    $( "#planet" ).fadeOut( "slow", function() {
    planet.data = "Mars.svg";
    }).fadeIn( "slow", function() {});
}
function jupiter() {
    var planet = document.getElementById("planet");
    $( "#planet" ).fadeOut( "slow", function() {
        planet.data = "Jupiter.svg";
    }).fadeIn( "slow", function() {});

    console.log("hallo");
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





