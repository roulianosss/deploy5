const promoSections = document.querySelectorAll(".promo-banner-section");

promoSections.forEach((promoSection) => {
    const itemsContainer = promoSection.querySelector(".promo-banner-section__items-section__items");
    const items = promoSection.querySelectorAll(".promo-banner-section__items-section__items__item");
    const leftArrow = promoSection.querySelector(".promo-banner-section__items-section__left-arrow");
    const rightArrow = promoSection.querySelector(".promo-banner-section__items-section__right-arrow");

    let activeIndex = 0; // Index de l'élément actif

    if (items.length > 1) {
        rightArrow.style.display = "block";
        leftArrow.style.display = "block";

        rightArrow.addEventListener("click", () => {
            activeIndex = (activeIndex + 1) % items.length; // Incrémenter l'index
            updateCarousel(activeIndex);
        }, { passive: true });

        leftArrow.addEventListener("click", () => {
            activeIndex = (activeIndex - 1 + items.length) % items.length; // Décrémenter l'index
            updateCarousel(activeIndex);
        }, { passive: true });
    }

    function updateCarousel(index) {
        items.forEach((item) => {
            item.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    updateCarousel(activeIndex); // Afficher le premier élément par défaut
});
