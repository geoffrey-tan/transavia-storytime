// Settings
var offset = 0; // Hoe hoger het getal (pixels), des te later het element verschijnt

// CSS Names
var classNameLeft = "scroll-left-start";
var classNameRight = "scroll-right-start";
var classNameScrollLeft = "scroll-left";
var classNameScrollRight = "scroll-right";

var scrollLeft = document.querySelectorAll("." + classNameLeft);
var scrollRight = document.querySelectorAll("." + classNameRight);

function isScrolledIntoView(elem) {
    var docHeight = window.document.body.clientHeight;
    var docViewTop = window.scrollY;
    var docViewBottom = docViewTop + window.innerHeight;

    var elemTop = elem.offsetTop;
    var elemBottom = elemTop + elem.offsetHeight + offset;

    if (elem.offsetHeight > 500) {
        elemBottom = elemTop + elem.offsetHeight / 2;
    } else if (docViewBottom >= docHeight) {
        return true;
    }

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
// Bron: https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
// License: https://creativecommons.org/licenses/by-sa/3.0/

function scroll(scrollDirection, className) {
    for (var i = 0; i < scrollDirection.length; i++) {
        if (isScrolledIntoView(scrollDirection[i]) && !scrollDirection[i].classList.contains(className)) {
            scrollDirection[i].classList.add(className);
        }
    }
}

window.addEventListener("scroll", function() {
    scroll(scrollLeft, classNameScrollLeft);
    scroll(scrollRight, classNameScrollRight);
});
