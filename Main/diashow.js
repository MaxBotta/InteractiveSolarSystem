/**
 * Created by maxbotta on 08.07.17.
 */
function diashow() {
    window.setInterval(right, 5000);

    var index = 1;
    var currentIndex = 1;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    var links = document.getElementById("links");
    var rechts = document.getElementById("rechts");

    showSlide();

    function right() {
        index = currentIndex + 1;
        console.log(index);
        showSlide();
    }

    function left() {
        index = currentIndex - 1;
        console.log(index);
        showSlide();
    }

    function setSlide(i) {
        index = i;
        showSlide();
    }

    function showSlide() {
        if (index > slides.length) {
            index = slides.length;
            console.log(slides.length);
        }
        if (index < 1) {
            index = 1;
        }
        // for (var i = 0; i < slides.length; i++) {
        //     $(slides[i]).fadeOut("slow", function() {
        //         slides[i].style.display = "none";
        //     });

        slides[currentIndex-1].style.display = "none";


        for (var i = 0; i < dots.length; i++) {
            dots[i].setAttribute("class", "dot");
        }

        slides[index - 1].style.display = "block";
        dots[index - 1].setAttribute("class", "dot active");

        currentIndex = index;

    }


    //Den Punkten eine Klickfunktion geben
    dots[0].onclick = function () {
        setSlide(1)
    };
    dots[1].onclick = function () {
        setSlide(2)
    };
    dots[2].onclick = function () {
        setSlide(3)
    };

    links.onclick = function () {
        left()
    };
    rechts.onclick = function () {
        right()
    };
}