/**
 * Created by maxbotta on 09.07.17.
 */

function setFontSize() {
    if (getCookie() == "") {

        var fontSize;

        var popup = document.createElement("div");
        popup.setAttribute("id", "popup");
        popup.style.width = "400px";
        popup.style.height = "260px";
        popup.style.position = "fixed";
        popup.style.backgroundColor = "white";
        popup.style.boxShadow = "0px 0px 30px black";
        popup.style.top = "100px";
        popup.style.left = "50%";
        popup.style.marginLeft = "-150px";
        popup.style.borderRadius = "5px";
        document.body.appendChild(popup);

        var header = document.createElement("div");
        header.setAttribute("id", "popupHeader");
        header.style.position = "fixed";
        header.style.width = "400px";
        header.style.height = "30px";
        header.style.backgroundColor = "#202e3b";
        header.style.webkitBorderTopLeftRadius = "5px";
        header.style.webkitBorderTopRightRadius = "5px";
        popup.appendChild(header);

        var close = document.createElement("div");
        close.style.position = "fixed";
        close.style.width = "20px";
        close.style.height = "20px";
        close.style.marginTop = "5px";
        close.style.backgroundColor = "white";
        close.style.marginLeft = "375px";
        close.style.borderRadius = "20%";
        close.onmouseover = function () {
            this.style.backgroundColor = "#d2524a";
        };
        close.onmouseout = function () {
            this.style.backgroundColor = "white";
        };
        close.onclick = function () {
            popup.parentNode.removeChild(popup);
        }
        header.appendChild(close);

        var x = document.createElement("p");
        x.innerHTML = "&#10006";
        x.style.marginTop = "-3px";
        x.style.marginLeft = "3px";
        x.style.fontSize = "19px";
        x.style.color = "#202e3b";
        close.appendChild(x);


        //Content des Popup
        var content = document.createElement("div");
        content.style.marginTop = "40px";
        content.style.width = "380px";
        content.style.height = "180px";
        content.style.marginLeft = "10px";
        content.style.marginRight = "10px";
        content.style.border = "1px solid red";
        popup.appendChild(content);

        var question = document.createElement("p");
        question.innerHTML = "Welche Schriftgröße bevorzugen Sie?";
        content.appendChild(question);


        var rangeBox = document.createElement("div");
        rangeBox.style.width = "380px";
        rangeBox.style.height = "30px";
        rangeBox.style.marginLeft = "10px";
        rangeBox.style.marginRight = "10px";
        rangeBox.style.border = "1px solid red";
        popup.appendChild(rangeBox);

        var range = document.createElement("INPUT");
        range.setAttribute("type", "range");
        range.style.marginTop = "10px";
        range.addEventListener("change", function () {
            //question.style.fontSize = (range.value) / 2.5 + "px";
            fontSize = (range.value) / 2.5 + "px";
            document.body.style.fontSize = fontSize;
            setCookie(fontSize);
        });
        rangeBox.appendChild(range);


    }

}