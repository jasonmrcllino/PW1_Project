document.addEventListener("DOMContentLoaded", function() {
    const infoCard = document.querySelector(".info-card");
    const catalogCard = document.querySelector(".catalog-card");

    setTimeout(function() {
        if (infoCard) {
            infoCard.classList.add("visible");
        }
    }, 200);
    setTimeout(function() {
        if (catalogCard) {
            catalogCard.classList.add("visible");
        }
    }, 400); 

    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('mobile-menu');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
});