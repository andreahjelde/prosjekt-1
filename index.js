

let myButton = document.querySelector(".knappTopp");
let scroll = 0;
window.onscroll = function (e) {


    scrollFunction();
    scroll = window.scrollY;
};

function scrollFunction() {
    const newScroll = window.scrollY
    const skjermhoyde = window.innerHeight
    if (newScroll < scroll && newScroll > skjermhoyde) {
        myButton.classList.add("knappToppPaa");
    }
    else {
        myButton.classList.remove("knappToppPaa");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}