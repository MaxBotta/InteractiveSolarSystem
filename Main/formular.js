/**
 * Created by maxbotta on 20.07.17.
 */

    function setPrice() {
        var ohneMwst = document.getElementById("preisOhneMwst");
        var mitMwst = document.getElementById("preisMitMwst");
        var versand = document.getElementById("versandpreis");
        var gesamt = document.getElementById("gesamtpreis");
        var twelve = document.getElementById("twelve");
        var six = document.getElementById("six");

        if (twelve.checked == true) {
            //test
            ohneMwst.value = "60";
            mitMwst.value = "71,40";
            versand.value = "0";
            gesamt.value = "71,40";
        } else if (six.checked == true) {
            ohneMwst.value = "30";
            mitMwst.value = "35,07";
            versand.value = "5";
            gesamt.value = "40,07";
        }
    }

    function setPaymentMethod() {
        var girocard = document.getElementById("girocard");
        var creditcard = document.getElementById("creditcard");
        var paypal = document.getElementById("paypal");
        var girocardContainer = document.getElementById("girocardContainer");
        var creditcardContainer = document.getElementById("creditcardContainer");
        var paypalContainer = document.getElementById("paypalContainer");
        var creditText = document.getElementsByClassName("creditText");
        var giroText = document.getElementsByClassName("giroText");

        //Alle Bezahlmethoden verdecken
        girocardContainer.setAttribute("class", "unchecked");
        creditcardContainer.setAttribute("class", "unchecked");
        paypalContainer.setAttribute("class", "unchecked");

        //Zugehörige Felder als nicht required festlegen, da
        // nur die sichtbaren Felder diese Eigenschaft haben sollen.
        for (var i = 0; i < creditText.length; i++) {
            creditText[i].required = false;
        }
        for (var i = 0; i < giroText.length; i++) {
            giroText[i].required = false;
        }


        if (girocard.checked == true) {
            girocardContainer.setAttribute("class", "checked");
            for (var i = 0; i < giroText.length; i++) {
                giroText[i].required = true;
            }
        } else if (creditcard.checked == true) {
            creditcardContainer.setAttribute("class", "checked");
            for (var i = 0; i < creditText.length; i++) {
                creditText[i].required = true;
            }
        } else if (paypal.checked == true) {
            paypalContainer.setAttribute("class", "checked");
        }
    }
