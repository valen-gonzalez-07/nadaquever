const navSlide = () => {
    const burguer = document.querySelector(".burguer");
    const nav = document.querySelector(".navbarLinks");
    const navLinks = document.querySelectorAll(".navbarLinks li");
    const main = document.querySelector("main");

    burguer.addEventListener("click", () => {
        nav.classList.toggle("navActive");
        $("nav").css("z-index", "1");

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 4 + 0.5}s`
            }
        });

        burguer.classList.toggle("toggle");

        main.classList.toggle("visibilityH");
    })

}

navSlide();