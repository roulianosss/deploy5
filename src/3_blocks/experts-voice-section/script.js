if (document.querySelector(".experts-voice-section")) {

// data des news
    const data = [
        {
            date: "13 novembre 2022",
            title: "Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",
            description: `Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. `,
            author: "Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",
            logoUrl: "/assets/images/parole-d-expert.png"
        },
        {
            date: "21 novembre 2022",
            title: "SCPI : en quoi l’immobilier en région est source d’opportunités ?",
            description: `Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises constituent des zones d’investissement recherchées pour les investisseurs en quête de rendement et de diversification.`,
            author: "Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",
            logoUrl: "/assets/images/parole-d-expert.png"
        },
        {
            date: "13 décembre 2022",
            title: "Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",
            description: `Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?`,
            author: "Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",
            logoUrl: "/assets/images/parole-d-expert.png"
        },
        {
            date: "13 décembre 2022",
            title: "Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",
            description: `Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?`,
            author: "Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",
            logoUrl: "/assets/images/parole-d-expert.png"
        },
        {
            date: "13 décembre 2022",
            title: "Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",
            description: `Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?`,
            author: "Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",
            logoUrl: "/assets/images/parole-d-expert.png"
        }
    ]

// Création des buttons de navigation des pages
    const pagesNavigationContainer = document.querySelector(
        ".experts-voice-section__pagination"
    )
    const numberOfPages = Math.ceil(data.length / 3)
    pagesNavigationContainer.innerHTML = ""
    for (let i = 1;
         i <= numberOfPages;
         i++) {
        pagesNavigationContainer.innerHTML += `
        <p class='experts-voice-section__page ${i === 1 ? "active" : ""}' data-attr="${i}" >${i}</p>
        `
    }
    const allPagesBtns = document.querySelectorAll(
        ".experts-voice-section__page"
    )
    allPagesBtns.forEach((btn) =>
        btn.addEventListener("click",
            (e) => {
                allPagesBtns.forEach((btn) => btn.classList.remove("active"))
                displayNews(e.target.getAttribute("data-attr"))
            })
    )

//affichage des articles
    const newsContainer = document.querySelector(
        ".experts-voice-section__content"
    )

    function displayNews(activePage) {

        allPagesBtns.forEach((btn) => {
            if (btn.getAttribute("data-attr") === activePage) {
                btn.classList.add("active")
            }
        })
        newsContainer.innerHTML = ""
        data.slice((activePage - 1) * 3,
            activePage * 3)
            .forEach(
                (card) =>
                    (newsContainer.innerHTML += `
        <a class="article-card article-card--horizontal article-card--large" href="#">
            <img class="article-card__image" src="/assets/images/article_default.jpg">
            <div class="article-card__content">
                <p class="article-card__date">Publié le <span>${card.date}</span></p>
                <div class="article-card__title">
                    <h5 class="link">${card.title}</h5>
                </div>
                <p class="article-card__excerpt">${card.description}</p>
                <p class="article-card__author">${card.author}</p>
            </div>
        </a>
`)
            )
    }

    displayNews(1)
}