/**
 * Created by maxbotta on 20.07.17.
 */

//Allen Texten werden Buttons hinzugefügt, die eine Akkordion funktion realisieren
function textAkkordion() {
    var p2 = document.getElementsByClassName("p2");
    var p2click = document.getElementsByClassName("p2click");
    var p2clickM = document.getElementById("p2clickMerkur");


    for(var i = 0; i < p2.length; i++) {
        $(p2[i]).hide();
        var button = document.createElement("button");
        button.innerHTML = "MEHR &#9661";
        button.style.boxShadow = "0px 0px 5px 0px black";
        button.style.width = "80px";
        button.style.textAlign = "center";
        button.style.border = "none";
        button.style.backgroundColor = "#202e3b";
        p2click[i].appendChild(button);

        $(p2click[i]).click(function(){
            $(this).next().toggle(500);
        });

    }

}
