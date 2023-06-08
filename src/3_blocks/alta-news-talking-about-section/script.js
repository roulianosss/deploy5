if (document.querySelector(".alta-news-talking-about-container")) {
// data des news
    const data = [
        {
            date: "22 Juillet 2022",
            title: "Assurance vie : peut-on craindre un blocage des retraits ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/money_vox.png"
        },
        {
            date: "21 Juin 2022",
            title: "Assurance vie : comment profiter des rendements du non coté",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/capital.png"
        },
        {
            date: "2 Juin 2022",
            title: "Assurance vie : peut-on craindre un blocage des retraits ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/le_revenu.png"
        },
        {
            date: "15 Mai 2022",
            title:
                "Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/bfm_business.png"
        },
        {
            date: "10 Mai 2022",
            title: "Assurance vie : peut-on craindre un blocage des retraits ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/le_revenu.png"
        },
        {
            date: "26 Avril 2022",
            title: "Assurance vie : peut-on craindre un blocage des retraits ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/money_vox.png"
        },
        {
            date: "31 Mars 2022",
            title:
                "Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/bfm_business.png"
        },
        {
            date: "11 Mars 2022",
            title: "Assurance vie : comment profiter des rendements du non coté",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/capital.png"
        },
        {
            date: "10 Mars 2022",
            title:
                "Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/bfm_business.png"
        },
        {
            date: "22 Février 2022",
            title: "Assurance vie : comment profiter des rendements du non coté",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/capital.png"
        },
        {
            date: "12 Février 2022",
            title: "Assurance vie : peut-on craindre un blocage des retraits ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/money_vox.png"
        },
        {
            date: "10 Février 2022",
            title: "Assurance vie : peut-on craindre un blocage des retraits ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/le_revenu.png"
        },
        {
            date: "9 Janvier 2022",
            title: "Assurance vie : peut-on craindre un blocage des retraits ?",
            description: `“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... `,
            logoUrl: "./assets/logos/le_revenu.png"
        }
    ]

// Création des buttons de navigation des pages
    const pagesNavigationContainer = document.querySelector(
        ".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"
    )
    const numberOfPages = Math.ceil(data.length / 4)
    pagesNavigationContainer.innerHTML = ""
    for (let i = 1;
         i <= numberOfPages;
         i++) {
        pagesNavigationContainer.innerHTML += `
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${i === 1 ? "activePage" : ""}' data-attr="${i}" >${i}</p>
        `
    }
    const allPagesBtns = document.querySelectorAll(
        ".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn"
    )
    allPagesBtns.forEach((btn) =>
        btn.addEventListener("click",
            (e) => {
                allPagesBtns.forEach((btn) => btn.classList.remove("activePage"))
                displayNews(e.target.getAttribute("data-attr"))
            })
    )

//affichage des articles
    const newsContainer = document.querySelector(
        ".alta-news-talking-about-container__left-container__news-container"
    )

    function displayNews(activePage) {

        allPagesBtns.forEach((btn) => {
            if (btn.getAttribute("data-attr") === activePage) {
                btn.classList.add("activePage")
            }
        })
        newsContainer.innerHTML = ""
        data.slice((activePage - 1) * 4,
            activePage * 4)
            .forEach(
                (card) =>
                    (newsContainer.innerHTML += `
        <div class="alta-news-talking-about-container__left-container__card">
        <div
        class="alta-news-talking-about-container__left-container__card__logo-container"
        >
            <img src="${card.logoUrl}" alt="logo">
        </div>
        <div
        class="alta-news-talking-about-container__left-container__card__informations-container"
        >
            <p>${card.date}</p>
            <h3><span class="alta-news-talking-about-container__left-container__card__informations-container__underline">${card.title}</h3></span>
            <p>${card.description}</p>
        </div>
    </div>  
`)
            )
    }

    displayNews(1)

}
