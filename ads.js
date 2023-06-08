import components from "./1_components/ads.js";
import patterns from "./2_patterns/ads.js";
import blocks from "./3_blocks/ads.js";

const passwordRequire = () => {
  let text = prompt("Utilisateur ?");
  if (text !== window.atob("cHJlcHJvZA==")) {
    return passwordRequire();
  }
  if (text === "preprod") {
    let pwd = prompt(`Mot de passe ?`);
    if (pwd !== window.atob("NTBh")) {
      return passwordRequire();
    }
  }
};

passwordRequire();

const categories = [
  {
    name: "components",
    value: components
  },
  {
    name: "patterns",
    value: patterns
  },
  {
    name: "blocks",
    value: blocks
  }
];

categories.forEach((category) => {
  const categorySection = document.createElement("section");
  categorySection.classList.add("ads", category.name);

  const categoryTitle = document.createElement("h3");
  categoryTitle.innerText = category.name.toUpperCase();
  categorySection.appendChild(categoryTitle);

  category.value.forEach((element) => {
    const elementSection = document.createElement("div");
    elementSection.id = element.name;
    elementSection.classList.add("section", "ads");

    const elementTitle = document.createElement("h4");
    elementTitle.innerText = element.name;
    elementSection.appendChild(elementTitle);

    const elementTemplate = document.createElement("div");
    elementTemplate.innerHTML = element.template;
    elementTemplate.classList.add("sub-section", "ads");

    elementSection.appendChild(elementTemplate);

    categorySection.appendChild(elementSection);
  });

  document.querySelector("main.ads").appendChild(categorySection);
});
