document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".piloted-graph-section")) {
    const defaultData = [
      [
        {
          titre: "Sur 3 ans",
          percentage: 3.3,
          description: "Profil 1<br>Lazard Frères Gestion<br>SRI 3",
          condition:
            "Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."
        },
        {
          titre: "Sur 5 ans",
          percentage: 8.4,
          description: "Profil 7<br>Lazard Frères Gestion<br>SRI 4",
          active: true,
          condition:
            "Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."
        },
        {
          titre: "depuis l'origine",
          percentage: 11.9,
          description: "Conviction<br>Generali Wealth Solutions<br>SRI 5",
          condition:
            "Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."
        },
        {
          conditions:
            "Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."
        }
      ],
      [
        {
          percentage: 5.3,
          description: "Profil 1<br>Lazard Frères Gestion<br>SRI 3"
        },
        {
          percentage: 9.4,
          description: "Profil 7<br>Lazard Frères Gestion<br>SRI 4"
        },
        {
          percentage: 15.8,
          description: "Conviction<br>Generali Wealth Solutions<br>SRI 5"
        },
        {
          conditions:
            "Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."
        }
      ],
      [
        {
          percentage: 7.3,
          description: "Profil 1<br>Lazard Frères Gestion<br>SRI 3"
        },
        {
          percentage: 10.4,
          description: "Profil 7<br>Lazard Frères Gestion<br>SRI 4"
        },
        {
          percentage: 16.9,
          description: "Conviction<br>Generali Wealth Solutions<br>SRI 5"
        },
        {
          conditions:
            "Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."
        }
      ]
    ];
    const parsedData = JSON.stringify(defaultData);
    const element = document.querySelector(
      ".piloted-graph-section__btns-container"
    );
    if (element.hasAttribute("data-content")) {
      const dataParsed = JSON.parse(
        element.getAttribute("data-content").replace(/\\r\\n/g, "")
      );
      var data = JSON.parse(dataParsed);
    } else {
      element.setAttribute("data-content", parsedData);
      var data = defaultData;
    }
    let header = data[0];
    const graphContainer = document.querySelector(
      ".piloted-graph-section__graph-container"
    );
    element.innerHTML = "";
    header.forEach((donnee, i) => {
      if (i === 3) return;
      let active =
        donnee["active"] == 1
          ? "piloted-graph-section__btns-container__btn--active"
          : "";
      element.innerHTML +=
        '<div class="piloted-graph-section__btns-container__btn ' +
        active +
        '" data-attr="' +
        i +
        '">' +
        donnee["titre"] +
        "</div>";
    });

    const conditionsText = document.querySelector(
      ".piloted-graph-section__conditions p"
    );

    const allGraphBtns = document.querySelectorAll(
      ".piloted-graph-section__btns-container__btn"
    );

    allGraphBtns.forEach((btn, index) => {
      if (index === 3) return
      btn.innerHTML = data[0][index]["titre"];
    });
    /* */
    allGraphBtns.forEach((btn) => btn.addEventListener("click", handleClick));

    function handleClick() {
      graphContainer.innerHTML = "";

      allGraphBtns.forEach((btn) =>
        btn.classList.remove(
          "piloted-graph-section__btns-container__btn--active"
        )
      );

      this.classList.add("piloted-graph-section__btns-container__btn--active");

      const btnActive = this.getAttribute("data-attr");
      const maxPercentage =
        data[btnActive][data[btnActive].length - 2].percentage;
      const condition = data[0][btnActive].condition;
      const conditionsText = document.querySelector(
        ".piloted-graph-section__conditions p"
      );
      conditionsText.textContent = condition;

      data[btnActive].forEach((graphBar, index) => {
        if (index === 3) return;
        const graphBarHeight = (graphBar.percentage * 100) / maxPercentage;
        graphContainer.innerHTML += `
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph piloted-graph-section__graph-container__bar-container__bar-graph--${index}"

      >
        ${graphBar.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${graphBar.description}
      </div>
    </div>`;

        const bar = document.querySelector(
          `.piloted-graph-section__graph-container__bar-container__bar-graph--${index}`
        );
        bar.style.maxHeight = `0`;
        bar.style.opacity = `0`;

        setTimeout(() => {
          const bar = document.querySelector(
            `.piloted-graph-section__graph-container__bar-container__bar-graph--${index}`
          );
          bar.style.maxHeight = `${graphBarHeight}%`;
          bar.style.opacity = `1`;
          animateNumber(bar, graphBar.percentage, 500);
        }, 10);
      });
      switch (btnActive) {
        case "0":
          conditionsText.textContent = data[0][3].conditions;
          break;
        case "1":
          conditionsText.textContent = data[1][3].conditions;
          break;
        case "2":
          conditionsText.textContent = data[2][3].conditions;
          break;
        default:
          break;
      }
    }

    function animateNumber(element, endValue, duration) {
      const startValue = 0;
      const interval = 10;
      const iterations = duration / interval;
      let currentValue = startValue;
      const increment = (endValue - startValue) / iterations;

      function updateValue() {
        currentValue += increment;
        if (currentValue >= endValue) {
          element.textContent = `${endValue} %`;
        } else {
          element.textContent = `${currentValue.toFixed(1)} %`;
          setTimeout(updateValue, interval);
        }
      }

      updateValue();
    }

    const maxPercentage = data[1][data[1].length - 2].percentage;
    data[1].forEach((graphBar, index) => {
      if (index === 3) return;
      const graphBarHeight = (graphBar.percentage * 100) / maxPercentage;
      graphContainer.innerHTML += `
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${graphBarHeight}%"
      >
        ${graphBar.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${graphBar.description}
      </div>
    </div>
        `;
    });
  }
});
