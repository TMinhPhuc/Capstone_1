window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    let currentScroll = window.scrollY;
    if ( currentScroll > 130 ) {
        header.classList.add("active");
    }
    else {
        header.classList.remove("active");
    }
});

document.querySelector("header button").onclick = function() {
    document.querySelector("header button svg").classList.toggle("active");
    document.querySelector("header button div").classList.toggle("active");
}