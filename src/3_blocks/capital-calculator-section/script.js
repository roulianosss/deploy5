if (document.querySelector(".capital-calculator-section")) {
  const displayResult = document.querySelector(
    ".capital-calculator-section__result-value"
  );
  const allInputs = document.querySelectorAll(
    ".capital-calculator-section__cursors-container__cursor-container input"
  );
  const inputCapital = document.querySelector("#first-range");
  const inputEpargne = document.querySelector("#second-range");
  const inputDuration = document.querySelector("#third-range");
  const inputRendement = document.querySelector("#fourth-range");

  allInputs.forEach((input) =>
    input.addEventListener("input", function () {
      const value = ((this.value - this.min) / (this.max - this.min)) * 100;
      const label = input.value.split("");
      label.splice(-3, 0, " ");
      if ((input.name = "first-range")) {
        input.labels[0].textContent = `${label.join("")} ${input.getAttribute(
          "data-attr"
        )}`;
      }
      this.style.background = `linear-gradient(to right, #ff6442 0%, #ff6442 ${value}%, #fbe1da ${value}%, #fbe1da 100%)`;
      calculateResult();
    })
  );

  function calculateResult() {
    let capital = inputCapital.valueAsNumber;
    const duration = inputDuration.valueAsNumber;
    const rendement = inputRendement.valueAsNumber / 100;
    const epargne = inputEpargne.valueAsNumber;

    for (let i = 0; i < duration; i++) {
      for (let i = 0; i < 12; i++) {
        const interet = rendement * capital;
        capital += interet * (1 / 12) + epargne;
      }
    }

    capital = Math.round(capital / 1000) * 1000;
    let capitalToString = capital.toString().split("");
    capitalToString.splice(-3, 0, " ");
    // displayResult.textContent = `${capitalToString.join("")} €`;
    animateNumber(displayResult, capital, 500)

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
        element.textContent = `${numberWithSpaces(endValue)} €`;
      } else {
        element.textContent = `${numberWithSpaces(currentValue.toFixed(0))} €`;
        setTimeout(updateValue, interval);
      }
    }

    updateValue();
  }

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

  calculateResult();
}
