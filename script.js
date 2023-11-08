// Navbar sticky animation script
window.addEventListener("scroll", () => {
    var navbar = document.querySelector(".navbar")
    navbar.classList.toggle("sticky", window.scrollY > 0)
})



// typing text animation script
var typed = new Typed(".typing", {
    strings: ["graphic designer", "freelancer", ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["graphic designer", "freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
// toggle menu/navbar script
$(document).ready(function () {
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});


