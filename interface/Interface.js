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

function merkur() {
    var planet = document.getElementById("planet");
    $( "#planet" ).fadeOut( "fast", function() {
        planet.data = "pics/merkur.svg";
    }).fadeIn( "slow", function() {});
}
function venus() {
    var planet = document.getElementById("planet");
    $( "#planet" ).fadeOut( "fast", function() {
        planet.data = "pics/venus.svg";
    }).fadeIn( "slow", function() {});

}

function erde() {
    var planet = document.getElementById("planet");
    $( "#planet" ).fadeOut( "fast", function() {
        planet.data = "pics/erde.svg";
    }).fadeIn( "slow", function() {});
}

function mars() {
    var planet = document.getElementById("planet");
    $( "#planet" ).fadeOut( "slow", function() {
    planet.data = "pics/mars.svg";
    }).fadeIn( "slow", function() {});
}
function jupiter() {
    var planet = document.getElementById("planet");
    $( "#planet" ).fadeOut( "slow", function() {
        planet.data = "pics/jupiter.svg";
    }).fadeIn( "slow", function() {});

}
function saturn() {
    var planet = document.getElementById("planet");
    $( "#planet" ).fadeOut( "slow", function() {
        planet.data = "pics/saturn.svg";
    }).fadeIn( "slow", function() {});
}
function uranus() {
    var planet = document.getElementById("planet");
    $( "#planet" ).fadeOut( "slow", function() {
        planet.data = "pics/uranus.svg";
    }).fadeIn( "slow", function() {});
}
function neptun() {
    var planet = document.getElementById("planet");
    $( "#planet" ).fadeOut( "slow", function() {
        planet.data = "pics/neptun.svg";
    }).fadeIn( "slow", function() {});
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





