if (document.querySelector(".discover-our-job")) {

    const data = [
        {
            name: "Jules",
            job: "Conseiller Patrimonial",
            description: `“Ce qui me challenge tous les jours ? <br/> La satisfaction client”`,
            photoUrl: "/assets/images/jules-portrait.png"

        },
        {
            name: "Jules",
            job: "Conseiller Patrimonial",
            description: `“Ce qui me challenge tous les jours ? <br/> La satisfaction client”`,
            photoUrl: "/assets/images/jules-portrait.png"

        },
        {
            name: "Jules",
            job: "Conseiller Patrimonial",
            description: `“Ce qui me challenge tous les jours ? <br/> La satisfaction client”`,
            photoUrl: "/assets/images/jules-portrait.png"

        }
    ]


// data.reverse();
    data.forEach((card) => {
        document.querySelector(
            ".discover-our-job__card-section__cards"
        ).innerHTML += `
  <div class="discover-our-job__card-section__cards__card">
  <div class="discover-our-job__card-section__cards__card__text-container">
    <div class="discover-our-job__card-section__cards__card__text-container__title">
      <h3>${card.name}</h3>
      <p>${card.job}</p>
    </div>
    <div class="discover-our-job__card-section__cards__card__text-container__description">
      ${card.description}
    </div>
    <div class="discover-our-job__card-section__cards__card__profile-container">
    <img src="${card.photoUrl}" alt="">
  </div>
  </div>
  
</div>
  `
    })

    const cardContainer = document.querySelector(
        ".discover-our-job__card-section__cards"
    )
    const allCards = document.querySelectorAll(
        ".discover-our-job__card-section__cards__card"
    )
    const allArrows = document.querySelectorAll(
        ".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow"
    )

    allArrows.forEach((arrow) => arrow.addEventListener("click",
        handleArrowClick))

    let transformValue = 0


    function handleArrowClick() {
        let limitTransform = 0
        limitTransform = (allCards.length - 1) * -100
        if (
            this.classList.contains("discover-our-job__card-section__right-arrow") &&
            transformValue > limitTransform
        ) {
            transformValue -= 100
        } else {
            if (
                this.classList.contains("discover-our-job__card-section__right-arrow") &&
                transformValue <= limitTransform
            ) {
                transformValue = 0
            } else {
                if (
                    this.classList.contains("discover-our-job__card-section__left-arrow") &&
                    transformValue < 0
                ) {
                    transformValue += 100
                } else {
                    if (
                        this.classList.contains("discover-our-job__card-section__left-arrow") &&
                        transformValue === 0
                    ) {
                        transformValue = limitTransform
                    }
                }
            }
        }
        allCards.forEach(
            (card) => (card.style.transform = `translateX(${transformValue}%)`)
        );
    }
}
