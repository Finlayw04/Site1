document.addEventListener("DOMContentLoaded", function () {
    let scrollbutton = document.getElementById("myBtn");

    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollbutton.style.display = "block";
            scrollbutton.classList.add("visible");
        }
        else {
            scrollbutton.classList.add("");
            scrollbutton.style.display = "none";
        }
    }

    scrollbutton.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})
