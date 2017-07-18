/**
 * Created by maxbotta on 09.07.17.
 */

function setCookie(fontSize) {
    document.cookie = "fontSize=" + fontSize + "; expires=Thu, 01 Jan 2030 12:00:00 UTC";
}

function getCookie(cname) {
    var name = "fontSize=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
