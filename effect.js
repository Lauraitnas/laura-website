

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    console.log("Scroll", prevScrollpos, currentScrollPos);

    if (prevScrollpos > currentScrollPos) {
        // document.getElementById("footer-items").style.top = "0";
    } else {
        // document.getElementById("footer-items").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

