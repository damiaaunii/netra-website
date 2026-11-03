// =========================================================
// NETRA WEBSITE
// =========================================================


// =========================================================
// DARK / LIGHT MODE
// =========================================================

const themeToggle =
    document.getElementById("themeToggle");

const themeText =
    document.getElementById("themeText");

const themeIcon =
    document.getElementById("themeIcon");

const brandWordmark =
    document.getElementById("brandWordmark");


const savedTheme =
    localStorage.getItem("netra-theme");


function updateThemeLogo() {

    const lightMode =
        document.body.classList.contains("light-mode");

    if (lightMode) {

        themeText.textContent = "Light";
        themeIcon.textContent = "";
        themeIcon.className = "theme-icon sun-icon";
        
        brandWordmark.src =
            "assets/netra-light.png";

    } else {

        themeText.textContent = "Dark";
        themeIcon.textContent = "";
        themeIcon.className = "theme-icon moon-icon";

        brandWordmark.src =
            "assets/netra-dark.png";

    }

}


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}


updateThemeLogo();


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const lightMode =
        document.body.classList.contains("light-mode");

    localStorage.setItem(
        "netra-theme",
        lightMode ? "light" : "dark"
    );

    updateThemeLogo();

});


// =========================================================
// MOBILE NAVIGATION
// =========================================================

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const navLinks =
    document.getElementById("navLinks");


mobileMenuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });


// =========================================================
// PRODUCT ACCORDION
// =========================================================

const accordionItems =
    document.querySelectorAll(".accordion-item");


function closeAccordion(item) {

    item.classList.remove("active");

    const content =
        item.querySelector(".accordion-content");

    const icon =
        item.querySelector(".accordion-icon");

    content.style.maxHeight = null;

    icon.textContent = "+";

}


function openAccordion(item) {

    item.classList.add("active");

    const content =
        item.querySelector(".accordion-content");

    const icon =
        item.querySelector(".accordion-icon");

    content.style.maxHeight =
        content.scrollHeight + "px";

    icon.textContent = "−";

}


accordionItems.forEach(item => {

    const header =
        item.querySelector(".accordion-header");

    header.addEventListener("click", () => {

        const alreadyOpen =
            item.classList.contains("active");

        accordionItems.forEach(closeAccordion);

        if (!alreadyOpen) {

            openAccordion(item);

        }

    });

});


const firstAccordion =
    document.querySelector(".accordion-item.active");


if (firstAccordion) {

    openAccordion(firstAccordion);

}


// =========================================================
// DASHBOARD SLIDESHOW
// =========================================================

const slides =
    document.querySelectorAll(".slide");

const slideDots =
    document.querySelectorAll(".slide-dot");

const nextButton =
    document.querySelector(".slide-next");

const previousButton =
    document.querySelector(".slide-prev");

const slideshow =
    document.querySelector(".slideshow");


let currentSlide = 0;

let slideshowTimer;


function showSlide(index) {

    if (index >= slides.length) {

        index = 0;

    }

    if (index < 0) {

        index = slides.length - 1;

    }

    currentSlide = index;


    slides.forEach(slide => {

        slide.classList.remove("active");

    });


    slideDots.forEach(dot => {

        dot.classList.remove("active");

    });


    slides[currentSlide]
        .classList.add("active");


    slideDots[currentSlide]
        .classList.add("active");

}


// =========================================================
// SLIDESHOW SPEED
//
// 8000 = 8 seconds
// =========================================================

function startSlideshow() {

    clearInterval(slideshowTimer);

    slideshowTimer =
        setInterval(() => {

            showSlide(currentSlide + 1);

        }, 8000);

}


if (nextButton) {

    nextButton.addEventListener("click", () => {

        showSlide(currentSlide + 1);

        startSlideshow();

    });

}


if (previousButton) {

    previousButton.addEventListener("click", () => {

        showSlide(currentSlide - 1);

        startSlideshow();

    });

}


slideDots.forEach(dot => {

    dot.addEventListener("click", () => {

        const index =
            Number(dot.dataset.slide);

        showSlide(index);

        startSlideshow();

    });

});


if (slideshow) {

    slideshow.addEventListener("mouseenter", () => {

        clearInterval(slideshowTimer);

    });


    slideshow.addEventListener("mouseleave", () => {

        startSlideshow();

    });

}


if (slides.length > 0) {

    showSlide(0);

    startSlideshow();

}




// =========================================================
// TECHNOLOGY CARDS
// Desktop: hover reveals the explanation.
// Mobile/tablet: tap a card to reveal it.
// =========================================================

const technologyCards =
    document.querySelectorAll(".technology-card");

technologyCards.forEach(card => {

    card.addEventListener("click", () => {

        const wasActive =
            card.classList.contains("active");

        technologyCards.forEach(item => {
            item.classList.remove("active");
        });

        if (!wasActive) {
            card.classList.add("active");
        }

    });

});

document.addEventListener("click", event => {

    if (!event.target.closest(".technology-card")) {
        technologyCards.forEach(card => {
            card.classList.remove("active");
        });
    }

});


// =========================================================
// WINDOW RESIZE
// =========================================================

window.addEventListener("resize", () => {

    const activeAccordion =
        document.querySelector(".accordion-item.active");

    if (activeAccordion) {

        const content =
            activeAccordion.querySelector(
                ".accordion-content"
            );

        content.style.maxHeight =
            content.scrollHeight + "px";

    }


    if (window.innerWidth > 850) {

        navLinks.classList.remove("open");

    }

});

