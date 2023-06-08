(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const t of c.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function a(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=a(r);fetch(r.href,c)}})();const B=`<a class="button button--primary" href="#"> Button</a>\r
\r
<a class="button button--primary button--small" href="#">Button</a>\r
\r
<a class="button button--secondary button--light-theme" href="#">Button</a>\r
\r
<a class="button button--secondary button--light-theme button--arrow" href="#">Button</a>\r
\r
<a class="button button--secondary button--light-theme button--small" href="#">Button</a>\r
\r
<a class="button button--secondary button--dark-theme" href="#">Button</a>\r
\r
<a class="button button--secondary button--dark-theme button--arrow" href="#">Button</a>\r
\r
<a class="button button--secondary button--dark-theme button--small" href="#">Button</a>\r
\r
<a class="button button--secondary button--dark-theme button--small button--arrow" href="#">Button</a>\r
\r
<button class="button button--secondary button--light-theme button--arrow" type="button">Button 'button'</button>\r
\r
<div class="input-button">\r
    <input class="button button--secondary button--light-theme button--arrow" type="submit" value="Button 'input'">\r
</div>\r
\r
<div class="input-button">\r
    <input class="button button--secondary button--dark-theme button--small button--arrow" type="submit"\r
           value="Button 'input'">\r
</div>\r
\r
\r
`,U=`<a class="icon-button icon-button--light-theme" href="#">\r
    <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
</a>\r
\r
<a class="icon-button icon-button--dark-theme" href="#">\r
    <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
</a>\r
`,O=`<button class="toggle-button toggle-button--primary">\r
    <span class="toggle-button__text">ToggleButton</span>\r
</button>\r
<button class="toggle-button toggle-button--primary toggle-button--active">\r
    <span class="toggle-button__text">ToggleButton</span>\r
</button>\r
\r
<button class="toggle-button toggle-button--secondary">\r
    <span class="toggle-button__text">ToggleButton</span>\r
</button>\r
<button class="toggle-button toggle-button--secondary toggle-button--active">\r
    <span class="toggle-button__text">ToggleButton</span>\r
</button>\r
\r
<button class="toggle-button toggle-button--secondary toggle-button--icon">\r
    <i class="toggle-button__icon fa-solid fa-grip"></i>\r
</button>\r
\r
<button class="toggle-button toggle-button--secondary toggle-button--icon toggle-button--active">\r
    <i class="toggle-button__icon fa-solid fa-grip"></i>\r
</button>\r
\r
`,G=`<a class="tab">\r
    <span class="tab__text">Tab</span>\r
</a>\r
\r
<button class="tab">\r
    <span class="tab__text">Tab</span>\r
</button>\r
\r
<button class="tab tab--active">\r
    <span class="tab__text">Tab</span>\r
</button>\r
\r
<button class="tab tab--pictogram">\r
    <svg class="tab__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <span class="tab__text">Tab</span>\r
</button>\r
\r
<button class="tab tab--active tab--pictogram">\r
    <svg class="tab__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <span class="tab__text">Tab</span>\r
</button>\r
\r
<button class="tab tab--active tab--pictogram tab--styled">\r
    <svg class="tab__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <span class="tab__text">Tab</span>\r
</button>`,D=`<a class="link" href="#">Link</a>\r
\r
<a class="link link--arrow" href="#">Link</a>`,H='<a class="file-link" href="#">FileLink</a>',Y='<span class="tag">Tag</span> <span class="tag active">Tag active</span>',J=[{name:"button",template:B},{name:"iconButton",template:U},{name:"toggleButton",template:O},{name:"tab",template:G},{name:"link",template:D},{name:"fileLink",template:H},{name:"tag",template:Y}],Q=`<div class="breadcrumb">\r
    <a class="link" href="#">Notre offre</a>\r
    <span class="breadcrumb__separator">/</span>\r
    <a class="link" href="#">Assurance vie</a>\r
    <span class="breadcrumb__separator">/</span>\r
    <a class="link" href="#">Altaprofits Vie</a>\r
</div>`,Z=`<div class="tabs-navigation">\r
    <a class="tab tab--active" href="#">\r
        <span class="tab__text">L'essentiel</span>\r
    </a>\r
    <a class="tab" href="#">\r
        <span class="tab__text">J'investis</span>\r
    </a>\r
    <a class="tab" href="#">\r
        <span class="tab__text">Tarification</span>\r
    </a>\r
    <a class="tab" href="#">\r
        <span class="tab__text">Fonctionnement</span>\r
    </a>\r
</div>`,W=`<a class="expand-menu-card expand-menu-card--logo expand-menu-card--primary" href="#">\r
    <div class="expand-menu-card__content">\r
        <p class="expand-menu-card__title">Altaprofits Vie</p>\r
        <p class="expand-menu-card__description">En un clic le meilleur de l’assurance vie</p>\r
    </div>\r
    <img alt="" class="logo" src="/assets/logos/generali_ws.png">\r
</a>\r
\r
<div class="expand-menu-card expand-menu-card--button">\r
    <div class="expand-menu-card__content">\r
        <p class="expand-menu-card__title">Autres supports</p>\r
        <p class="expand-menu-card__description">Vous gérez en toute autonomie votre contrat et choisissez les supports\r
            d’investissement qui le composent.</p>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--small button--arrow"\r
       href="#">Choisir vos supports d’investissement</a>\r
</div>\r
\r
<div class="expand-menu-card expand-menu-card--button expand-menu-card--secondary">\r
    <div class="expand-menu-card__content">\r
        <p class="expand-menu-card__title">Gestion pilotée</p>\r
        <p class="expand-menu-card__description">Vous déléguez la gestion de votre contrat à un\r
            assureur qui lui-même bénéficie des conseils d’une société de gestion. Vous\r
            définissez votre profil investisseur et l’assureur procède aux investissements.</p>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--small button--arrow"\r
       href="#">Choisir la gestion pilotée</a>\r
</div>`,K=`<div class="keypoint-card">\r
    <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <div class="keypoint-card__content">\r
        <h5 class="keypoint-card__title">Keypoint</h5>\r
        <p class="keypoint-card__description">A keypoint is a short and concise statement that summarizes the main idea\r
            of a text</p>\r
    </div>\r
</div>\r
\r
<div class="keypoint-card">\r
    <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <div class="keypoint-card__content">\r
        <p class="keypoint-card__description">A <b>keypoint</b> is a short and concise statement that <b>summarizes the\r
            main idea</b> of a text</p>\r
    </div>\r
</div>\r
\r
<div class="keypoint-card keypoint-card--small">\r
    <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <div class="keypoint-card__content">\r
        <h5 class="keypoint-card__title">Keypoint</h5>\r
        <p class="keypoint-card__description">A keypoint is a short and concise statement that summarizes the main idea\r
            of a text</p>\r
    </div>\r
</div>\r
\r
<div class="keypoint-card keypoint-card--large">\r
    <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
        <use href="/assets/pictograms/defensive.svg#picto"></use>\r
    </svg>\r
    <div class="keypoint-card__content">\r
        <h5 class="keypoint-card__title">Keypoint</h5>\r
        <p class="keypoint-card__description">A keypoint is a short and concise statement that summarizes the main idea\r
            of a text</p>\r
    </div>\r
</div>\r
`,X=`<a class="article-card" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <div class="article-card__title">\r
            <h5 class="link">Article</h5>\r
        </div>\r
        <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit\r
            amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
    </div>\r
</a>\r
\r
<div class="article-card">\r
    <a href="#">\r
        <img class="article-card__image" src="/assets/images/article_default.jpg">\r
        <div class="article-card__content">\r
            <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
            <div class="article-card__title">\r
                <h5 class="link">Article</h5>\r
            </div>\r
            <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc\r
                sit\r
                amet ultricies\r
                lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
        </div>\r
    </a>\r
    <div class="article-card__tags">\r
        <a class="tag" href="#">Category</a>\r
    </div>\r
</div>\r
\r
<a class="article-card" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <div class="article-card__title">\r
            <h5 class="link">Article</h5>\r
        </div>\r
        <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit\r
            amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
\r
        <div class="article-card__tags">\r
            <span class="tag">Category</span>\r
        </div>\r
    </div>\r
</a>\r
\r
<a class="article-card article-card--reversed" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <div class="article-card__tags">\r
            <span class="tag">Category</span>\r
        </div>\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <div class="article-card__title">\r
            <h5 class="link">Article</h5>\r
        </div>\r
    </div>\r
</a>\r
\r
<a class="article-card article-card--horizontal" href="#">\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__content">\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <div class="article-card__title">\r
            <h5 class="link">Article</h5>\r
        </div>\r
        <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit\r
            amet ultricies\r
            lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
        <div class="article-card__tags">\r
            <span class="tag">Category</span>\r
        </div>\r
    </div>\r
</a>\r
\r
<a class="article-card article-card--background" href="#">\r
    <div class="article-card__content">\r
        <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
        <div class="article-card__title">\r
            <h5 class="link">Article</h5>\r
        </div>\r
    </div>\r
    <img class="article-card__image" src="/assets/images/article_default.jpg">\r
    <div class="article-card__tags">\r
        <span class="tag">Category</span>\r
        <span class="tag">Category</span>\r
    </div>\r
</a>\r
`,nn=`<div class="award-item">\r
    <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
    <div class="award-item__content">\r
        <h5 class="award-item__title">Titres@PER</h5>\r
        <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
        <p class="award-item__jury">LE REVENU</p>\r
        <p class="award-item__date">2022</p>\r
    </div>\r
</div>\r
<div class="award-item">\r
    <img class="award-item__image" src="/assets/images/award_default.svg">\r
    <div class="award-item__content">\r
        <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
        <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
        <p class="award-item__jury">LE PARTICULIER</p>\r
        <p class="award-item__date">2022</p>\r
    </div>\r
</div>\r
`,en=`<div class="fee-card">\r
    <div class="fee-card__value">\r
        <span class="fee-card__number">0,30</span>\r
        <span class="fee-card__unit">%</span>\r
    </div>\r
    <p class="fee-card__list">Frais de mandat de gestion<br> du montant investi au titre de la Taxe<br> sur les\r
        transactions financières\r
    </p>\r
</div>\r
\r
<div class="fee-card fee-card--highlight">\r
    <div class="fee-card__value">\r
        <span class="fee-card__number">0</span>\r
        <span class="fee-card__unit">€</span>\r
    </div>\r
    <p class="fee-card__list">Frais d’entrée<br>Frais de versement<br>Frais d’arbitrage<br>Frais de sortie ou\r
        rachat\r
    </p>\r
</div>`,rn=`<div class="management-guided-card">\r
    <div class="management-guided-card__content">\r
        <h4 class="management-guided-card__title">Gestion pilotée</h4>\r
        <p class="management-guided-card__description">Déléguez la gestion de votre épargne à l’assureur qui\r
            prend conseil auprès d’une société de gestion d’actifs</p>\r
        <div class="management-guided-card__logos">\r
            <img alt="" class="logo" src="/assets/logos/generali_ws--fit.png">\r
            <img alt="" class="logo" src="/assets/logos/lazard_freres_gestion--fit.png">\r
        </div>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir la gestion pilotée</a>\r
</div>`,tn=`<div class="management-others-card">\r
    <div class="management-others-card__content">\r
        <h4 class="management-others-card__title">Autres supports d’investissement</h4>\r
        <p class="management-others-card__description">Vous choisissez librement les supports d'investissement qui\r
            composent votre contrat puis les gérez en toute autonomie</p>\r
        <div class="management-others-card__links">\r
            <a class="management-others-card__link" data-name="fonds-euros" href="#">Fonds en Euros</a>\r
            <a class="management-others-card__link" data-name="fonds-croissance" href="#">Fonds Croissance</a>\r
            <a class="management-others-card__link" data-name="unites-compte" href="#">Unités de Compte</a>\r
        </div>\r
        <div class="management-others-card__explainations">\r
            <div class="management-others-card__explaination" data-name="fonds-euros"><p>Géré par l’assureur, le <b>fonds\r
                en Euros</b> propose une gestion prudente qui associe une garantie\r
                en capital et un rendement définitivement acquis annuellement</p></div>\r
            <div class="management-others-card__explaination" data-name="fonds-croissance"><p>Géré par un assureur, le\r
                <b>fonds Croissance</b> associe une gestion prudente avec une garantie en capital au terme d’une période\r
                et une\r
                poche de diversification offrant un moteur de performance et un risque de perte en capital.</p></div>\r
            <div class="management-others-card__explaination" data-name="unites-compte"><p>Constituées de supports\r
                d’investissement variés comme les FCP, ETF, Actions, Immobilier… Les <b>Unités de Compte</b> offrent un\r
                potentiel de performance plus élevé en contrepartie d’un risque de perte en capital.</p></div>\r
        </div>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir les autres supports\r
        d’investissement</a>\r
</div>`,sn=`<div class="item-card-history">\r
  <div class="item-card-history__header">\r
    <h3>Item</h3>\r
  </div>\r
  <div class="item-card-history__body">\r
    <p>\r
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat\r
      voluptatem molestiae saepe architecto sit dolorum dolorem? Officiis\r
      voluptatibus doloremque aut nisi dolorum facere, laboriosam vel?\r
    </p>\r
  </div>\r
</div>\r
\r
<div class="item-card-support">\r
    <div class="item-card-support__card-header">\r
      <p class="item-card-support__card-header__title">Title</p>\r
    </div>\r
    <div class="item-card-support__informations">\r
      <p class="item-card-support__informations__percentage-rate">5%</p>\r
      <p class="item-card-support__informations__information-text">Lorem ipsum dolor sit amet.</p>\r
      \r
      <svg class="card-container__card-informations__logo">\r
        <use href="assets/logos/swisslife--fit.svg#logo"></use>\r
      </svg>\r
    </div>\r
  </div>\r
`,an=`<section class="toggle-text">\r
  <div class="accordion-container">\r
    <div class="accordion-container__accordion-btn">\r
      <h4>Lorem ipsum dolor sit.</h4>\r
      <svg\r
        width="25"\r
        height="13"\r
        viewBox="0 0 25 13"\r
        fill="none"\r
        xmlns="http://www.w3.org/2000/svg"\r
      >\r
        <path\r
          d="M2 1.5L12.4083 10.8619C12.8053 11.2191 13.4129 11.2012 13.7883 10.8214L23 1.5"\r
          stroke="currentColor"\r
          stroke-width="3"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </div>\r
    <div class="accordion-container__content">\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h4>\r
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum laborum blanditiis vero?\r
          </h4>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis assumenda amet tempora voluptates? Magni, qui minus. Voluptatem quidem quaerat tempora, sapiente vel voluptas, sequi, dicta ullam doloremque illo hic obcaecati commodi alias dolores? Possimus, beatae. Accusamus :<br />\r
          <li>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit aut mollitia, at possimus non nesciunt quas? Suscipit sunt dolorum provident quibusdam.\r
          </li>\r
          <li>\r
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum corrupti rem sit nesciunt. Iste sed quaerat eveniet. Dignissimos, dolorem.\r
          </li>\r
          <li>Lorem ipsum dolor sit.</li>\r
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>\r
          <li>\r
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ut cupiditate eius, labore in a reiciendis eligendi quidem.\r
          </li>\r
          <li>\r
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, modi. Illum soluta non libero eos!\r
          </li>\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h4>\r
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum laborum blanditiis vero?\r
          </h4>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis assumenda amet tempora voluptates? Magni, qui minus. Voluptatem quidem quaerat tempora, sapiente vel voluptas, sequi, dicta ullam doloremque illo hic obcaecati commodi alias dolores? Possimus, beatae. Accusamus :<br />\r
          <li>\r
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit aut mollitia, at possimus non nesciunt quas? Suscipit sunt dolorum provident quibusdam.\r
          </li>\r
          <li>\r
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio laborum corrupti rem sit nesciunt. Iste sed quaerat eveniet. Dignissimos, dolorem.\r
          </li>\r
          <li>Lorem ipsum dolor sit.</li>\r
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>\r
          <li>\r
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ut cupiditate eius, labore in a reiciendis eligendi quidem.\r
          </li>\r
          <li>\r
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, modi. Illum soluta non libero eos!\r
          </li>\r
        </div>\r
      </div>\r
    </div>\r
    \r
  </div>\r
</section>\r
`,on=[{name:"breadcrumb",template:Q},{name:"tabsNavigation",template:Z},{name:"expandMenuCard",template:W},{name:"keypointCard",template:K},{name:"articleCard",template:X},{name:"itemCard",template:sn},{name:"awardItem",template:nn},{name:"feeCard",template:en},{name:"managementGuidedCard",template:rn},{name:"managementOthersCard",template:tn},{name:"toggleText",template:an}],cn=`<header class="header">\r
    <div class="header__overlay"></div>\r
    <div class="header__mask"></div>\r
    <div class="header__content">\r
        <a class="header__logo">\r
            <img alt="Altaprofits" src="/assets/logos/altaprofits__header.svg">\r
        </a>\r
        <div class="header__navigation">\r
            <div class="header__actions">\r
                <div class="header__searchbar"></div>\r
                <a class="button button--primary button--small" href="#">Souscrire en ligne</a>\r
                <a class="button button--secondary button--light-theme button--small" href="#">Mon Espace Client</a>\r
                <div class="header__contact">\r
                    <a class="link --tiny" href="#">01 44 77 12 14</a>\r
                    <a class="link --tiny --semibold" href="#">Être contacté</a>\r
                </div>\r
            </div>\r
            <nav class="header__menu menu">\r
                <div class="menu__item menu__item--full">\r
                    <a class="menu__name" href="javascript:">Notre offre</a>\r
                    <div class="expand-menu">\r
                        <div class="expand-menu__bar"></div>\r
                        <div class="expand-menu__content">\r
                            <div class="expand-menu__sub-menu">\r
                                <a class="link link--arrow" data-name="submenu-1" href="javascript:">ASSURANCE VIE</a>\r
                                <a class="link link--arrow" data-name="submenu-2" href="javascript:">RETRAITE</a>\r
                                <a class="link link--arrow" data-name="submenu-3" href="javascript:">SCPI</a>\r
                                <a class="link link--arrow" data-name="submenu-4" href="javascript:">AUTRES</a>\r
                            </div>\r
                            <div class="expand-menu__sub-content" data-name="subcontent-1">\r
                                <div class="expand-menu__sub-item sub-item">\r
                                    <div class="sub-item__cards">\r
                                        <a class="expand-menu-card expand-menu-card--logo expand-menu-card--primary"\r
                                           href="#">\r
                                            <div class="expand-menu-card__content">\r
                                                <p class="expand-menu-card__title">Altaprofits Vie</p>\r
                                                <p class="expand-menu-card__description">En un clic le meilleur de\r
                                                    l’assurance vie</p>\r
                                            </div>\r
                                            <svg class="logo">\r
                                                <use href="/assets/logos/generali.svg#logo"></use>\r
                                            </svg>\r
                                        </a>\r
                                        <a class="expand-menu-card expand-menu-card--logo expand-menu-card--primary"\r
                                           href="#">\r
                                            <div class="expand-menu-card__content">\r
                                                <p class="expand-menu-card__title">Digital Vie Prime</p>\r
                                                <p class="expand-menu-card__description">Un contrat ciblant les critères\r
                                                    environnementaux et sociaux</p>\r
                                            </div>\r
                                            <svg class="logo">\r
                                                <use href="/assets/logos/suravenir.svg#logo"></use>\r
                                            </svg>\r
                                        </a>\r
                                        <a class="expand-menu-card expand-menu-card--logo expand-menu-card--primary"\r
                                           href="#">\r
                                            <div class="expand-menu-card__content">\r
                                                <p class="expand-menu-card__title">Titres@Vie</p>\r
                                                <p class="expand-menu-card__description">Un contrat pour les experts</p>\r
                                            </div>\r
                                            <svg class="logo">\r
                                                <use href="/assets/logos/swisslife.svg#logo"></use>\r
                                            </svg>\r
                                        </a>\r
                                        <a class="expand-menu-card expand-menu-card--logo expand-menu-card--primary"\r
                                           href="#">\r
                                            <div class="expand-menu-card__content">\r
                                                <p class="expand-menu-card__title">Generali Espace Lux Vie France</p>\r
                                                <p class="expand-menu-card__description">Un contrat pour diversifier\r
                                                    géographiquement votre patrimoine</p>\r
                                            </div>\r
                                            <svg class="logo">\r
                                                <use href="/assets/logos/generali.svg#logo"></use>\r
                                            </svg>\r
                                        </a>\r
                                    </div>\r
                                    <div class="sub-item__buttons">\r
                                        <a class="button button--secondary button--light-theme button--small" href="#">Voir\r
                                            le guide de l’assurance vie</a>\r
                                        <a class="button button--primary button--small" href="#">Faire une\r
                                            simulation</a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="expand-menu__sub-content expand-menu__sub-content__hidden"\r
                                 data-name="subcontent-2">\r
                                <div class="expand-menu__sub-item sub-item">\r
                                    <div class="sub-item__cards">\r
                                        <a class="expand-menu-card expand-menu-card--logo expand-menu-card--primary"\r
                                           href="#">\r
                                            <div class="expand-menu-card__content">\r
                                                <p class="expand-menu-card__title">Titres@PER</p>\r
                                                <p class="expand-menu-card__description">En un clic le meilleur du\r
                                                    PER</p>\r
                                            </div>\r
                                            <svg class="logo">\r
                                                <use href="/assets/logos/swisslife.svg#logo"></use>\r
                                            </svg>\r
                                        </a>\r
                                    </div>\r
                                    <div class="sub-item__buttons">\r
                                        <a class="button button--secondary button--light-theme button--small" href="#">Voir\r
                                            le guide de l’épargne retraite</a>\r
                                        <a class="button button--primary button--small" href="#">Faire une\r
                                            simulation</a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="expand-menu__sub-content expand-menu__sub-content__hidden"\r
                                 data-name="subcontent-3">\r
                                <div class="expand-menu__sub-item sub-item">\r
                                    <div class="sub-item__cards">\r
                                        <div class="expand-menu-card expand-menu-card--button">\r
                                            <div class="expand-menu-card__content">\r
                                                <p class="expand-menu-card__title">Les atouts de la SCPI</p>\r
                                                <p class="expand-menu-card__description">Au travers d’une SCPI, vous\r
                                                    investissez directement en immobilier, qu’il soit résidentiel ou\r
                                                    d’entreprises, en France comme en Europe.</p>\r
                                            </div>\r
                                            <a class="button button--secondary button--light-theme button--small button--arrow"\r
                                               href="#">En savoir plus</a>\r
                                        </div>\r
                                        <div class="expand-menu-card expand-menu-card--button">\r
                                            <div class="expand-menu-card__content">\r
                                                <p class="expand-menu-card__title">Notre sélection de SCPI</p>\r
                                                <p class="expand-menu-card__description">Une solution simple et\r
                                                    accessible\r
                                                    pour diversifier son patrimoine immobilier.</p>\r
                                            </div>\r
                                            <a class="button button--secondary button--light-theme button--small button--arrow"\r
                                               href="#">En savoir plus</a>\r
                                        </div>\r
                                    </div>\r
                                    <div class="sub-item__buttons">\r
                                        <a class="button button--secondary button--light-theme button--small" href="#">Voir\r
                                            le guide des SCPI</a>\r
                                        <a class="button button--primary button--small" href="#">Souscrire avec un\r
                                            conseiller</a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                            <div class="expand-menu__sub-content expand-menu__sub-content__hidden"\r
                                 data-name="subcontent-4">\r
                                subcontent-4\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="menu__item menu__item--left" data-position="left">\r
                    <a class="menu__name" href="javascript:">Supports d’investissement</a>\r
                    <div class="expand-menu">\r
                        <div class="expand-menu__bar"></div>\r
                        <div class="expand-menu__content">\r
                            <div class="expand-menu__column">\r
                                <h5 class="expand-menu__title">Découvrez nos types de gestion</h5>\r
                                <div class="expand-menu__links expand-menu__links--row">\r
                                    <div class="expand-menu-card expand-menu-card--secondary">\r
                                        <div class="expand-menu-card__content">\r
                                            <p class="expand-menu-card__title">Gestion pilotée</p>\r
                                            <p class="expand-menu-card__description">Vous déléguez la gestion de votre\r
                                                contrat à\r
                                                un\r
                                                assureur qui lui-même bénéficie des conseils d’une société de gestion.\r
                                                Vous\r
                                                définissez votre profil investisseur et l’assureur procède aux\r
                                                investissements.</p>\r
                                        </div>\r
                                        <a class="button button--secondary button--light-theme button--small button--arrow"\r
                                           href="#">Choisir la gestion pilotée</a>\r
                                    </div>\r
                                    <div class="expand-menu-card">\r
                                        <div class="expand-menu-card__content">\r
                                            <p class="expand-menu-card__title">Autres supports</p>\r
                                            <p class="expand-menu-card__description">Vous gérez en toute autonomie votre\r
                                                contrat\r
                                                et choisissez les supports\r
                                                d’investissement qui le composent.</p>\r
                                        </div>\r
                                        <a class="button button--secondary button--light-theme button--small button--arrow"\r
                                           href="#">Choisir vos supports d’investissement</a>\r
                                    </div>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="menu__item">\r
                    <a class="menu__name" href="javascript:">L’épargne et vous</a>\r
                    <div class="expand-menu">\r
                        <div class="expand-menu__bar"></div>\r
                        <div class="expand-menu__content">\r
                            <div class="expand-menu__links">\r
                                <a class="expand-menu__link link" href="#">Guide de l'épargne</a>\r
                                <a class="expand-menu__link link" href="#">Conseils d’épargne</a>\r
                                <a class="expand-menu__link link" href="#">FAQ</a>\r
                                <a class="expand-menu__link link" href="#">Lexique</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="menu__item">\r
                    <a class="menu__name" href="javascript:">Alta News</a>\r
                    <div class="expand-menu">\r
                        <div class="expand-menu__bar"></div>\r
                        <div class="expand-menu__content">\r
                            <div class="expand-menu__links">\r
                                <a class="expand-menu__link link" href="#">Actualités financières</a>\r
                                <a class="expand-menu__link link" href="#">Paroles d'experts</a>\r
                                <a class="expand-menu__link link" href="#">On parle de nous</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
                <div class="menu__item">\r
                    <a class="menu__name" href="javascript:">Nous connaître</a>\r
\r
                    <div class="expand-menu">\r
                        <div class="expand-menu__bar"></div>\r
                        <div class="expand-menu__content">\r
                            <div class="expand-menu__links">\r
                                <a class="expand-menu__link link" href="#">Qui sommes-nous ?</a>\r
                                <a class="expand-menu__link link" href="#">Nos engagements durables</a>\r
                                <a class="expand-menu__link link" href="#">Nous rejoindre</a>\r
                                <a class="expand-menu__link link" href="#">Nos partenaires</a>\r
                                <a class="expand-menu__link link" href="#">Contactez-nous</a>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </nav>\r
        </div>\r
    </div>\r
</header>`,ln=`<footer class="footer">\r
    <div class="footer__socials socials">\r
        <h5 class="socials__title">Retrouvez nous sur les réseaux sociaux</h5>\r
        <div class="socials__content">\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-twitter"></i>\r
            </a>\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-facebook"></i>\r
            </a>\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-linkedin"></i>\r
            </a>\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-instagram"></i>\r
            </a>\r
            <a class="socials__item" href="">\r
                <i class="fa-brands fa-youtube"></i>\r
            </a>\r
        </div>\r
    </div>\r
    <div class="footer__navigation navigation">\r
        <div class="navigation__project">\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Quel est votre projet d’épargne&nbsp;?</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Me construire un patrimoine</a></li>\r
                        <li><a class="link" href="#">Financer un projet</a></li>\r
                        <li><a class="link" href="#">Préparer ma retraite</a></li>\r
                        <li><a class="link" href="#">Transmettre un patrimoine particulier</a></li>\r
                        <li><a class="link" href="#">Obtenir des revenus réguliers immédiatement</a></li>\r
                    </ul>\r
                </div>\r
                <a class="button button--primary button--small" href="#">Faire une simulation</a>\r
            </div>\r
        </div>\r
        <div class="navigation__menu">\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Assurance Vie</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Altaprofits Vie</a></li>\r
                        <li><a class="link" href="#">Digital Vie Prime</a></li>\r
                        <li><a class="link" href="#">Titres@Vie</a></li>\r
                        <li><a class="link" href="#">Autres</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">Retraite</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Titres@PER</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">SCPI</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Notre sélection de SCPI</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">Capitalisation</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Altaprofits Capitalisation</a></li>\r
                        <li><a class="link" href="#">Digital Capi Prime</a></li>\r
                        <li><a class="link" href="#">Titres@Capi</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">Défiscalisation</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Les atouts de la défiscalisation</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Supports d’investissements</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Gestion pilotée</a></li>\r
                        <li><a class="link" href="#">Autres supports d'investissements</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">L’épargne et vous</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Guide de l’épargne</a></li>\r
                        <li><a class="link" href="#">Conseils d’épargne</a></li>\r
                        <li><a class="link" href="#">FAQ</a></li>\r
                        <li><a class="link" href="#">Lexique</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Alta News</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Actualités économiques</a></li>\r
                        <li><a class="link" href="#">Paroles d’experts</a></li>\r
                        <li><a class="link" href="#">La presse en parle</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <div class="navigation__column column">\r
                <div class="navigation__section section">\r
                    <p class="section__title">Nous connaître</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Qui sommes-nous ?</a></li>\r
                        <li><a class="link" href="#">Nos engagements durables</a></li>\r
                        <li><a class="link" href="#">Nos partenaires</a></li>\r
                        <li><a class="link" href="#">Nous rejoindre</a></li>\r
                        <li><a class="link" href="#">Contactez-nous</a></li>\r
                    </ul>\r
                </div>\r
                <div class="navigation__section section">\r
                    <p class="section__title">Vous êtes journaliste ?</p>\r
                    <ul class="section__content">\r
                        <li><a class="link" href="#">Espace presse</a></li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <a class="icon-button icon-button--dark-theme" href="#">\r
                <i class="icon-button__icon fa-solid fa-arrow-up-long"></i>\r
            </a>\r
        </div>\r
    </div>\r
    <div class="footer__resume resume">\r
        <img alt="" class="resume__logo" src="/assets/logos/altaprofits__full--dark-theme.svg">\r
        <p class="resume__description">\r
            Société de Conseil en Gestion de Patrimoine sur internet depuis 1999\r
        </p>\r
        <div class="resume__contact contact">\r
            <p class="contact__title">Nous restons à votre disposition</p>\r
            <ul class="contact__content">\r
                <li><p>Du lundi au Vendredi de 9h à 19h</p></li>\r
                <li><a class="link" href="#">01 44 77 12 14</a></li>\r
            </ul>\r
        </div>\r
        <div class="resume__trustpilot">\r
            //WIDGET TRUSTPILOT\r
        </div>\r
    </div>\r
    <div class="footer__legal legal">\r
        <p>© Altaprofits 2022</p>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">35 rue de Rome 75008 Paris</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">information@altaprofits.fr</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">Informations légales</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">Réclamations</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">Cookies</a>\r
        <span class="legal__separator"></span>\r
        <a class="link" href="#">Vos données personnelles</a>\r
    </div>\r
</footer>`,dn=`<div class="wrapper wrapper--66_33">\r
    <h3 class="wrapper__title">wrapper 66/33</h3>\r
    <div class="wrapper__content">\r
        <section class="awards-section wrap">\r
            <h3 class="awards-section__title">Déjà récompensé 10 fois en 2022</h3>\r
            <div class="awards-section__slider">\r
                <div class="awards-section__content">\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">Titres@PER</h5>\r
                            <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
                            <p class="award-item__jury">LE REVENU</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <a class="button button--secondary button--dark-theme" href="#">Voir les récompenses</a>\r
        </section>\r
        <section class="reviews-section wrap">\r
            <h3 class="reviews-section__title">Nos clients en parlent mieux que nous</h3>\r
            <div class="reviews-section__content">\r
                //TRUSTPILOT WIDGET\r
            </div>\r
            <a class="button button--secondary button--light-theme"\r
               href="https://fr.trustpilot.com/review/www.altaprofits.com">Voir\r
                tous les avis</a>\r
        </section>\r
    </div>\r
</div>\r
\r
<div class="wrapper wrapper--50_50">\r
    <h3 class="wrapper__title">wrapper 50/50</h3>\r
    <div class="wrapper__content">\r
        <section class="awards-section wrap">\r
            <h3 class="awards-section__title">Déjà récompensé 10 fois en 2022</h3>\r
            <div class="awards-section__slider">\r
                <div class="awards-section__content">\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">Titres@PER</h5>\r
                            <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
                            <p class="award-item__jury">LE REVENU</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <a class="button button--secondary button--dark-theme" href="#">Voir les récompenses</a>\r
        </section>\r
        <section class="reviews-section wrap">\r
            <h3 class="reviews-section__title">Nos clients en parlent mieux que nous</h3>\r
            <div class="reviews-section__content">\r
                //TRUSTPILOT WIDGET\r
            </div>\r
            <a class="button button--secondary button--light-theme"\r
               href="https://fr.trustpilot.com/review/www.altaprofits.com">Voir\r
                tous les avis</a>\r
        </section>\r
    </div>\r
</div>\r
\r
<div class="wrapper wrapper--33_66">\r
    <h3 class="wrapper__title">wrapper 33/66</h3>\r
\r
    <div class="wrapper__content">\r
        <section class="awards-section wrap">\r
            <h3 class="awards-section__title">Déjà récompensé 10 fois en 2022</h3>\r
            <div class="awards-section__slider">\r
                <div class="awards-section__content">\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">Titres@PER</h5>\r
                            <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
                            <p class="award-item__jury">LE REVENU</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                    <div class="award-item">\r
                        <img class="award-item__image" src="/assets/images/award_default.svg">\r
                        <div class="award-item__content">\r
                            <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                            <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                            <p class="award-item__jury">LE PARTICULIER</p>\r
                            <p class="award-item__date">2022</p>\r
                        </div>\r
                    </div>\r
                </div>\r
            </div>\r
            <a class="button button--secondary button--dark-theme" href="#">Voir les récompenses</a>\r
        </section>\r
        <section class="reviews-section wrap">\r
            <h3 class="reviews-section__title">Nos clients en parlent mieux que nous</h3>\r
            <div class="reviews-section__content">\r
                //TRUSTPILOT WIDGET\r
            </div>\r
            <a class="button button--secondary button--light-theme"\r
               href="https://fr.trustpilot.com/review/www.altaprofits.com">Voir\r
                tous les avis</a>\r
        </section>\r
    </div>\r
</div>\r
\r
\r
<div class="wrapper wrapper--alone">\r
    <h3 class="wrapper__title">wrapper alone</h3>\r
    <div class="wrapper__content">\r
        <div class="management-guided-card wrap">\r
            <div class="management-guided-card__content">\r
                <h4 class="management-guided-card__title">Gestion pilotée</h4>\r
                <p class="management-guided-card__description">Vous déléguez la gestion de votre contrat à un assureur\r
                    qui\r
                    lui-même bénéficie des conseils d’une société de gestion.\r
                    Vous définissez votre profil investisseur et l’assureur procède aux investissements.</p>\r
            </div>\r
            <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir la gestion\r
                pilotée</a>\r
        </div>\r
    </div>\r
</div>`,pn=`<section class="home-hero-banner">\r
    <div class="home-hero-banner__slides">\r
        <div class="home-hero-banner__slide" data-name="finance-project">\r
            <div class="home-hero-banner__content">\r
                <h1 class="home-hero-banner__title --display">Immobilier, études des enfants, voyage...<br>\r
                    Comment financer vos projets ?</h1>\r
                <a class="button button--primary" href="#">Faire une simulation</a>\r
            </div>\r
            <img alt="Altaprofits Vie" class="home-hero-banner__image"\r
                 src="/assets/images/generali_espace_lux_vie_france_banner.jpg">\r
        </div>\r
    </div>\r
    <div class="home-hero-banner__navigation">\r
        <button class="tab tab--pictogram" data-name="build-heritage">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/home.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Constituer un patrimoine</span>\r
        </button>\r
        <button class="tab tab--pictogram tab--active" data-name="finance-project">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/suitcase.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Financer un projet</span>\r
        </button>\r
        <button class="tab tab--pictogram" data-name="prepare-retirement">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/holiday.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Préparer ma retraite</span>\r
        </button>\r
        <button class="tab tab--pictogram" data-name="transmit-heritage">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/family.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Transmettre un patrimoine</span>\r
        </button>\r
        <button class="tab tab--pictogram" data-name="obtain-regular-income">\r
            <svg class="tab__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/hand_euro.svg#picto"></use>\r
            </svg>\r
            <span class="tab__text">Obtenir des revenus réguliers</span>\r
        </button>\r
    </div>\r
</section>`,un=`<section class="promo-banner-section">\r
    <h3>Promotion </h3>\r
    <div class="promo-banner-section__items-section">\r
        <div class="promo-banner-section__items-section__left-arrow" style="display: none;">\r
            <svg class="left-arrow" width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M12 2L2.63806 12.4083C2.28092 12.8053 2.29879 13.4129 2.67864 13.7883L12 23" stroke="#001329" stroke-width="3" stroke-linecap="round"></path>\r
            </svg>\r
        </div>\r
        <div class="promo-banner-section__items-section__items">\r
            <div class="promo-banner-section__items-section__items__item" style="transform: translateX(0%);">\r
                <a href="#">\r
                    <img alt="" class="promo-banner-section__image" src="/assets/images/promo_banner.jpg">\r
                </a>\r
            </div>\r
        </div>\r
        <div class="promo-banner-section__items-section__right-arrow" style="display: none;">\r
            <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M2 23L11.3619 12.5917C11.7191 12.1947 11.7012 11.5871 11.3214 11.2117L2 2" stroke="#001329" stroke-width="3" stroke-linecap="round"></path>\r
            </svg>\r
        </div>\r
    </div>\r
</section>\r
\r
<section class="promo-banner-section">\r
    <h3>Promotions 1 </h3>\r
    <div class="promo-banner-section__items-section">\r
        <div class="promo-banner-section__items-section__left-arrow" style="display: block;">\r
            <svg class="left-arrow" width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M12 2L2.63806 12.4083C2.28092 12.8053 2.29879 13.4129 2.67864 13.7883L12 23" stroke="#001329" stroke-width="3" stroke-linecap="round"></path>\r
            </svg>\r
        </div>\r
        <div class="promo-banner-section__items-section__items">\r
            <div class="promo-banner-section__items-section__items__item" style="transform: translateX(0%);">\r
                <a href="#">\r
                    <img alt="" class="promo-banner-section__image" src="/assets/images/promo_banner.jpg">\r
                </a>\r
            </div>\r
            <div class="promo-banner-section__items-section__items__item" style="transform: translateX(0%);">\r
                <a href="#">\r
                    <img alt="" class="promo-banner-section__image" src="/assets/images/promo_banner.jpg">\r
                </a>\r
            </div>\r
            <div class="promo-banner-section__items-section__items__item" style="transform: translateX(0%);">\r
                <a href="#">\r
                    <img alt="" class="promo-banner-section__image" src="/assets/images/promo_banner.jpg">\r
                </a>\r
            </div>\r
        </div>\r
        <div class="promo-banner-section__items-section__right-arrow" style="display: block;">\r
            <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M2 23L11.3619 12.5917C11.7191 12.1947 11.7012 11.5871 11.3214 11.2117L2 2" stroke="#001329" stroke-width="3" stroke-linecap="round"></path>\r
            </svg>\r
        </div>\r
    </div>\r
</section>\r
\r
<section class="promo-banner-section">\r
    <h3>Promotions 2</h3>\r
    <div class="promo-banner-section__items-section">\r
        <div class="promo-banner-section__items-section__left-arrow" style="display: block;">\r
            <svg class="left-arrow" width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M12 2L2.63806 12.4083C2.28092 12.8053 2.29879 13.4129 2.67864 13.7883L12 23" stroke="#001329" stroke-width="3" stroke-linecap="round"></path>\r
            </svg>\r
        </div>\r
        <div class="promo-banner-section__items-section__items">\r
            <div class="promo-banner-section__items-section__items__item" style="transform: translateX(0%);">\r
                <a href="#">\r
                    <img alt="" class="promo-banner-section__image" src="/assets/images/promo_banner.jpg">\r
                </a>\r
            </div>\r
            <div class="promo-banner-section__items-section__items__item" style="transform: translateX(0%);">\r
                <a href="#">\r
                    <img alt="" class="promo-banner-section__image" src="/assets/images/promo_banner.jpg">\r
                </a>\r
            </div>\r
            <div class="promo-banner-section__items-section__items__item" style="transform: translateX(0%);">\r
                <a href="#">\r
                    <img alt="" class="promo-banner-section__image" src="/assets/images/promo_banner.jpg">\r
                </a>\r
            </div>\r
        </div>\r
        <div class="promo-banner-section__items-section__right-arrow" style="display: block;">\r
            <svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                <path d="M2 23L11.3619 12.5917C11.7191 12.1947 11.7012 11.5871 11.3214 11.2117L2 2" stroke="#001329" stroke-width="3" stroke-linecap="round"></path>\r
            </svg>\r
        </div>\r
    </div>\r
</section>`,_n=`<section class="company-value-section">\r
    <h2 class="company-value-section__title">Vos besoins sont nos priorités</h2>\r
    <div class="company-value-section__content">\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/award.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <h5 class="keypoint-card__title">ENGAGÉ</h5>\r
                <p class="keypoint-card__description">Élu Meilleur Conseil Epargne en 2022</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/advisor.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <h5 class="keypoint-card__title">PROCHE</h5>\r
                <p class="keypoint-card__description">Des conseillers en gestion de patrimoine disponibles pour vous\r
                    accompagner dans vos projets</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/phone.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <h5 class="keypoint-card__title">SIMPLE</h5>\r
                <p class="keypoint-card__description">Souscription, transaction et consultation 100% en ligne</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/offensive.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <h5 class="keypoint-card__title">INNOVANT</h5>\r
                <p class="keypoint-card__description">Des offres d'épargne multi-assureurs, multirécompensées</p>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,mn=`<section class="contextual-region advice-intro-section">\r
    <div class="advice-intro-section__container">\r
        <div class="advice-intro-section__content">\r
            <img src="/assets/images/advice-intro.png" class="advice-intro-section__content__image" alt=""/>\r
            <div class="advice-intro-section__content__title">\r
                <div class="advice-intro-section__content__date">\r
                    10 février 2023\r
                </div>\r
                <h3 class="title">Cinq bonnes raisons de vous intéresser au Plan d’Épargne Retraite</h3>\r
                <div class="article-card__tags">\r
                    <a class="article-card__tag tag" href="/l-epargne-et-vous/conseils-d-epargne?categorie=404">PER</a>\r
                </div>\r
                <div class="subtitle">\r
                    Cyrille CHAMBRON, gérant allocataire chez Amundi\r
                </div>\r
            </div>\r
        </div>\r
        <div class="advice-intro-section__texte">\r
            <p>\r
                Le plan d’épargne retraite, ou PER, est le contrat conçu pour vous permettre d’épargner afin de bénéficier d’un complément de revenus lorsque vous aurez quitté la vie active. Découvrez pourquoi il est incontournable dans votre stratégie de préparation de la retraite.\r
            </p>\r
        </div>\r
        <div class="advice-intro-section__sommaire">\r
            <h4 class="subtitle">SOMMAIRE</h4>\r
            <ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <li><a href="#1" class="link">1- Vous alimentez votre PER à votre rythme</a></li>\r
                <li><a href="#2" class="link">2- Vous disposez plus librement de votre épargne</a></li>\r
                <li><a href="#3" class="link">3- Vous bénéficiez d’une réduction d’impôt sur vos versements</a></li>\r
                <li><a href="#4" class="link">4- Vous pouvez transférer vos anciens contrats retraite sur votre PER</a></li>\r
                <li><a href="#5" class="link">5- Vous pouvez déléguer la gestion financière de votre contrat</a></li>\r
            </ul>\r
        </div>\r
        <div class="advice-intro-section__texte_fl"><p>Le Plan d’Epargne Retraite (PER), mis en place dans le cadre de la loi PACTE (Plan d’Action pour la Croissance et la Transformation des Entreprises), est un instrument idéal pour vous constituer une retraite complémentaire. Il a plusieurs objectifs, notamment la transparence, l’harmonisation et la simplification de votre stratégie de retraite.</p><p>Le PER, avec ses trois compartiments, peut regrouper tous les produits retraite auxquels vous avez pu cotiser au cours de votre vie professionnelle (PERP, Madelin, Art 83 etc… en fonction de votre statut de salarié ou TNS). Cotisations facultatives ou obligatoires, elles y trouvent leur place. Ce dispositif d’harmonisation est un atout fort.</p><p>Si vous hésitez encore à ouvrir un PER voici cinq bonnes raisons de le faire :</p></div>\r
        <div class="advice-intro-section__lien">\r
            <a href="#2" class="button button--secondary button--light-theme">en savoir plus</a>\r
        </div>\r
    </div>\r
</section>`,vn=`<section class="advices-section">\r
    <h2 class="advices-section__title">Consultez nos conseils d’épargne</h2>\r
    <div class="advices-section__content">\r
        <a class="article-card" href="#">\r
            <img class="article-card__image" src="/assets/images/article_assurance_vie.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>26/07/2022</span></p>\r
                <div class="article-card__title">\r
                    <h5 class="link">L’assurance vie : un outil pour transmettre votre patrimoine à un proche sans lien\r
                        de parenté</h5>\r
                </div>\r
                <p class="article-card__excerpt">Pour transmettre une partie de votre patrimoine à un proche sans lien\r
                    de parenté, la meilleure solut</p>\r
            </div>\r
            <span class="article-card__tag tag">Assurance Vie</span>\r
        </a>\r
        <a class="article-card" href="#">\r
            <img class="article-card__image" src="/assets/images/article_per.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>26/07/2022</span></p>\r
                <div class="article-card__title">\r
                    <h5 class="link">3 raisons d’ouvrir une assurance vie ou un PER à votre enfant mineur</h5>\r
                </div>\r
                <p class="article-card__excerpt">Pour transmettre une partie de votre patrimoine à un proche sans lien\r
                    de parenté, la meilleure solut</p>\r
            </div>\r
            <span class="article-card__tag tag">PER</span>\r
        </a>\r
        <a class="article-card" href="#">\r
            <img class="article-card__image" src="/assets/images/article_scpi.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>26/07/2022</span></p>\r
                <div class="article-card__title">\r
                    <h5 class="link">Donation : transmettez de votre vivant pour optimiser l’aide apportée à vos\r
                        proches</h5>\r
                </div>\r
                <p class="article-card__excerpt">Pour transmettre une partie de votre patrimoine à un proche sans lien\r
                    de parenté, la meilleure solut</p>\r
            </div>\r
            <span class="article-card__tag tag">SCPI</span>\r
        </a>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrez tous nos conseils</a>\r
</section>`,gn=`<section class="insurance-partners-section">\r
    <h3 class="insurance-partners-section__title">Plus de 20 ans d’expertise à votre service avec des partenaires\r
        assureurs</h3>\r
    <div class="insurance-partners-section__content">\r
        <img alt="" class="insurance-partners-section__logo logo" src="/assets/logos/generali--fit.png">\r
        <img alt="" class="insurance-partners-section__logo logo" src="/assets/logos/suravenir--fit.png">\r
        <img alt="" class="insurance-partners-section__logo logo" src="/assets/logos/swisslife--fit.png">\r
    </div>\r
</section>`,hn=`<section class="investment-disclaimer-section investment-disclaimer-section--info">\r
    <h3 class="investment-disclaimer-section__title">Ce qu'il faut savoir avant d'investir</h3>\r
    <div class="investment-disclaimer-section__content">\r
        <div class="investment-disclaimer-section__text"><p>Produit présentant un risque de perte en capital.<br><br>\r
            Les performances passées ne préjugent pas des performances futures et ne sont pas constantes dans le temps.\r
            Les performances sont nettes de frais de gestion des contrats.<br><br>\r
            L'investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur\r
            valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l'évolution des\r
            marchés financiers.<br><br>\r
            L'assureur s'engage sur le nombre d'unités de compte et non sur leur valeur qu'il ne garantit pas.<br><br>\r
            Document publicitaire dépourvu de valeur contractuelle.</p></div>\r
    </div>\r
</section>`,fn=`<section class="awards-section">\r
    <h3 class="awards-section__title">Déjà récompensé 10 fois en 2022</h3>\r
    <div class="awards-section__slider">\r
        <div class="awards-section__content">\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_titres_per_le_revenu.jpg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">Titres@PER</h5>\r
                    <p class="award-item__name">Trophée d'or - Meilleurs PER Individuel sur Internet</p>\r
                    <p class="award-item__jury">LE REVENU</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_default.svg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                    <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                    <p class="award-item__jury">LE PARTICULIER</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_default.svg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                    <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                    <p class="award-item__jury">LE PARTICULIER</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_default.svg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                    <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                    <p class="award-item__jury">LE PARTICULIER</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
            <div class="award-item">\r
                <img class="award-item__image" src="/assets/images/award_default.svg">\r
                <div class="award-item__content">\r
                    <h5 class="award-item__title">DIGITAL VIE PRIME</h5>\r
                    <p class="award-item__name">Victoire de Bronze "Contrats Internet"</p>\r
                    <p class="award-item__jury">LE PARTICULIER</p>\r
                    <p class="award-item__date">2022</p>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
    <a class="button button--secondary button--dark-theme" href="#">Voir les récompenses</a>\r
</section>`,bn=`<section class="reviews-section">\r
    <h3 class="reviews-section__title">Nos clients en parlent mieux que nous</h3>\r
    <div class="reviews-section__content">\r
        //TRUSTPILOT WIDGET\r
    </div>\r
    <a class="button button--secondary button--light-theme" href="https://fr.trustpilot.com/review/www.altaprofits.com">Voir\r
        tous les avis</a>\r
</section>`,wn=`<section class="partners-news-section">\r
    <div class="partners-news-section__header">\r
        <h2 class="partners-news-section__title">Actualités</h2>\r
        <p class="partners-news-section__subtitle">Lazard Frères Gestion analyse au travers des actualités, la situation\r
            et\r
            les perspectives à court terme de l'économie nationale et internationale.</p>\r
    </div>\r
    <div class="partners-news-section__content">\r
        <a class="article-card article-card--horizontal" href="#">\r
            <img class="article-card__image" src="/assets/images/article_default.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
                <div class="article-card__title">\r
                    <h5 class="link">Article</h5>\r
                </div>\r
                <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,\r
                    nunc sit\r
                    amet ultricies\r
                    lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
                <div class="article-card__tags">\r
                    <span class="tag">Category</span>\r
                </div>\r
            </div>\r
        </a>\r
        <a class="article-card article-card--horizontal" href="#">\r
            <img class="article-card__image" src="/assets/images/article_default.jpg">\r
            <div class="article-card__content">\r
                <p class="article-card__date">Publié le <span>1/02/2023</span></p>\r
                <div class="article-card__title">\r
                    <h5 class="link">Article</h5>\r
                </div>\r
                <p class="article-card__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,\r
                    nunc\r
                    sit\r
                    amet ultricies\r
                    lacinia, nisl nisl aliquet nisl, vitae aliquet nisl nisl sit amet lorem. </p>\r
                <div class="article-card__tags">\r
                    <span class="tag">Category</span>\r
                </div>\r
            </div>\r
        </a>\r
    </div>\r
</section>`,yn=`<section class="hero-banner">\r
    <div class="breadcrumb">\r
        <a class="link" href="#">Alta News</a>\r
        <span class="breadcrumb__separator">/</span>\r
        <a class="link" href="#">Paroles d'experts</a>\r
    </div>\r
    <div class="hero-banner__content">\r
        <div class="hero-banner__column">\r
            <div class="hero-banner__row">\r
                <h1 class="hero-banner__title --display">Paroles d'experts</h1>\r
            </div>\r
        </div>\r
    </div>\r
    <img alt="Altaprofits Vie" class="hero-banner__image"\r
         src="/assets/images/paroles-d-experts-header.png">\r
</section>\r
\r
<section class="hero-banner hero-banner--catchline">\r
    <div class="breadcrumb">\r
        <a class="link" href="#">Supports d'investissements</a>\r
        <span class="breadcrumb__separator">/</span>\r
        <a class="link" href="#">Gestion pilotée</a>\r
    </div>\r
    <div class="hero-banner__content">\r
        <div class="hero-banner__column">\r
            <div class="hero-banner__row">\r
                <h1 class="hero-banner__title --display">La gestion pilotée</h1>\r
            </div>\r
            <h4 class="hero-banner__catchline">Déléguez la gestion de vos contrats</h4>\r
        </div>\r
    </div>\r
    <img alt="Altaprofits Vie" class="hero-banner__image"\r
         src="/assets/images/gestion-pilotee.png">\r
</section>\r
\r
<section class="hero-banner hero-banner--product">\r
    <div class="breadcrumb">\r
        <a class="link" href="#">Notre offre</a>\r
        <span class="breadcrumb__separator">/</span>\r
        <a class="link" href="#">Assurance vie</a>\r
        <span class="breadcrumb__separator">/</span>\r
        <a class="link" href="#">Generali Espace Lux Vie France</a>\r
    </div>\r
    <div class="hero-banner__content">\r
        <div class="hero-banner__column">\r
            <div class="hero-banner__row">\r
                <h1 class="hero-banner__title --display">Generali Espace Lux Vie France</h1>\r
                <img alt="" class="hero-banner__logo logo" src="/assets/logos/generali.png">\r
            </div>\r
            <h4 class="hero-banner__catchline">Les atouts du Luxembourg en un clic</h4>\r
        </div>\r
        <a class="button button--primary" href="#">Faire une simulation</a>\r
    </div>\r
    <img alt="Altaprofits Vie" class="hero-banner__image"\r
         src="/assets/images/generali_espace_lux_vie_france_banner.jpg">\r
</section>\r
`,xn=`<section class="product-insurance-partner-section">\r
    <h3 class="product-insurance-partner-section__title"><span\r
            class="product-insurance-partner-section__name">GENERALI</span>, le partenaire assureur</h3>\r
    <div class="product-insurance-partner-section__content">\r
        <div class="product-insurance-partner-section__logo_container">\r
            <img alt="" class="product-insurance-partner-section__logo logo" src="/assets/logos/generali--fit.png">\r
        </div>\r
        <p class="product-insurance-partner-section__description">Generali Vie est une filiale à 100% de Generali\r
            France, implantée en France depuis près de deux siècles. Sa solidité financière, sa dynamique\r
            d’innovation mais aussi son implantation historique dans l'Hexagone en font un acteur incontournable.\r
            C’est notamment le 1er assureur sur le marché Internet de l’épargne.</p>\r
    </div>\r
</section>`,Ln=`<section class="brochure-section">\r
    <div class="brochure-section__content">\r
        <div class="brochure-section__image_container">\r
            <img src="/assets/images/gestion-epargne-lazard-freres-gestion.png" alt=""/>\r
        </div>\r
        <div class="brochure-section__description">\r
            <h3 class="brochure-section__title">La gestion de votre épargne avec notre partenaire</h3>\r
            <div class="brochure-section__description">\r
                <ul>\r
                    <li>Accessible sans frais supplémentaire en assurance vie</li>\r
                    <li>Dès 300 euros d’investissement</li>\r
                    <li>Un choix parmi 18 profils de gestion permettant de répondre<br> avec précision à l’ensemble de vos besoins.</li>\r
                    <li>Des portefeuilles investis en OPC et/ou titres vifs</li>\r
                    <li>Un historique de performances</li>\r
                </ul>\r
            </div>\r
            <a class="button button--secondary button--dark-theme" href="/sites/default/files/2023-05/Lazard-freres-gestion-brochure.pdf">Télécharger la brochure</a>\r
        </div>\r
    </div>\r
</section>`,Cn=`<section class="since-partner-section">\r
    <div class="since-partner-section__content">\r
        <div class="since-partner-section__image_container">\r
            <img src="/assets/images/since.png" alt=""/>\r
        </div>\r
        <div class="since-partner-section__description">\r
            <h3 class="since-partner-section__title">Depuis plus de 20 ans, nous sélectionnons, pour vous, des\r
                partenaires rigoureux et performants</h3>\r
            <p class="since-partner-section__description">Nous nous engageons à vous proposer des produits et services\r
                conçus avec nos partenaires assureurs et sociétés de gestion d'actifs de renom.</p>\r
        </div>\r
    </div>\r
</section>`,kn=`<section class="premium-partner-section"> <!-- no-padding-top no-padding-bottom -->\r
    <div class="premium-partner-section__content">\r
        <h3 class="premium-partner-section__title">Nos partenaires privilégiés</h3>\r
        <p class="premium-partner-section__description">Nous mettons à votre disposition plusieurs mandats de gestion\r
            pilotée avec des spécialistes de la gestion d'actifs.</p>\r
        <div class="premium-partner-section__logos_container">\r
            <a class="premium-partner-section__logos_container__logo" href="#">\r
                <img class="logo logo-border" alt="" src="/assets/logos/amundi_am--fit.png">\r
            </a>\r
            <a class="premium-partner-section__logos_container__logo" href="#">\r
                <img class="logo logo-border" alt="" src="/assets/logos/generali_ws--fit.png">\r
            </a>\r
            <a class="premium-partner-section__logos_container__logo" href="#">\r
                <img class="logo logo-border" alt="" src="/assets/logos/lazard_freres_gestion--fit.png">\r
            </a>\r
        </div>\r
        <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir la gestion pilotée</a>\r
    </div>\r
</section>`,qn=`<section class="links-section">\r
  <div class="links-section__container">\r
    <h3 class="links-section__container__title">Assurance vie</h3>\r
    <div class="links-section__container__border">\r
      <ul>\r
        <li><a class="link" href="#">Quel est l'intérêt de souscrire à une assurance vie ?</a></li>\r
        <li><a class="link" href="#">Quelles sont les avantages de l’assurance vie ?</a></li>\r
        <li><a class="link" href="#">Comment fonctionne une assurance vie ?</a></li>\r
        <li><a class="link" href="#">Quels sont les supports d’investissement présents dans une assurance vie ?</a></li>\r
        <li><a class="link" href="#">Est-il possible de perdre de l'argent avec une assurance vie ?</a></li>\r
        <li><a class="link" href="#">Quels sont les frais d’une assurance vie ?</a></li>\r
        <li><a class="link" href="#">Quelles sont les meilleures assurance vie ?</a></li>\r
        <li><a class="link" href="#">En quoi l’assurance vie est un outil de préparation de sa succession ?</a></li>\r
        <li><a class="link" href="#">Est-ce intéressant de transférer son contrat d’assurance vie ?</a></li>\r
        <li><a class="link" href="#">Comment choisir et gérer son contrat d’assurance vie ?</a></li>\r
      </ul>\r
    </div>\r
    <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrez notre sélection de SCPI</a>\r
  </div>\r
</section>\r
`,An=`<section class="product-intro-section">\r
    <div class="product-intro-section__container">\r
        <!--<div class="product-intro-section__content">\r
            <img src="/assets/images/product-intro.png" class="product-intro-section__content__image" alt=""/>\r
            <div class="product-intro-section__content__title">\r
                <div class="product-intro-section__content__date">\r
                    10 février 2023\r
                </div>\r
                <h3 class="title">Cinq bonnes raisons de vous intéresser au Plan d’Épargne Retraite</h3>\r
                <div class="article-card__tags">\r
                    <a class="article-card__tag tag" href="/l-epargne-et-vous/conseils-d-epargne?categorie=404">PER</a>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="product-intro-section__texte">\r
            <p>texte</p>\r
        </div>-->\r
        <div class="product-intro-section__sommaire" style="background-image:url(/assets/images/generali_espace_lux_vie_france_banner.jpg);">\r
            <h4 class="title">Comment fonctionne le contrat Altaprofits Vie :</h4>\r
            <ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                <li><a href="#contrat-accessible" class="link">1- Un contrat accessible</a></li>\r
                <li><a href="#changer-supports-en-cours-de-contrats" class="link">2- Peut-on changer de supports en cours de contrats ?</a></li>\r
                <li><a href="#options-de-gestion" class="link">3- Options de gestion</a></li>\r
                <li><a href="#comment-recuperer-son-argent" class="link">4- Comment récupérer son argent ?</a></li>\r
                <li><a href="#garantie-plancher" class="link">5- Qu’est-ce qu’une garantie Plancher ?</a></li>\r
                <li><a href="#a-quel-moment-argent-travaille" class="link">6- À partir de quel moment mon argent commence à travailler ?</a></li>\r
                <li><a href="#denouement-contrat" class="link">7- Dénouement du contrat</a></li>\r
                <li><a href="#pourquoi-designer-plusieurs-beneficiaires" class="link">8- Pourquoi désigner un ou plusieurs bénéficiaires ?</a></li>\r
            </ul>\r
        </div>\r
        <!--<div class="product-intro-section__texte_fl"><p>Le Plan d’Epargne Retraite (PER), mis en place dans le cadre de la loi PACTE (Plan d’Action pour la Croissance et la Transformation des Entreprises), est un instrument idéal pour vous constituer une retraite complémentaire. Il a plusieurs objectifs, notamment la transparence, l’harmonisation et la simplification de votre stratégie de retraite.</p><p>Le PER, avec ses trois compartiments, peut regrouper tous les produits retraite auxquels vous avez pu cotiser au cours de votre vie professionnelle (PERP, Madelin, Art 83 etc… en fonction de votre statut de salarié ou TNS). Cotisations facultatives ou obligatoires, elles y trouvent leur place. Ce dispositif d’harmonisation est un atout fort.</p><p>Si vous hésitez encore à ouvrir un PER voici cinq bonnes raisons de le faire :</p></div>\r
        <div class="product-intro-section__lien">\r
            <a href="#2" class="button button--secondary button--light-theme">en savoir plus</a>\r
        </div>-->\r
    </div>\r
</section>`,En=`<section class="product-contractual-documentation-section">\r
    <h3 class="product-contractual-documentation-section__title">Documentation contractuelle du contrat <span\r
            class="product-contractual-documentation-section__name">Altaprofits Vie</span>\r
    </h3>\r
    <div class="product-contractual-documentation-section__content">\r
        <a class="file-link" href="#">Conditions générales</a>\r
        <a class="file-link" href="#">Document d’Informations Clés (DIC)</a>\r
        <a class="file-link" href="#">Liste des supports financiers</a>\r
        <a class="file-link" href="#">Performances de la gestion pilotée</a>\r
    </div>\r
</section>`,Pn=`<section class="product-management-section">\r
    <h2 class="product-management-section__title">Choisissez le mode de gestion de votre contrat</h2>\r
    <div class="product-management-section__content product-management-section__content--two">\r
        <div class="management-guided-card">\r
            <div class="management-guided-card__content">\r
                <h4 class="management-guided-card__title">Gestion pilotée</h4>\r
                <p class="management-guided-card__description">Déléguez la gestion de votre épargne à l’assureur qui\r
                    prend conseil auprès d’une société de gestion d’actifs</p>\r
                <div class="management-guided-card__logos">\r
                    <img alt="" class="logo" src="/assets/logos/generali_ws--fit.png">\r
                    <img alt="" class="logo" src="/assets/logos/lazard_freres_gestion--fit.png">\r
                </div>\r
            </div>\r
            <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir la gestion\r
                pilotée</a>\r
        </div>\r
        <div class="management-others-card">\r
            <div class="management-others-card__content">\r
                <h4 class="management-others-card__title">Autres supports d’investissement</h4>\r
                <p class="management-others-card__description">Vous choisissez librement les supports d'investissement\r
                    qui\r
                    composent votre contrat puis les gérez en toute autonomie</p>\r
                <div class="management-others-card__links">\r
                    <a class="management-others-card__link" data-name="fonds-euros" href="#">Fonds en Euros</a>\r
                    <a class="management-others-card__link" data-name="fonds-croissance" href="#">Fonds Croissance</a>\r
                    <a class="management-others-card__link" data-name="unites-compte" href="#">Unités de Compte</a>\r
                </div>\r
                <div class="management-others-card__explainations">\r
                    <div class="management-others-card__explaination" data-name="fonds-euros"><p>Géré par l’assureur, le\r
                        <b>fonds\r
                            en Euros</b> propose une gestion prudente qui associe une garantie\r
                        en capital et un rendement définitivement acquis annuellement</p></div>\r
                    <div class="management-others-card__explaination" data-name="fonds-croissance"><p>Géré par un\r
                        assureur, le\r
                        <b>fonds Croissance</b> associe une gestion prudente avec une garantie en capital au terme d’une\r
                        période\r
                        et une\r
                        poche de diversification offrant un moteur de performance et un risque de perte en capital.</p>\r
                    </div>\r
                    <div class="management-others-card__explaination" data-name="unites-compte"><p>Constituées de\r
                        supports\r
                        d’investissement variés comme les FCP, ETF, Actions, Immobilier… Les <b>Unités de Compte</b>\r
                        offrent un\r
                        potentiel de performance plus élevé en contrepartie d’un risque de perte en capital.</p></div>\r
                </div>\r
            </div>\r
            <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir les autres supports\r
                d’investissement</a>\r
        </div>\r
    </div>\r
</section>`,Sn=`<section class="product-advantages-section">\r
    <h2 class="product-advantages-section__title">Les atouts <span class="product-advantages-section__name">Altaprofits Vie</span>\r
    </h2>\r
    <div class="product-advantages-section__content">\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/money.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Accessible dès 300€ à l’ouverture et 100 % en ligne</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/zero_euro.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Droit d’entrée, frais d’arbitrage, frais de versement</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/defensive.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">2 fonds euros et 1 fonds Croissance privilégiant la sécurité de\r
                    votre épargne</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/holiday.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Sérénité et simplicité avec la gestion pilotée</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/association.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Investir tout en agissant pour le climat</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/award.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description">Un contrat récompensé par la presse spécialisée</p>\r
            </div>\r
        </div>\r
    </div>\r
    <ul class="product-advantages-section__links">\r
        <li><a class="button button--primary" href="#">Faire une simulation</a></li>\r
        <li><a class="button button--secondary button--light-theme" href="#">Demander conseil</a></li>\r
    </ul>\r
</section>`,zn=`<section class="product-fees-section">\r
    <h2 class="product-fees-section__title">Optimisez vos rendements avec des frais réduits</h2>\r
    <div class="product-fees-section__content">\r
        <div class="fee-card fee-card--highlight">\r
            <div class="fee-card__value">\r
                <span class="fee-card__number">0</span>\r
                <span class="fee-card__unit">€</span>\r
            </div>\r
            <p class="fee-card__list">Frais d’entrée<br>Frais de versement<br>Frais d’arbitrage<br>Frais de sortie ou\r
                rachat\r
            </p>\r
        </div>\r
        <a class="button button--primary" href="#">Faire une simulation</a>\r
        <div class="product-fees-section__secondary">\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">0,30</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de mandat de gestion<br> du montant investi au titre de la Taxe<br> sur\r
                    les transactions financières\r
                </p>\r
            </div>\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">0,75</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de gestion sur les fonds euros<br>\r
                    Frais de gestion sur les unités de compte en gestion libre\r
            </div>\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">0,84</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de gestion sur les fonds euros<br>\r
                    Frais de gestion sur les unités de compte en gestion libre\r
                </p>\r
            </div>\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">0,94</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de gestion sur les actions (titres vifs)</p>\r
            </div>\r
            <div class="fee-card">\r
                <div class="fee-card__value">\r
                    <span class="fee-card__number">1,04</span>\r
                    <span class="fee-card__unit">%</span>\r
                </div>\r
                <p class="fee-card__list">Frais de gestion sur les ETF</p>\r
            </div>\r
        </div>\r
        <a class="file-link" href="#">Pour plus de transparence, consultez l'annexe des frais du contrat Altaprofits\r
            Vie</a>\r
    </div>\r
</section>`,Rn=`<section class="faq-redirection-section">\r
    <h3 class="faq-redirection-section__title">Vos questions les plus fréquentes</h3>\r
    <a class="button button--secondary button--dark-theme button--arrow" href="#">Consulter la FAQ</a>\r
</section>`,In=`<section class="management-advantages-section">\r
    <div class="management-advantages-section__header">\r
        <h2 class="management-advantages-section__title">Composez votre portefeuille</h2>\r
        <p class="management-advantages-section__subtitle">Si vous souhaiter gérer vous même en toute autonomie votre\r
            contrat</p>\r
    </div>\r
    <div class="management-advantages-section__content">\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/advisor.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description"><b>Vous avez accès au détail de votre profil,</b> aux opérations\r
                    réalisées et à un rapport trimestriel</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/bank_cards.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description"><b>Vous sélectionnez des supports d’investissement</b> par zones\r
                    géographiques et secteurs d’activités</p>\r
            </div>\r
        </div>\r
        <div class="keypoint-card">\r
            <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/couple.svg#picto"></use>\r
            </svg>\r
            <div class="keypoint-card__content">\r
                <p class="keypoint-card__description"><b>Vous choisissez un profil</b> qui correspond le mieux à votre\r
                    profil investisseur et vos objectifs.</p>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,Vn=`<section class="management-plus-section">\r
    <h3 class="management-plus-section__title">Les + Altaprofits</h3>\r
    <div class="management-plus-section__content">\r
        <ul>\r
            <li>Fonds croissance, ETF, actions (CAC40, SBF120, Eurostoxx50), Private\r
                Equity présents dans les contrats,\r
            </li>\r
            <li>Des supports immobiliers, fonds structurés, fonds Croissance ou encore\r
                fonds euros compatibles avec des mandats de gestion pilotée,\r
            </li>\r
            <li>De l’information financière en temps réel,</li>\r
            <li>Une veille financière et des référencements de supports\r
                d’investissement permanents,\r
            </li>\r
            <li>La possibilité d’arbitrer en ligne. Un mouvement passé avant 16h\r
                réalisé dès le lendemain,\r
            </li>\r
            <li>Des supports d’investissements durables.</li>\r
        </ul>\r
    </div>\r
</section>\r
`,Tn=`<div class="management-others-overview-section wrapper wrapper--66-33">\r
    <section class="management-advantages-section">\r
        <div class="management-advantages-section__header">\r
            <h2 class="management-advantages-section__title">Composez votre portefeuille</h2>\r
            <p class="management-advantages-section__subtitle">Si vous souhaiter gérer vous même en toute autonomie\r
                votre contrat</p>\r
        </div>\r
        <div class="management-advantages-section__content">\r
            <div class="keypoint-card">\r
                <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                    <use href="/assets/pictograms/advisor.svg#picto"></use>\r
                </svg>\r
                <div class="keypoint-card__content">\r
                    <p class="keypoint-card__description"><b>Vous avez accès au détail de votre profil,</b> aux\r
                        opérations\r
                        réalisées et à un rapport trimestriel</p>\r
                </div>\r
            </div>\r
            <div class="keypoint-card">\r
                <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                    <use href="/assets/pictograms/bank_cards.svg#picto"></use>\r
                </svg>\r
                <div class="keypoint-card__content">\r
                    <p class="keypoint-card__description"><b>Vous sélectionnez des supports d’investissement</b> par\r
                        zones\r
                        géographiques et secteurs d’activités</p>\r
                </div>\r
            </div>\r
            <div class="keypoint-card">\r
                <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                    <use href="/assets/pictograms/couple.svg#picto"></use>\r
                </svg>\r
                <div class="keypoint-card__content">\r
                    <p class="keypoint-card__description"><b>Vous choisissez un profil</b> qui correspond le mieux à\r
                        votre\r
                        profil investisseur et vos objectifs.</p>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
    <section class="management-plus-section">\r
        <h3 class="management-plus-section__title">Les + Altaprofits</h3>\r
        <div class="management-plus-section__content">\r
            <ul>\r
                <li>Fonds croissance, ETF, actions (CAC40, SBF120, Eurostoxx50), Private\r
                    Equity présents dans les contrats,\r
                </li>\r
                <li>Des supports immobiliers, fonds structurés, fonds Croissance ou encore\r
                    fonds euros compatibles avec des mandats de gestion pilotée,\r
                </li>\r
                <li>De l’information financière en temps réel,</li>\r
                <li>Une veille financière et des référencements de supports\r
                    d’investissement permanents,\r
                </li>\r
                <li>La possibilité d’arbitrer en ligne. Un mouvement passé avant 16h\r
                    réalisé dès le lendemain,\r
                </li>\r
                <li>Des supports d’investissements durables.</li>\r
            </ul>\r
        </div>\r
    </section>\r
</div>`,jn=`<div class="management-guided-overview-section wrapper wrapper--66-33">\r
    <section class="management-advantages-section">\r
        <div class="management-advantages-section__header">\r
            <h2 class="management-advantages-section__title">Confiez-nous la gestion de votre contrat</h2>\r
            <p class="management-advantages-section__subtitle">Si vous manquez de temps, d’envie ou de connaissances\r
                financières pour\r
                sélectionner vos supports d’investissements, vous pouvez confier la\r
                gestion de votre contrat à l’assureur qui prendra conseil auprès d’un\r
                professionnel d’une société de gestion.</p>\r
        </div>\r
        <div class="management-advantages-section__content">\r
            <div class="keypoint-card">\r
                <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                    <use href="/assets/pictograms/bank_cards.svg#picto"></use>\r
                </svg>\r
                <div class="keypoint-card__content">\r
                    <p class="keypoint-card__description"><b>Vous gardez la maîtrise de votre contrat</b> vous pouvez à\r
                        tout moment changer pour la gestion libre</p>\r
                </div>\r
            </div>\r
            <div class="keypoint-card">\r
                <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                    <use href="/assets/pictograms/file.svg#picto"></use>\r
                </svg>\r
                <div class="keypoint-card__content">\r
                    <p class="keypoint-card__description"><b>Vous avez accès au détail de votre profil,</b> aux\r
                        opérations réalisées et à un rapport trimestriel</p>\r
                </div>\r
            </div>\r
            <div class="keypoint-card">\r
                <svg class="keypoint-card__pictogram" viewBox="0 0 64 64">\r
                    <use href="/assets/pictograms/couple.svg#picto"></use>\r
                </svg>\r
                <div class="keypoint-card__content">\r
                    <p class="keypoint-card__description"><b>Vous choisissez un profil</b> qui correspond le mieux à\r
                        votre profil investisseur et vos objectifs.\r
                    </p>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
    <section class="management-plus-section">\r
        <h3 class="management-plus-section__title">Les + Altaprofits</h3>\r
        <div class="management-plus-section__content">\r
            <ul>\r
                <li>Accessible dès 300€</li>\r
                <li>Des mandats de gestion en accord avec vos convictions : des profils ETF ISR avec Amundi, une gestion\r
                    « cœur satellite » dans les mandats proposés par Generali Wealth Solutions et un savoir-faire\r
                    patrimonial avec Lazard Frères Gestion\r
                </li>\r
                <li>La possibilité d’associer fonds en euros, fonds croissance, fonds structuré, immobilier, Private\r
                    Equity avec un mandat de gestion pilotée\r
                </li>\r
                <li>Des reportings mensuels ou trimestriels sur la performance et la stratégie du gérant et une\r
                    webconférence semestrielle pour répondre à toutes vos questions\r
                </li>\r
            </ul>\r
        </div>\r
    </section>\r
\r
</div>`,Mn=`<section class="management-guided-partners-section">\r
    <div class="management-guided-partners-section__header">\r
        <h3 class="management-guided-partners-section__title">Nos partenaires de gestion pilotée</h3>\r
        <p class="management-guided-partners-section__subtitle">\r
            Déléguez la gestion de votre épargne à l’assureur qui prend conseil auprès\r
            d’une société de gestion d’actifs</p>\r
    </div>\r
    <div class="management-guided-partners-section__content">\r
        <img alt="" class="management-guided-partners-section__logo logo" src="/assets/logos/amundi_am--fit.png">\r
        <img alt="" class="management-guided-partners-section__logo logo" src="/assets/logos/generali_ws--fit.png">\r
        <img alt="" class="management-guided-partners-section__logo logo"\r
             src="/assets/logos/lazard_freres_gestion--fit.png">\r
    </div>\r
</section>`,Fn=`<section class="contracts-piloted-section-container">\r
  <div class="contracts-piloted-container">\r
    <h3 class="contracts-piloted-container__title">\r
      Investissez facilement en déléguant la gestion de votre contrat\r
    </h3>\r
    <p class="contracts-piloted-container__description">\r
      Choisissez votre type de contrat\r
    </p>\r
    <div class="btns-container">\r
      <div class="btns-container__first-choice-container">\r
        <div\r
          class="btns-container__first-choice-container__btn"\r
          data-attr="assuranceVie"\r
        >\r
          <p class="btns-container__first-choice-container__btn__title">\r
            Assurance Vie\r
          </p>\r
        </div>\r
        <div\r
          class="btns-container__first-choice-container__btn"\r
          data-attr="capitalisation"\r
        >\r
          <p class="btns-container__first-choice-container__btn__title">\r
            Capitalisation\r
          </p>\r
        </div>\r
        <div\r
          class="btns-container__first-choice-container__btn"\r
          data-attr="planEpargneRetraite"\r
        >\r
          <p class="btns-container__first-choice-container__btn__title">\r
            Plan Épargne Retraite (PER)\r
          </p>\r
        </div>\r
      </div>\r
      <div class="btns-container__second-choice-container hidden">\r
        <div\r
          class="btns-container__second-choice-container__btns-type-second-choice-container assuranceVie"\r
        >\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titresVie"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@Vie\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              un contrat pour les experts\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="altaprofitsVie"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Altaprofits Vie\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              En un clic, le meilleur de l’assurance vie\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="digitalViePrime"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Digital Vie Prime\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat ciblant les critères environnementaux et sociaux\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="espaceLuxVie"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Generali Espace Lux Vie\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Les atouts du Luxembourg en un clic\r
            </p>\r
          </div>\r
        </div>\r
        <div\r
          class="btns-container__second-choice-container__btns-type-second-choice-container capitalisation hidden"\r
        >\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titreCapi"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@Capi\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat pour les experts\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="altaprofitsCapitalisation"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Altaprofits Capitalisation\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              En un clic, le meilleur de l’assurance vie\r
            </p>\r
          </div>\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="digitalCapiPrime"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Digital Capi Prime\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat ciblant les critères environnementaux et sociaux\r
            </p>\r
          </div>\r
        </div>\r
        <div\r
          class="btns-container__second-choice-container__btns-type-second-choice-container planEpargneRetraite hidden"\r
        >\r
          <div\r
            class="btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titrePER"\r
          >\r
            <h3\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@PER\r
            </h3>\r
            <p\r
              class="btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat pour les experts\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="results-container hidden">\r
    <div class="filters-container">\r
      <div class="filters-container__btns-container">\r
        <div\r
          class="filters-container__btns-container__btn active"\r
          data-attr="prudent"\r
        >\r
          <p class="filters-container__btns-container__btn__title">\r
            Profil prudent\r
          </p>\r
        </div>\r
        <div\r
          class="filters-container__btns-container__btn"\r
          data-attr="balanced"\r
        >\r
          <p class="filters-container__btns-container__btn__title">\r
            Profil équilibré\r
          </p>\r
        </div>\r
        <div class="filters-container__btns-container__btn" data-attr="dynamic">\r
          <p class="filters-container__btns-container__btn__title">\r
            Profil dynamique\r
          </p>\r
        </div>\r
      </div>\r
      <div class="filters-container__parameters-container">\r
        <div>\r
          <button\r
            class="toggle-button toggle-button--secondary toggle-button--icon toggle-button--active btn-parameter1"\r
          >\r
            <i class="toggle-button__icon fa-solid fa-grip"></i>\r
          </button>\r
          <button\r
            class="toggle-button toggle-button--secondary toggle-button--icon btn-parameter2"\r
          >\r
            <i class="toggle-button__icon fa-solid fa-equals"></i>\r
          </button>\r
        </div>\r
\r
        <div\r
          class="filters-container__parameters-container__btn-date-container"\r
        >\r
          <select\r
            class="filters-container__parameters-container__btn-date-container__btn-date"\r
            name="year"\r
            id=""\r
          >\r
            <option value="2022">2022</option>\r
            <option value="2022">2021</option>\r
          </select>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="cards-display-container"></div>\r
    <div class="array-display-container hidden"></div>\r
    <div class="white-card-container">\r
      <h3 class="white-card-container__title">Carte Blanche</h3>\r
      <img src="./assets/images/graphique-placeholder.png" alt="placeholder" />\r
      <p class="white-card-container__description">\r
        L'orientation de Gestion Pilotée (mandat d'arbitrage) que vous avez\r
        choisie est risque 5. Équilibré entre produits de taux et actions, ce\r
        profil est destiné aux souscripteurs qui recherchent de la souplesse\r
        dans l'allocation de leur investissement. L'horizon de placement\r
        conseillé pour ce type de gestion est au minimum de cinq (5) ans.\r
      </p>\r
      <section class="distribution-funds-array-section">\r
        <div class="distribution-funds-array-section__btn">\r
          <h3>\r
            Répartition des fonds\r
            <svg\r
              width="24"\r
              height="24"\r
              viewBox="0 0 24 24"\r
              fill="none"\r
              xmlns="http://www.w3.org/2000/svg"\r
            >\r
              <path\r
                d="M23.625 12C23.625 18.4217 18.4199 23.625 12 23.625C5.58014 23.625 0.375 18.4217 0.375 12C0.375 5.58202 5.58014 0.375 12 0.375C18.4199 0.375 23.625 5.58202 23.625 12ZM12.312 4.21875C9.75741 4.21875 8.12813 5.29486 6.84872 7.20741C6.68297 7.45519 6.73842 7.78936 6.97598 7.9695L8.6025 9.20278C8.84648 9.3878 9.19411 9.34378 9.38367 9.10331C10.221 8.04122 10.7952 7.42533 12.0697 7.42533C13.0274 7.42533 14.2118 8.04164 14.2118 8.97023C14.2118 9.67223 13.6323 10.0328 12.6868 10.5629C11.5841 11.181 10.125 11.9504 10.125 13.875V14.0625C10.125 14.3731 10.3769 14.625 10.6875 14.625H13.3125C13.6231 14.625 13.875 14.3731 13.875 14.0625V14C13.875 12.6659 17.7743 12.6103 17.7743 9C17.7743 6.28116 14.9541 4.21875 12.312 4.21875ZM12 15.8438C10.811 15.8438 9.84375 16.811 9.84375 18C9.84375 19.1889 10.811 20.1562 12 20.1562C13.189 20.1562 14.1562 19.1889 14.1562 18C14.1562 16.811 13.189 15.8438 12 15.8438Z"\r
                fill="white"\r
              />\r
            </svg>\r
          </h3>\r
          <svg\r
            width="25"\r
            height="13"\r
            viewBox="0 0 25 13"\r
            fill="none"\r
            xmlns="http://www.w3.org/2000/svg"\r
          >\r
            <path\r
              d="M2 1.5L12.4083 10.8619C12.8053 11.2191 13.4129 11.2012 13.7883 10.8214L23 1.5"\r
              stroke="white"\r
              stroke-width="3"\r
              stroke-linecap="round"\r
            />\r
          </svg>\r
        </div>\r
        <div class="distribution-funds-array-section__content">\r
          <div\r
            class="distribution-funds-array-section__content__array-container"\r
          >\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--title"\r
            >\r
              <h4>OPCVM Actions Amérique du Nord</h4>\r
              <p>3.00%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--content"\r
            >\r
              <div>\r
                <h4>FEDERAL INDICIEL US P</h4>\r
                <p>( FR0000988057, <span>fiche</span> )</p>\r
              </div>\r
              <p>1.00%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--content"\r
            >\r
              <div>\r
                <h4>LAZARD ACTIONS AMERICAINES AC H-EUR</h4>\r
                <p>( FR0000988057, <span>fiche</span> )</p>\r
              </div>\r
              <p>2.00%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--title"\r
            >\r
              <h4>OPCVM Actions Asie Pacifique</h4>\r
              <p>1%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--content"\r
            >\r
              <div>\r
                <h4>LAZARD JAPON R</h4>\r
                <p>( FR0000988057, <span>fiche</span> )</p>\r
              </div>\r
              <p>1.00%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--title"\r
            >\r
              <h4>OPCVM Actions Europe</h4>\r
              <p>5.02%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--content distribution-funds-array-section__content__array-container__item--image"\r
            >\r
              <div>\r
                <div>\r
                  <h4>CENTIFOLIA C</h4>\r
                  <p>( FR0007076930, <span>fiche</span> )</p>\r
                </div>\r
              </div>\r
              <p>1.70%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--content"\r
            >\r
              <div>\r
                <h4>LAZARD ALPHA EUROPE R</h4>\r
                <p>( FR0011034131, <span>fiche</span> )</p>\r
              </div>\r
              <p>2.55%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--content distribution-funds-array-section__content__array-container__item--image"\r
            >\r
              <div>\r
                <div>\r
                  <h4>LAZARD SMALL CAPS EURO SRI R</h4>\r
                  <p>( FR0010689141, <span>fiche</span> )</p>\r
                </div>\r
              </div>\r
              <p>0.77%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--title"\r
            >\r
              <h4>OPCVM Actions Marchés Emergents</h4>\r
              <p>1.00%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--content"\r
            >\r
              <div>\r
                <h4>FEDERAL APAL P</h4>\r
                <p>( FR0000987950, <span>fiche</span> )</p>\r
              </div>\r
              <p>1%</p>\r
            </div>\r
            <div\r
              class="distribution-funds-array-section__content__array-container__item distribution-funds-array-section__content__array-container__item--title"\r
            >\r
              <h4>OPCVM Diversifiés</h4>\r
              <p>6.00%</p>\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
    </div>\r
\r
    <a class="button button--primary" href="#">Souscrire en ligne</a>\r
  </div>\r
</section>\r
`,Nn=`<section class="contracts-support-section-container">\r
  <div class="contracts-support-container">\r
    <h3 class="contracts-support-container__title">\r
      Investissez sereinement, <br />\r
      gérez votre épargne en toute autonomie\r
    </h3>\r
    <p class="contracts-support-container__description">\r
      Choisissez votre type de contrat\r
    </p>\r
    <div class="support-btns-container">\r
      <div class="support-btns-container__first-choice-container">\r
        <div\r
          class="support-btns-container__first-choice-container__btn"\r
          data-attr="assuranceVie"\r
        >\r
          <p class="support-btns-container__first-choice-container__btn__title">\r
            Assurance Vie\r
          </p>\r
        </div>\r
        <div\r
          class="support-btns-container__first-choice-container__btn"\r
          data-attr="capitalisation"\r
        >\r
          <p class="support-btns-container__first-choice-container__btn__title">\r
            Capitalisation\r
          </p>\r
        </div>\r
        <div\r
          class="support-btns-container__first-choice-container__btn"\r
          data-attr="planEpargneRetraite"\r
        >\r
          <p class="support-btns-container__first-choice-container__btn__title">\r
            Plan Épargne Retraite (PER)\r
          </p>\r
        </div>\r
      </div>\r
      <div class="support-btns-container__second-choice-container hidden">\r
        <div\r
          class="support-btns-container__second-choice-container__btns-type-second-choice-container assuranceVie"\r
        >\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titresVie"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@Vie\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              un contrat pour les experts\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="altaprofitsVie"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Altaprofits Vie\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              En un clic, le meilleur de l’assurance vie\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="digitalViePrime"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Digital Vie Prime\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat ciblant les critères environnementaux et sociaux\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="espaceLuxVie"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Generali Espace Lux Vie\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Les atouts du Luxembourg en un clic\r
            </p>\r
          </div>\r
        </div>\r
        <div\r
          class="support-btns-container__second-choice-container__btns-type-second-choice-container capitalisation hidden"\r
        >\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titreCapi"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@Capi\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat pour les experts\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="altaprofitsCapitalisation"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Altaprofits Capitalisation\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              En un clic, le meilleur de l’assurance vie\r
            </p>\r
          </div>\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="digitalCapiPrime"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Digital Capi Prime\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat ciblant les critères environnementaux et sociaux\r
            </p>\r
          </div>\r
        </div>\r
        <div\r
          class="support-btns-container__second-choice-container__btns-type-second-choice-container planEpargneRetraite hidden"\r
        >\r
          <div\r
            class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn"\r
            data-attr="titrePER"\r
          >\r
            <h3\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__title"\r
            >\r
              Titres@PER\r
            </h3>\r
            <p\r
              class="support-btns-container__second-choice-container__btns-type-second-choice-container__btn__description"\r
            >\r
              Un contrat pour les experts\r
            </p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="btns-third-choice-container hidden">\r
    <div class="btns-third-choice-container__btn euro" data-attr="euro">\r
      <p>Fonds en euros</p>\r
    </div>\r
    <div\r
      class="btns-third-choice-container__btn growth hidden"\r
      data-attr="growth"\r
    >\r
      <p>Fonds Croissance</p>\r
    </div>\r
    <div class="btns-third-choice-container__btn unit" data-attr="unit">\r
      <p>Unités de compte</p>\r
    </div>\r
  </div>\r
  <div class="result-container">\r
    <div class="euro-fund-container hidden">\r
      <div class="euro-fund-container__text-container">\r
        <h3>Qu’est-ce qu’un fonds en euros ?</h3>\r
        <p>\r
          Géré par l’assureur, le fonds Euros propose une gestion prudente qui\r
          associe une garantie en capital et un rendement définitivement acquis\r
          annuellement.\r
        </p>\r
        <a class="button button--secondary button--light-theme" href="#"\r
          >Voir la définition du lexique</a\r
        >\r
        <h3>Nos fonds en euros disponibles</h3>\r
      </div>\r
      <div class="euro-fund-container__cards-container"></div>\r
      <p class="euro-fund-container__netissima-conditions">\r
        ⁽¹⁾ Taux de participation aux bénéfices servi par l'assureur net de\r
        frais de gestion et hors prélèvement sociaux ; les performances passées\r
        ne préjugent pas de celles à venir. ⁽²⁾ L’accès au fonds en euros\r
        NETISSIMA requiert un investissement minimum de 30% en supports en\r
        unités de compte (UC) devient : requiert un investissement minimum sur\r
        les supports en unités de compte (UC) qui sera compris entre 40 et 70%\r
        de l'investissement, ce taux est déterminé par l'assureur une fois par\r
        an. Les supports en unités de compte ne garantissent pas le capital\r
        versé et sont soumis aux fluctuations des marchés financiers à la hausse\r
        comme à la baisse. ⁽³⁾ Taux du Fonds Eurossima avec 0.60% de frais de\r
        gestion par an et disponible pour les contrats Altaprofits PEP,\r
        Altaprofits Madelin. Ainsi que les contrats Altaprofits Vie et\r
        Altaprofits Capitalisation ouverts jusqu’au 02/01/2017. ⁽⁴⁾ Taux du\r
        Fonds Eurossima avec 0.75% de frais de gestion par an et disponible pour\r
        les contrats Altaprofits Vie et Altaprofits Capitalisation ouverts à\r
        compter du 03/01/2017. ⁽⁵⁾ Taux minimum garanti uniquement en cas de\r
        sortie totale du fonds en euros en cours d'année. Ce taux sera diminué\r
        des frais de gestion annuels prélevés, prorata temporis, à la date de\r
        l'opération. ⁽⁶⁾ L’accès au fonds en euros Suravenir Opportunités 2\r
        requiert un investissement minimum de 50% en supports en unités de\r
        compte (UC) dès le premier euro, et est accessible uniquement par\r
        versement. Les supports en unités de compte ne garantissent pas le\r
        capital versé et sont soumis aux fluctuations des marchés financiers à\r
        la hausse comme à la baisse.L’accès au fonds en euros Suravenir\r
        Rendement 2 requiert un investissement minimum de 30% en supports en\r
        unités de compte (UC) dès le premier euro, et est accessible uniquement\r
        par versement ou par arbitrage. Les supports en unités de compte ne\r
        garantissent pas le capital versé et sont soumis aux fluctuations des\r
        marchés financiers à la hausse comme à la baisse.\r
      </p>\r
      <div class="euro-fund-container__netissima-container hidden">\r
        <div\r
          class="euro-fund-container__netissima-container__informations-container"\r
        >\r
          <h3>Fonds en euros Netissima</h3>\r
          <div class="netissima-global-container">\r
            <div class="netissima-global-container__left-container">\r
              <div\r
                class="netissima-global-container__left-container__text-container"\r
              >\r
                <p>\r
                  <strong>PERFORMANCES NETTES 2022 (1)</strong>\r
                  <br /><br />Chaque année, les performances de ce fonds en\r
                  euros varient en fonction du pourcentage d’unités de compte\r
                  dans le contrat. Pour l’année 2022 :\r
                </p>\r
              </div>\r
              <img\r
                src="/assets/images/netissima-left-placeholder.png"\r
                alt="placeholder"\r
              />\r
              <p>\r
                <strong>·</strong> Frais de gestion par an :\r
                <strong>0,75%</strong>\r
              </p>\r
            </div>\r
            <div class="netissima-global-container__right-container">\r
              <div\r
                class="netissima-global-container__right-container__text-container"\r
              >\r
                <p>\r
                  <strong>Condition d'accès au fonds Netissima</strong>\r
                  <br />L’accès au fonds en euros Netissima est possible par\r
                  <strong> arbitrage et par versement</strong> et est\r
                  conditionné à un investissement minimum de\r
                  <strong\r
                    >50% sur les supports en unités de compte qui supportent un\r
                    risque de perte en capital.</strong\r
                  ><br /><br />Chaque année, les performances de ce fonds en\r
                  euros varient en fonction du pourcentage d’unités de compte\r
                  dans le contrat.\r
                </p>\r
              </div>\r
              <img\r
                src="/assets/images/netissima-right-placeholder.png"\r
                alt="placeholder"\r
              />\r
              <div class="btns-netissima-right-container">\r
                <div class="btns-netissima-right-container__btn">\r
                  <p>Rapport annuel</p>\r
                  <svg\r
                    width="16"\r
                    height="11"\r
                    viewBox="0 0 16 11"\r
                    fill="none"\r
                    xmlns="http://www.w3.org/2000/svg"\r
                  >\r
                    <path\r
                      d="M15.7063 5.70859C16.0969 5.31797 16.0969 4.68359 15.7063 4.29297L11.7063 0.292969C11.3156 -0.0976562 10.6812 -0.0976562 10.2906 0.292969C9.9 0.683594 9.9 1.31797 10.2906 1.70859L12.5844 4.00234H1C0.446875 4.00234 0 4.44922 0 5.00234C0 5.55547 0.446875 6.00234 1 6.00234H12.5844L10.2906 8.29609C9.9 8.68672 9.9 9.32109 10.2906 9.71172C10.6812 10.1023 11.3156 10.1023 11.7063 9.71172L15.7063 5.71172V5.70859Z"\r
                      fill="currentColor"\r
                    />\r
                  </svg>\r
                </div>\r
                <div class="btns-netissima-right-container__btn">\r
                  <p>Fiche du fonds</p>\r
                  <svg\r
                    width="16"\r
                    height="11"\r
                    viewBox="0 0 16 11"\r
                    fill="none"\r
                    xmlns="http://www.w3.org/2000/svg"\r
                  >\r
                    <path\r
                      d="M15.7063 5.70859C16.0969 5.31797 16.0969 4.68359 15.7063 4.29297L11.7063 0.292969C11.3156 -0.0976562 10.6812 -0.0976562 10.2906 0.292969C9.9 0.683594 9.9 1.31797 10.2906 1.70859L12.5844 4.00234H1C0.446875 4.00234 0 4.44922 0 5.00234C0 5.55547 0.446875 6.00234 1 6.00234H12.5844L10.2906 8.29609C9.9 8.68672 9.9 9.32109 10.2906 9.71172C10.6812 10.1023 11.3156 10.1023 11.7063 9.71172L15.7063 5.71172V5.70859Z"\r
                      fill="currentColor"\r
                    />\r
                  </svg>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
          <img src="/assets/images/offre-booster.png" alt="" />\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="growth-fund-container hidden">\r
    <div class="growth-fund-container__text-container">\r
      <h3>Qu’est-ce qu’un fonds croissance ?</h3>\r
      <p>\r
        Géré par un assureur, le fonds croissance associe une gestion prudente\r
        avec une garantie en capital au terme d’une période et une poche de\r
        diversification offrant un moteur de performance et un risque de perte\r
        en capital.\r
      </p>\r
\r
      <a class="button button--secondary button--light-theme" href="#"\r
        >Voir la définition du lexique</a\r
      >\r
      <h3>Nos fonds croissance disponibles</h3>\r
    </div>\r
    <div class="growth-fund-container__cards-growth-container">\r
      <div\r
        class="growth-fund-container__cards-growth-container__cards-row-container"\r
      >\r
        <div class="support-card-container" data-attr="growth-netissima">\r
          <div class="support-card-container__card-header">\r
            <p class="support-card-container__card-header__title">\r
              Générations Croiss@nce durable\r
            </p>\r
          </div>\r
          <div class="support-card-container__informations">\r
            <p class="support-card-container__informations__percentage-rate">\r
              Jusqu’à 3,06%\r
            </p>\r
            <p class="support-card-container__informations__information-text">\r
              de performances nettes ⁽¹⁾ en 2022 <br />\r
              Voir conditions d’accès\r
            </p>\r
\r
            <svg class="card-container__card-informations__logo">\r
              <use\r
                href="./assets/logos/lazard_freres_gestion--fit.svg#logo"\r
              ></use>\r
            </svg>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="growth-container hidden">\r
      <div class="growth-container__informations-container">\r
        <h3>Générations Croissance durable</h3>\r
        <div class="growth-global-container">\r
          <div class="growth-global-container__left">\r
            <p>\r
              Proposé par <strong>Generali Vie</strong>, Entreprise régie par le\r
              Code des Assurances,\r
              <strong>Générations Croiss@nce durable</strong> est un fonds\r
              croissance de nouvelle génération conforme à la loi PACTE (Plan\r
              d’Action pour la Croissance et la Transformation des Entreprises).\r
              Il bénéficie du savoir-faire et l’expertise de Generali Vie,\r
              précurseur dans ce domaine. (1) <br /><br />\r
              <strong>Générations Croiss@nce durable</strong> offre une garantie\r
              partielle en capital à hauteur de 80 %, au terme de l’engagement\r
              compris entre 8 et 30 ans, choisi par le client. Le capital reste\r
              disponible à tout moment2, mais la garantie partielle du capital\r
              ne s’applique pas et expose à une perte en capital, total ou\r
              partiel. <br /><br />\r
              <strong>Générations Croiss@nce durable</strong> accompagne la\r
              relance économique avec une exposition marquée aux PME. Il repose\r
              sur une allocation d’actifs dynamique, diversifiée et durable\r
              intégrant des critères ESG (environnementaux, sociaux et de\r
              gouvernance). La croissance bénéficie d’un mécanisme de\r
              provisionnement (Provision Collective Différée) qui peut permettre\r
              de lisser la performance dans le temps en cas de forte volatilité\r
              des marchés et peut être source de performance complémentaire car\r
              elle est investie dans des actifs potentiellement dynamiques.\r
            </p>\r
          </div>\r
          <div class="growth-global-container__right">\r
            <img\r
              src="/assets/images/fond-croissance-icons-placeholder.png"\r
              alt="placeholder"\r
            />\r
            <div class="growth-global-container__right__btns-container">\r
              <div class="growth-global-container__right__btns-container__btn">\r
                <p>Reporting</p>\r
                <svg\r
                  width="16"\r
                  height="11"\r
                  viewBox="0 0 16 11"\r
                  fill="none"\r
                  xmlns="http://www.w3.org/2000/svg"\r
                >\r
                  <path\r
                    d="M15.7063 5.70859C16.0969 5.31797 16.0969 4.68359 15.7063 4.29297L11.7063 0.292969C11.3156 -0.0976562 10.6812 -0.0976562 10.2906 0.292969C9.9 0.683594 9.9 1.31797 10.2906 1.70859L12.5844 4.00234H1C0.446875 4.00234 0 4.44922 0 5.00234C0 5.55547 0.446875 6.00234 1 6.00234H12.5844L10.2906 8.29609C9.9 8.68672 9.9 9.32109 10.2906 9.71172C10.6812 10.1023 11.3156 10.1023 11.7063 9.71172L15.7063 5.71172V5.70859Z"\r
                    fill="currentColor"\r
                  />\r
                </svg>\r
              </div>\r
              <div class="growth-global-container__right__btns-container__btn">\r
                <p>Brochure</p>\r
                <svg\r
                  width="16"\r
                  height="11"\r
                  viewBox="0 0 16 11"\r
                  fill="none"\r
                  xmlns="http://www.w3.org/2000/svg"\r
                >\r
                  <path\r
                    d="M15.7063 5.70859C16.0969 5.31797 16.0969 4.68359 15.7063 4.29297L11.7063 0.292969C11.3156 -0.0976562 10.6812 -0.0976562 10.2906 0.292969C9.9 0.683594 9.9 1.31797 10.2906 1.70859L12.5844 4.00234H1C0.446875 4.00234 0 4.44922 0 5.00234C0 5.55547 0.446875 6.00234 1 6.00234H12.5844L10.2906 8.29609C9.9 8.68672 9.9 9.32109 10.2906 9.71172C10.6812 10.1023 11.3156 10.1023 11.7063 9.71172L15.7063 5.71172V5.70859Z"\r
                    fill="currentColor"\r
                  />\r
                </svg>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <img src="/assets/images/offre-booster.png" alt="" />\r
      </div>\r
    </div>\r
  </div>\r
  <div class="account-unit-container hidden">\r
    <div class="account-unit-container__btns-container">\r
      <div class="account-unit-container__btns-container__btn" data-attr="opc">\r
        <p class="account-unit-container__btns-container__btn__text">OPC</p>\r
      </div>\r
      <div class="account-unit-container__btns-container__btn" data-attr="sci">\r
        <p class="account-unit-container__btns-container__btn__text">\r
          SCI / SCPI / OPCI\r
        </p>\r
      </div>\r
      <div\r
        class="account-unit-container__btns-container__btn"\r
        data-attr="action"\r
      >\r
        <p class="account-unit-container__btns-container__btn__text">Actions</p>\r
      </div>\r
      <div\r
        class="account-unit-container__btns-container__btn"\r
        data-attr="structured-funds"\r
      >\r
        <p class="account-unit-container__btns-container__btn__text">\r
          Fonds structurés\r
        </p>\r
      </div>\r
      <div\r
        class="account-unit-container__btns-container__btn"\r
        data-attr="private-equity"\r
      >\r
        <p class="account-unit-container__btns-container__btn__text">\r
          Private Equity\r
        </p>\r
      </div>\r
    </div>\r
    <div class="tunnel-array-container hidden">\r
      <div class="table_wrapper">\r
        <!--ARRAY LIBELLE-->\r
        <div class="table_tr libelle">\r
          <div class="table_td bigGrow">\r
            <p>Libellé</p>\r
          </div>\r
          <div class="table_td mediumGrow">\r
            <a href="#jsModal3" id="popup3" class="jsModalTrigger info_popup"\r
              >Notation Morningstar</a\r
            >\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td mediumGrow">\r
            <p>Valeur de la part <small>(et date de valeur)</small></p>\r
          </div>\r
          <div class="table_td">\r
            <a href="#jsModal4" id="popup4" class="jsModalTrigger info_popup"\r
              >SRRI</a\r
            >\r
          </div>\r
          <div class="table_td">\r
            <p>Risque <small>sur&nbsp;5&nbsp;ans</small></p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td performance">\r
            <p><small>Cours précédent</small></p>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt">\r
              <small>Depuis le 1er janvier</small>\r
            </p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt"><small>Sur 1 an glissant</small></p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt">\r
              <small>Sur<br />5 ans</small>\r
            </p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt">\r
              <small>Depuis le 1er janvier</small>\r
            </p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt"><small>Sur 1 an glissant</small></p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
          <div class="table_td">\r
            <p class="centerTxt">\r
              <small>Sur<br />5 ans</small>\r
            </p>\r
            <button class="arrow_libelle">\r
              <svg\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 12 8.1"\r
                style="enable-background: new 0 0 12 8.1"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(12.041 8.077) rotate(180)">\r
                  <path\r
                    class="st_white"\r
                    d="M5.1,0.4L0.3,6.2c-0.4,0.5-0.3,1.2,0.1,1.6C0.6,8,0.9,8.1,1.1,8.1h9.8c0.6,0,1.1-0.5,1.1-1.1\r
                          c0-0.3-0.1-0.5-0.3-0.7L6.9,0.4C6.5-0.1,5.8-0.1,5.3,0.3C5.2,0.3,5.2,0.4,5.1,0.4z"\r
                  />\r
                </g>\r
              </svg>\r
            </button>\r
          </div>\r
        </div>\r
        <!--END ARRAY LIBELLE-->\r
\r
        <!--SEPARATOR TITLE ARRAY-->\r
        <div class="title_separator">\r
          <strong>Actions Asie Pacifique</strong>\r
          <p>Zones Particulières</p>\r
        </div>\r
        <!--END SEPARATOR TITLE ARRAY-->\r
\r
        <!--CONTENT ARRAY-->\r
\r
        <!--TR-->\r
        <div class="table_tr label_isr">\r
          <!--AJOUT PANIER / FAVORIS / ALERTE-->\r
          <div class="panel_shop">\r
            <div class="add_obj add_shop addtocart">\r
              <!--<span class="cart-item"></span>-->\r
              <svg\r
                class="picto panier"\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(-5.76 -7.367)">\r
                  <circle class="st_orange" cx="43.3" cy="44.9" r="37.5" />\r
                  <path\r
                    class="st_white"\r
                    d="M62.2,34.4c-0.1-2-1.9-3.5-3.9-3.4h-4.4v-2.4c-0.4-4.9-4.6-8.7-9.6-8.4c-4.9-0.3-9.2,3.4-9.6,8.4V31h-4.3\r
                              c-2-0.1-3.7,1.4-3.9,3.4l0,0l-2,24.3c0.2,2,1.9,3.5,3.9,3.4h31.9c2,0.1,3.8-1.4,3.9-3.4L62.2,34.4z M37.6,28.6\r
                              c0.3-3.5,3.3-6.2,6.8-6c3.5-0.2,6.6,2.4,6.8,6V31H37.6V28.6z M29.4,34.4c0-0.6,0.6-1,1.1-1h27.8c0.6,0,1.1,0.4,1.1,1l0,0V36\r
                              c0.1,7.3-6.7,13.3-15.1,13.4c-8.3,0-15.2-5.9-15.3-13.2l0,0L29.4,34.4z M60.4,59.7h-32c-0.6,0-1.1-0.4-1.2-1l1.3-15.4\r
                              c4.7,7.6,15.5,10.5,24.3,6.4c3-1.4,5.6-3.6,7.3-6.4l1.3,15.5C61.4,59.3,60.9,59.7,60.4,59.7L60.4,59.7z"\r
                  />\r
                </g>\r
              </svg>\r
              <svg\r
                class="picto corbeille"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <circle\r
                  id="Ellipse_162"\r
                  class="st_orange"\r
                  cx="37.5"\r
                  cy="37.5"\r
                  r="37.5"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M31.8,48.8v-16c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3C32.4,50.1,31.8,49.5,31.8,48.8\r
                          z"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M40.7,48.8v-16c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3S40.7,49.5,40.7,48.8z"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M54.8,20h-9.3v-2.7c0-1.4-1.1-2.6-2.6-2.7H32.2c-1.5,0-2.7,1.2-2.7,2.7V20h-9.3c-0.7,0-1.3,0.6-1.3,1.3\r
                          s0.6,1.3,1.3,1.3h2.7v27.3c0,2.6,2.1,4.7,4.7,4.7h20c2.6,0,4.6-2.1,4.6-4.7V22.7h2.7c0.7,0,1.3-0.6,1.3-1.3\r
                          C56.1,20.6,55.6,20,54.8,20z M32.2,17.3h10.7V20H32.2V17.3z M49.5,49.9c0,1.1-0.9,2-2,2h-20c-1.1,0-2-0.9-2-2V22.7h24V49.9z"\r
                />\r
              </svg>\r
              <p>Ajouter à ma sélection</p>\r
            </div>\r
            <div class="add_obj add_alert">\r
              <svg\r
                class="picto"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 212.6 212.6"\r
                style="enable-background: new 0 0 212.6 212.6"\r
                xml:space="preserve"\r
              >\r
                <circle class="st_white" cx="106.3" cy="106.3" r="106.3" />\r
                <g>\r
                  <path\r
                    class="st_cyan"\r
                    d="M172.3,154.1l-9.7-19.8c-3.1-6.4-4.7-13.4-4.7-20.6V80.1c-1.6-26.8-24-47.7-50.9-47.4h-1.1\r
c-26.9-0.3-49.3,20.5-50.9,47.4v33.6c0,7.1-1.7,14.1-4.9,20.5l-9.7,19.9c-0.9,1.7-0.2,3.8,1.5,4.6c0.5,0.2,1,0.4,1.6,0.4h40.7\r
c0.8,11.7,10.5,20.8,22.2,20.8c5.9,0,11.2-2.3,15.2-6c4-3.7,6.6-9,7-14.8h40.7c1.9,0,3.5-1.5,3.5-3.4\r
C172.6,155.1,172.5,154.6,172.3,154.1z M117.1,168.5c-2.9,2.9-6.8,4.5-10.8,4.5c-4,0-7.6-1.6-10.3-4c-2.7-2.5-4.6-6-5-9.9h30.6\r
C121.3,162.6,119.7,166,117.1,168.5z M49,152.2l7.4-14.8c3.6-7.3,5.4-15.4,5.5-23.5V80.4c1.4-23.2,20.8-41.2,44-40.8h1.1\r
c23.2-0.3,42.6,17.7,44,40.8v33.3c0,8.2,1.9,16.2,5.5,23.5l7.3,14.9L49,152.2z"\r
                  />\r
                  <path\r
                    class="st_white act"\r
                    d="M121.6,159.1c-0.3,3.6-1.9,6.9-4.5,9.4c-2.9,2.9-6.8,4.5-10.8,4.5c-4,0-7.6-1.6-10.3-4c-2.7-2.5-4.6-6-5-9.9\r
H121.6z"\r
                  />\r
                  <path\r
                    class="st_white act"\r
                    d="M163.6,152.2l-114.7,0l7.4-14.8c3.6-7.3,5.4-15.4,5.5-23.5V80.4c1.4-23.2,20.8-41.2,44-40.8h1.1\r
c23.2-0.3,42.6,17.7,44,40.8v33.3c0,8.2,1.9,16.2,5.5,23.5L163.6,152.2z"\r
                  />\r
                </g>\r
              </svg>\r
              <p>Créer une alerte</p>\r
            </div>\r
            <div class="add_obj add_fav">\r
              <svg\r
                class="picto"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <circle class="st_white" cx="37.5" cy="37.5" r="37.5" />\r
                <g>\r
                  <g>\r
                    <path\r
                      class="st_white active"\r
                      d="M61.4,27.9c0,12-19.5,26.2-24,29.3C33,54.1,13.6,39.8,13.6,27.9c0-4.5,2.5-8.6,6.6-10.7\r
                                      c1.7-0.9,3.6-1.3,5.3-1.3c4.3,0,8.4,2.4,10.5,6.6l1.4,2.9l1.4-2.9c2-4,6.2-6.6,10.7-6.6C56.1,16.1,61.4,21.4,61.4,27.9z"\r
                    />\r
                    <path\r
                      class="st_cyan"\r
                      d="M48.6,15.2c-4.4,0-8.6,2.1-11.2,5.6c-4-5.4-11.2-7.2-17.4-4.1c-4.8,2.4-7.7,7.2-7.7,12.5\r
                                      c0,13.9,23.3,29.5,24.3,30.1l0.8,0.5l0.8-0.5c1-0.6,24.4-16.1,24.4-30.1C62.6,21.5,56.4,15.2,48.6,15.2z M21.4,19.3\r
                                      c1.6-0.8,3.3-1.2,5-1.2c4,0,7.8,2.2,9.7,6.1l1.3,2.7l1.3-2.7c1.8-3.7,5.7-6.1,9.9-6.1c6.1,0,11,4.9,11,11\r
                                      c0,11.1-18.1,24.2-22.2,27.1c-4.1-2.9-22.1-16.1-22.1-27.1C15.4,25,17.7,21.2,21.4,19.3z"\r
                    />\r
                  </g>\r
                </g>\r
              </svg>\r
              <p>Ajouter à mes favoris</p>\r
            </div>\r
          </div>\r
          <!--END AJOUT PANIER / FAVORIS / ALERTE-->\r
\r
          <div class="table_td bigGrow mob_line_cpc">\r
            <div class="actions">\r
              <a href="#jsModal8" id="popup8" class="jsModalTrigger info_popup">\r
                <strong>AMILTON PREMIUM EUROPE R</strong>\r
                <p>FR0010687749</p>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="table_td mediumGrow star mob_morningstar">\r
            <p class="libelle_mob_t">\r
              <strong>Notation Morningstar&nbsp;:</strong>\r
            </p>\r
            <div class="note_star">\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
            </div>\r
          </div>\r
          <div class="table_td mediumGrow value_part mob_line_cpc">\r
            <p class="libelle_mob_t">\r
              <strong>Valeur de la part</strong> au 15/09/2021&nbsp;:\r
            </p>\r
            <strong>68,39€</strong>\r
            <p class="hidden">15/09/2021</p>\r
          </div>\r
          <div class="table_td mob_ssri">\r
            <p class="libelle_mob_t"><strong>SRRI&nbsp;:</strong></p>\r
            <p><strong>3</strong>/7</p>\r
          </div>\r
          <div class="table_td mob_risque">\r
            <p class="libelle_mob_t">\r
              <strong>Risque</strong> sur 5 ans&nbsp;:\r
            </p>\r
            <strong>20,29%</strong>\r
          </div>\r
          <div class="table_td mob_performance libelle_perf">\r
            <p class="libelle_mob_t">Cours précédent</p>\r
            <p>1,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Depuis le 1er janvier</p>\r
            <p>2,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 3 mois</p>\r
            <p>3,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 1 an</p>\r
            <p>4,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 3 ans</p>\r
            <p>5,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 5 ans</p>\r
            <p>6,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 10 ans</p>\r
            <p>7,57%</p>\r
          </div>\r
        </div>\r
        <!--END TR-->\r
\r
        <!--TR-->\r
        <div class="table_tr label_isr">\r
          <!--AJOUT PANIER / FAVORIS / ALERTE-->\r
          <div class="panel_shop">\r
            <div class="add_obj add_shop addtocart">\r
              <!--<span class="cart-item"></span>-->\r
              <svg\r
                class="picto panier"\r
                version="1.1"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <g transform="translate(-5.76 -7.367)">\r
                  <circle class="st_orange" cx="43.3" cy="44.9" r="37.5" />\r
                  <path\r
                    class="st_white"\r
                    d="M62.2,34.4c-0.1-2-1.9-3.5-3.9-3.4h-4.4v-2.4c-0.4-4.9-4.6-8.7-9.6-8.4c-4.9-0.3-9.2,3.4-9.6,8.4V31h-4.3\r
                              c-2-0.1-3.7,1.4-3.9,3.4l0,0l-2,24.3c0.2,2,1.9,3.5,3.9,3.4h31.9c2,0.1,3.8-1.4,3.9-3.4L62.2,34.4z M37.6,28.6\r
                              c0.3-3.5,3.3-6.2,6.8-6c3.5-0.2,6.6,2.4,6.8,6V31H37.6V28.6z M29.4,34.4c0-0.6,0.6-1,1.1-1h27.8c0.6,0,1.1,0.4,1.1,1l0,0V36\r
                              c0.1,7.3-6.7,13.3-15.1,13.4c-8.3,0-15.2-5.9-15.3-13.2l0,0L29.4,34.4z M60.4,59.7h-32c-0.6,0-1.1-0.4-1.2-1l1.3-15.4\r
                              c4.7,7.6,15.5,10.5,24.3,6.4c3-1.4,5.6-3.6,7.3-6.4l1.3,15.5C61.4,59.3,60.9,59.7,60.4,59.7L60.4,59.7z"\r
                  />\r
                </g>\r
              </svg>\r
              <svg\r
                class="picto corbeille"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <circle\r
                  id="Ellipse_162"\r
                  class="st_orange"\r
                  cx="37.5"\r
                  cy="37.5"\r
                  r="37.5"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M31.8,48.8v-16c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3C32.4,50.1,31.8,49.5,31.8,48.8\r
                          z"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M40.7,48.8v-16c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v16c0,0.7-0.6,1.3-1.3,1.3S40.7,49.5,40.7,48.8z"\r
                />\r
                <path\r
                  class="st_white"\r
                  d="M54.8,20h-9.3v-2.7c0-1.4-1.1-2.6-2.6-2.7H32.2c-1.5,0-2.7,1.2-2.7,2.7V20h-9.3c-0.7,0-1.3,0.6-1.3,1.3\r
                          s0.6,1.3,1.3,1.3h2.7v27.3c0,2.6,2.1,4.7,4.7,4.7h20c2.6,0,4.6-2.1,4.6-4.7V22.7h2.7c0.7,0,1.3-0.6,1.3-1.3\r
                          C56.1,20.6,55.6,20,54.8,20z M32.2,17.3h10.7V20H32.2V17.3z M49.5,49.9c0,1.1-0.9,2-2,2h-20c-1.1,0-2-0.9-2-2V22.7h24V49.9z"\r
                />\r
              </svg>\r
              <p>Ajouter à ma sélection</p>\r
            </div>\r
            <div class="add_obj add_alert">\r
              <svg\r
                class="picto"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 212.6 212.6"\r
                style="enable-background: new 0 0 212.6 212.6"\r
                xml:space="preserve"\r
              >\r
                <circle class="st_white" cx="106.3" cy="106.3" r="106.3" />\r
                <g>\r
                  <path\r
                    class="st_cyan"\r
                    d="M172.3,154.1l-9.7-19.8c-3.1-6.4-4.7-13.4-4.7-20.6V80.1c-1.6-26.8-24-47.7-50.9-47.4h-1.1\r
c-26.9-0.3-49.3,20.5-50.9,47.4v33.6c0,7.1-1.7,14.1-4.9,20.5l-9.7,19.9c-0.9,1.7-0.2,3.8,1.5,4.6c0.5,0.2,1,0.4,1.6,0.4h40.7\r
c0.8,11.7,10.5,20.8,22.2,20.8c5.9,0,11.2-2.3,15.2-6c4-3.7,6.6-9,7-14.8h40.7c1.9,0,3.5-1.5,3.5-3.4\r
C172.6,155.1,172.5,154.6,172.3,154.1z M117.1,168.5c-2.9,2.9-6.8,4.5-10.8,4.5c-4,0-7.6-1.6-10.3-4c-2.7-2.5-4.6-6-5-9.9h30.6\r
C121.3,162.6,119.7,166,117.1,168.5z M49,152.2l7.4-14.8c3.6-7.3,5.4-15.4,5.5-23.5V80.4c1.4-23.2,20.8-41.2,44-40.8h1.1\r
c23.2-0.3,42.6,17.7,44,40.8v33.3c0,8.2,1.9,16.2,5.5,23.5l7.3,14.9L49,152.2z"\r
                  />\r
                  <path\r
                    class="st_white act"\r
                    d="M121.6,159.1c-0.3,3.6-1.9,6.9-4.5,9.4c-2.9,2.9-6.8,4.5-10.8,4.5c-4,0-7.6-1.6-10.3-4c-2.7-2.5-4.6-6-5-9.9\r
H121.6z"\r
                  />\r
                  <path\r
                    class="st_white act"\r
                    d="M163.6,152.2l-114.7,0l7.4-14.8c3.6-7.3,5.4-15.4,5.5-23.5V80.4c1.4-23.2,20.8-41.2,44-40.8h1.1\r
c23.2-0.3,42.6,17.7,44,40.8v33.3c0,8.2,1.9,16.2,5.5,23.5L163.6,152.2z"\r
                  />\r
                </g>\r
              </svg>\r
              <p>Créer une alerte</p>\r
            </div>\r
            <div class="add_obj add_fav">\r
              <svg\r
                class="picto"\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 75 75"\r
                style="enable-background: new 0 0 75 75"\r
                xml:space="preserve"\r
              >\r
                <circle class="st_white" cx="37.5" cy="37.5" r="37.5" />\r
                <g>\r
                  <g>\r
                    <path\r
                      class="st_white active"\r
                      d="M61.4,27.9c0,12-19.5,26.2-24,29.3C33,54.1,13.6,39.8,13.6,27.9c0-4.5,2.5-8.6,6.6-10.7\r
                                      c1.7-0.9,3.6-1.3,5.3-1.3c4.3,0,8.4,2.4,10.5,6.6l1.4,2.9l1.4-2.9c2-4,6.2-6.6,10.7-6.6C56.1,16.1,61.4,21.4,61.4,27.9z"\r
                    />\r
                    <path\r
                      class="st_cyan"\r
                      d="M48.6,15.2c-4.4,0-8.6,2.1-11.2,5.6c-4-5.4-11.2-7.2-17.4-4.1c-4.8,2.4-7.7,7.2-7.7,12.5\r
                                      c0,13.9,23.3,29.5,24.3,30.1l0.8,0.5l0.8-0.5c1-0.6,24.4-16.1,24.4-30.1C62.6,21.5,56.4,15.2,48.6,15.2z M21.4,19.3\r
                                      c1.6-0.8,3.3-1.2,5-1.2c4,0,7.8,2.2,9.7,6.1l1.3,2.7l1.3-2.7c1.8-3.7,5.7-6.1,9.9-6.1c6.1,0,11,4.9,11,11\r
                                      c0,11.1-18.1,24.2-22.2,27.1c-4.1-2.9-22.1-16.1-22.1-27.1C15.4,25,17.7,21.2,21.4,19.3z"\r
                    />\r
                  </g>\r
                </g>\r
              </svg>\r
              <p>Ajouter à mes favoris</p>\r
            </div>\r
          </div>\r
          <!--END AJOUT PANIER / FAVORIS / ALERTE-->\r
\r
          <div class="table_td bigGrow mob_line_cpc">\r
            <div class="actions">\r
              <a\r
                href="#jsModal10"\r
                id="popup10"\r
                class="jsModalTrigger info_popup"\r
              >\r
                <strong>AMILTON PREMIUM EUROPE R</strong>\r
                <p>FR0010687749</p>\r
              </a>\r
            </div>\r
          </div>\r
          <div class="table_td mediumGrow star mob_morningstar">\r
            <p class="libelle_mob_t">\r
              <strong>Notation Morningstar&nbsp;:</strong>\r
            </p>\r
            <div class="note_star">\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
              <svg\r
                xmlns="http://www.w3.org/2000/svg"\r
                xmlns:xlink="http://www.w3.org/1999/xlink"\r
                x="0px"\r
                y="0px"\r
                viewBox="0 0 16 16"\r
                style="enable-background: new 0 0 16 16"\r
                xml:space="preserve"\r
              >\r
                <path\r
                  id="Note"\r
                  class="st_blue"\r
                  d="M8.4,0.4l1.6,5c0.2,0.3,0.3,0.5,0.6,0.5h4.8c0.3,0,0.6,0.3,0.6,0.6c0,0.2-0.1,0.4-0.3,0.5l-3.9,2.8\r
                      c-0.2,0.2-0.3,0.5-0.2,0.6l1.6,4.7c0.2,0.6-0.5,1.1-0.9,0.6L8.4,13c-0.2-0.2-0.5-0.2-0.8,0l-3.9,2.8C3.4,16,3,15.9,2.9,15.6\r
                      c-0.1-0.1-0.1-0.3-0.1-0.5l1.6-4.7c0.2-0.3,0-0.5-0.2-0.6L0.3,7C0,6.8-0.1,6.4,0.1,6.2C0.2,6,0.4,5.9,0.6,5.9h4.8\r
                      c0.3,0,0.5-0.2,0.6-0.5l1.6-5C7.6-0.1,8.2-0.1,8.4,0.4z"\r
                />\r
              </svg>\r
            </div>\r
          </div>\r
          <div class="table_td mediumGrow value_part mob_line_cpc">\r
            <p class="libelle_mob_t">\r
              <strong>Valeur de la part</strong> au 15/09/2021&nbsp;:\r
            </p>\r
            <strong>68,39€</strong>\r
            <p class="hidden">15/09/2021</p>\r
          </div>\r
          <div class="table_td mob_ssri">\r
            <p class="libelle_mob_t"><strong>SRRI&nbsp;:</strong></p>\r
            <p><strong>3</strong>/7</p>\r
          </div>\r
          <div class="table_td mob_risque">\r
            <p class="libelle_mob_t">\r
              <strong>Risque</strong> sur 5 ans&nbsp;:\r
            </p>\r
            <strong>20,29%</strong>\r
          </div>\r
          <div class="table_td mob_performance libelle_perf">\r
            <p class="libelle_mob_t">Cours précédent</p>\r
            <p>1,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Depuis le 1er janvier</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 3 mois</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 1 an</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 3 ans</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 5 ans</p>\r
            <p>112,57%</p>\r
          </div>\r
          <div class="table_td mob_performance">\r
            <p class="libelle_mob_t">Sur 10 ans</p>\r
            <p>112,57%</p>\r
          </div>\r
        </div>\r
        <!--END TR-->\r
\r
        <!--END CONTENT ARRAY-->\r
      </div>\r
    </div>\r
    <div class="structured-fund-container hidden">\r
      <div class="structured-fund-container__text-container">\r
        <h3>Que sont les fonds structurés ?</h3>\r
        <p>\r
          Un produit structuré est un assemblage arrayContainerde plusieurs\r
          instruments financiers qui permettent à une banque ou une institution\r
          financière de proposer à ses clients différents couples\r
          rendement/risque en fonction de leurs attentes. Le rendement du\r
          produit structuré dépend d’un sous-jacent. Celui-ci peut être un\r
          indice (CAC 40, Eurostoxx 50,…) un panier d’actions voire la signature\r
          d’une ou plusieurs entreprises…\r
        </p>\r
\r
        <a class="button button--secondary button--light-theme" href="#">Voir la définition du lexique</a>\r
        <h3>Nos fonds structurés à saisir</h3>\r
\r
        <div class="structured-fund-cards-container">\r
          <div class="structured-fund-cards-container__row-container">\r
            <div\r
              class="structured-fund-cards-container__row-container__card-container"\r
            >\r
              <div\r
                class="structured-fund-cards-container__row-container__card-container__header"\r
              >\r
                <p>Opportunité Rendement Mars 2028</p>\r
              </div>\r
              <div\r
                class="structured-fund-cards-container__row-container__card-container__body"\r
              >\r
                <div\r
                  class="structured-fund-cards-container__row-container__card-container__body__text-container"\r
                >\r
                  <p><b>Disponible jusqu’au : </b>31/03/2023</p>\r
                  <p><b>Indice sous-jacent : </b>EURO STOXX 50</p>\r
                  <p><b>Maturité : </b> 5 ans</p>\r
                  <p>\r
                    <b>Disponible sur : </b>Altaprofits Vie, Altaprofits\r
                    Capitalisation, Altaprofits PEP, Altaprofits Madelin,\r
                    Generali Epargne.\r
                  </p>\r
                  <p><b>Garantie du capital : </b>100% garanti à échéance</p>\r
                  <p><b>Objectif de gain : </b>17% brut à échéance.</p>\r
                </div>\r
                <div\r
                  class="structured-fund-cards-container__row-container__card-container__body__btns-container"\r
                >\r
                  <div\r
                    class="structured-fund-cards-container__row-container__card-container__body__btns-container__btn"\r
                  >\r
                    <p>A saisir</p>\r
                  </div>\r
                  <div\r
                    class="structured-fund-cards-container__row-container__card-container__body__btns-container__btn--light"\r
                  >\r
                    <p>En savoir plus</p>\r
                  </div>\r
                </div>\r
                <div\r
                  class="structured-fund-cards-container__row-container__card-container__body__text-container-end"\r
                >\r
                  <a>Document d’information clé</a>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
        <h3>Nos fonds structurés en cours</h3>\r
        <div class="structured-fund-grid-container">\r
          <div class="structured-fund-grid-container__header">\r
            <p>Support</p>\r
            <p>Objectif</p>\r
            <p>Date de lancement⁽¹⁾</p>\r
            <p>Date de remboursement</p>\r
            <p>performance réalisé⁽²⁾</p>\r
          </div>\r
\r
          <div class="structured-fund-grid-container__body">\r
            <p>Athéna transition janvier 2023</p>\r
            <p>6%</p>\r
            <p>27/01/2023</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Athéna transition septembre 2022</p>\r
            <p>6%</p>\r
            <p>30/09/2022</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Athena oxygene avril 2022</p>\r
            <p>6.5%</p>\r
            <p>14/04/2022</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2022</p>\r
            <p>5%</p>\r
            <p>25/02/2022</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2021</p>\r
            <p>8%</p>\r
            <p>15/08/2021</p>\r
            <p>en cours</p>\r
            <p>-</p>\r
          </div>\r
        </div>\r
        <div class="structured-fund-grid-text-container">\r
          <p>⁽¹⁾ Date de constation initiale.</p>\r
          <p>⁽²⁾ Performance hors frais de gestion du contrat et fiscalité.</p>\r
        </div>\r
        <h3>Nos fonds structurés clôturés</h3>\r
        <div class="structured-fund-grid-container">\r
          <div class="structured-fund-grid-container__header">\r
            <p>Support</p>\r
            <p>Objectif</p>\r
            <p>Date de lancement⁽¹⁾</p>\r
            <p>Date de remboursement</p>\r
            <p>performance réalisé⁽²⁾</p>\r
          </div>\r
\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2020</p>\r
            <p>8%</p>\r
            <p>15/12/2020</p>\r
            <p>15/12/2021</p>\r
            <p>8%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2019</p>\r
            <p>8%</p>\r
            <p>20/12/2019</p>\r
            <p>21/06/2021</p>\r
            <p>12%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2018</p>\r
            <p>8%</p>\r
            <p>30/10/2018</p>\r
            <p>13/11/2019</p>\r
            <p>8%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2017</p>\r
            <p>6%</p>\r
            <p>02/06/2017</p>\r
            <p>18/06/2018</p>\r
            <p>6%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement2</p>\r
            <p>10.5%</p>\r
            <p>29/06/2011</p>\r
            <p>29/04/2016</p>\r
            <p>-10%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Altarendement1</p>\r
            <p>10.5%</p>\r
            <p>27/01/2011</p>\r
            <p>27/01/2016</p>\r
            <p>-10%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>AltaMultioblig2</p>\r
            <p>6.61%</p>\r
            <p>30/06/2010</p>\r
            <p>30/06/2015</p>\r
            <p>33.05%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>AltaMultioblig1</p>\r
            <p>7.31%</p>\r
            <p>21/12/2009</p>\r
            <p>21/12/2017</p>\r
            <p>47.55%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Gamme absolue 5 ans</p>\r
            <p>6.20%</p>\r
            <p>30/06/2009</p>\r
            <p>03/09/2014</p>\r
            <p>32.09%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Gamme absolue 5 ans</p>\r
            <p>6.20%</p>\r
            <p>30/06/2009</p>\r
            <p>03/09/2014</p>\r
            <p>32.09%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Gamme absolue 5 ans</p>\r
            <p>6.20%</p>\r
            <p>30/06/2009</p>\r
            <p>03/09/2014</p>\r
            <p>32.09%</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Harmonie Juillet 2020</p>\r
            <p>2.80%/trimestre</p>\r
            <p>-</p>\r
            <p>-</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Europe Opportunité</p>\r
            <p>3%/trimestre</p>\r
            <p>-</p>\r
            <p>-</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>Calypso Juin 2020 Part HO</p>\r
            <p>1.5%/trimestre (soit 6% par an)</p>\r
            <p>24/06/2020</p>\r
            <p>13/07/2032</p>\r
            <p>-</p>\r
          </div>\r
          <div class="structured-fund-grid-container__body">\r
            <p>K Euro Solutions Mai 2020 Part G</p>\r
            <p>1%/trimestre (soit 4% par an)</p>\r
            <p>25/05/2020</p>\r
            <p>12/06/2030</p>\r
            <p>-</p>\r
          </div>\r
        </div>\r
        <div class="structured-fund-grid-text-container">\r
          <p>⁽¹⁾ Date de constation initiale.</p>\r
          <p>⁽²⁾ Performance hors frais de gestion du contrat et fiscalité.</p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`,Bn=`<section class="alta-news-talking-about-container">\r
  <div class="alta-news-talking-about-container__left-container">\r
    <div\r
      class="alta-news-talking-about-container__left-container__news-container"\r
    ></div>\r
    <div\r
      class="alta-news-talking-about-container__left-container__pages-navigation"\r
    >\r
      <div\r
        class="alta-news-talking-about-container__left-container__pages-navigation__prev"\r
      >\r
        &lt;&nbsp;\r
      </div>\r
      <div\r
        class="alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"\r
      > 1 2 3 4 ...</div>\r
      <div\r
        class="alta-news-talking-about-container__left-container__pages-navigation__next"\r
      >\r
      &nbsp;&gt;\r
      </div>\r
    </div>\r
  </div>\r
  <div class="alta-news-talking-about-container__right-container">\r
    <img src="./assets/logos/ifop.png" alt="logo">\r
    <p>8 Septembre 2022</p>\r
    <div class="alta-news-talking-about-container__right-container__text-container">\r
        <h3>Altaprofits/IFOP : 4ème Baromètre de l'épargne en France et en régions</h3>\r
        <p>Réalisé par L’IFOP cette étude analyse le comportement d’épargne des Français pour assurer leur avenir et préparer leur retraite.</p>\r
    </div>\r
    <div class="alta-news-talking-about-container__right-container__btns-container">\r
        <p>2022</p>\r
        <p>2021</p>\r
        <p>2020</p>\r
    </div>\r
  </div>\r
</section>\r
`,Un=`<section class="webconferences-section">\r
    <h3>Nos webconférences</h3>\r
    <div class="webconferences-section__content wrapper wrapper--50-50">\r
        <div class="webconferences-section__column">\r
            <a class="article-card article-card--horizontal" href="#">\r
                <img class="article-card__image" src="/assets/images/article_default.jpg">\r
                <div class="article-card__content">\r
                    <p class="article-card__date">Diffusé le <span>8/08/2022</span></p>\r
                    <div class="article-card__title">\r
                        <h5 class="link">Web conférence sur le Private Equity</h5>\r
                    </div>\r
                    <p class="article-card__excerpt">Rendez vous le 08 septembre à 16h pour une webconférence dirigée\r
                        par XXX</p>\r
                </div>\r
            </a>\r
            <a class="button button--secondary button--light-theme button--arrow"\r
               href="#">Inscrivez-vous</a>\r
        </div>\r
        <div class="webconferences-section__column">\r
            <a class="article-card article-card--horizontal" href="#">\r
                <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\r
                        allowfullscreen\r
                        class="article-card__image" frameborder="0"\r
                        height="200" src="https://www.youtube.com/embed/btafgDz0MOc"\r
                        title="YouTube video player"\r
                        width="300"></iframe>\r
                <div class="article-card__content">\r
                    <p class="article-card__date">Diffusé le <span>8/08/2022</span></p>\r
                    <div class="article-card__title">\r
                        <h5 class="link">Web conférence sur le Private Equity</h5>\r
                    </div>\r
                    <p class="article-card__excerpt">Pour en parler, Alexis Filisetti, Responsable Relations Partenaires\r
                        chez Generali Investments AM et Louis Deforges, Responsable Clientèle Professionnelle chez\r
                        Isatis Capital.</p>\r
                </div>\r
            </a>\r
            <a class="button button--secondary button--light-theme button--arrow"\r
               href="#">Tous nos replays</a>\r
        </div>\r
    </div>\r
</section>`,On=`<div class="press-section wrapper wrapper--50-50">\r
    <section class="kit-press-section">\r
        <h3>Kit presse</h3>\r
        <div class="kit-press-section__content">\r
            <div class="kit-press-section__row">\r
                <svg class="kit-press-section__picto" viewBox="0 0 64 64">\r
                    <use href="/assets/pictograms/file.svg#picto"></use>\r
                </svg>\r
                <div class="kit-press-section__list">\r
                    <ul>\r
                        <li>Présentation Altaprofits</li>\r
                        <li>Nos activités</li>\r
                        <li>L'équipe dirigeante</li>\r
                        <li>Plus de 2 décennies d'assurance vie en ligne</li>\r
                    </ul>\r
                </div>\r
            </div>\r
            <a class="button button--secondary button--light-theme button--arrow" href="#">Télécharger le kit</a>\r
        </div>\r
    </section>\r
    <section class="contact-press-section">\r
        <h3>Contact presse</h3>\r
        <div class="contact-press-section__content">\r
            <div class="contact-press-section__row">\r
                <img alt="Brigitte Huguet" class="contact-press-section__image" src="/assets/images/contact-press.png">\r
                <div class="contact-press-section__details">\r
                    <h5>Brigitte Huguet</h5>\r
                    <a class="link" href="tel:+33146347861">+33 (0)1 46 34 78 61</a>\r
                    <a class="link"\r
                       href="mailto:information-presse@altaprofits.fr">information-presse@altaprofits.fr</a>\r
                </div>\r
            </div>\r
        </div>\r
    </section>\r
</div>`,Gn=`<section class="kit-press-section">\r
    <h3>Kit presse</h3>\r
    <div class="kit-press-section__content">\r
        <div class="kit-press-section__row">\r
            <svg class="kit-press-section__picto" viewBox="0 0 64 64">\r
                <use href="/assets/pictograms/file.svg#picto"></use>\r
            </svg>\r
            <div class="kit-press-section__list">\r
                <ul>\r
                    <li>Présentation Altaprofits</li>\r
                    <li>Nos activités</li>\r
                    <li>L'équipe dirigeante</li>\r
                    <li>Plus de 2 décennies d'assurance vie en ligne</li>\r
                </ul>\r
            </div>\r
        </div>\r
        <a class="button button--secondary button--light-theme button--arrow" href="#">Télécharger le kit</a>\r
    </div>\r
</section>`,Dn=`<section class="contact-press-section">\r
    <h3>Contact presse</h3>\r
    <div class="contact-press-section__content">\r
        <div class="contact-press-section__row">\r
            <img alt="Brigitte Huguet" class="contact-press-section__image" src="/assets/images/contact-press.png">\r
            <div class="contact-press-section__details">\r
                <h5>Brigitte Huguet</h5>\r
                <a class="link" href="tel:+33146347861">+33 (0)1 46 34 78 61</a>\r
                <a class="link" href="mailto:information-presse@altaprofits.fr">information-presse@altaprofits.fr</a>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,$n=`<section class="experts-voice-section">\r
    <div class="experts-voice-section__header">\r
        <h2 class="experts-voice-section__title">Toutes les paroles d’experts Altaprofits et de nos partenaires</h2>\r
    </div>\r
    <div class="experts-voice-section__content"></div>\r
    <div class="experts-voice-section__navigation">\r
        <div class="experts-voice-section__prev"><</div>\r
        <div class="experts-voice-section__pagination"></div>\r
        <div class="experts-voice-section__next">></div>\r
    </div>\r
</section>\r
`,Hn=`<section class="discover-integration-program-container">\r
    <div class="discover-integration-program-container__background">\r
        \r
    </div>\r
    <h1>Découvrez notre programme d’intégration</h1>\r
    <div class="discover-integration-program-container__cards">\r
        <div class="discover-integration-program-container__cards__card">\r
            <img src="/assets/pictograms/hand-one-finger.svg" alt="one finger hand logo">\r
            <h3>Un suivi personnalisé</h3>\r
            <p>Un programme élaboré<br/> « sur-mesure » en fonction de vos compétences et du poste occupé</p>\r
        </div>\r
        <div class="discover-integration-program-container__cards__card">\r
            \r
            <img src="/assets/pictograms/hand-two-finger.svg" alt="two finger hand logo">\r
            <h3>Un accueil chaleureux</h3>\r
            <p>Un accueil au sein des équipes et une rencontre individuelle avec les managers de proximité et les membres du Comité de Direction</p>\r
        </div>\r
        <div class="discover-integration-program-container__cards__card">\r
            \r
            <img src="/assets/pictograms/hand-third-finger.svg" alt="third finger hand logo">\r
            <h3>Une intégration au petit soin</h3>\r
            <p>Un suivi et un accompagnement quotidien pour une bonne prise en main du poste</p>\r
        </div>\r
    </div>\r
</section>`,Yn=`<section class="questions-container">\r
  <h3>Votre question concerne:</h3>\r
  <div class="accordion-container">\r
    <div class="accordion-container__accordion-btn">\r
      <h4>Souscrire et adhérer</h4>\r
      <svg\r
        width="25"\r
        height="13"\r
        viewBox="0 0 25 13"\r
        fill="none"\r
        xmlns="http://www.w3.org/2000/svg"\r
      >\r
        <path\r
          d="M2 1.5L12.4083 10.8619C12.8053 11.2191 13.4129 11.2012 13.7883 10.8214L23 1.5"\r
          stroke="currentColor"\r
          stroke-width="3"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </div>\r
    <div class="accordion-container__content">\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Quels sont les documents indispensables pour souscrire/adhérer à un\r
            contrat ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Pour finaliser la souscription à un contrat d’assurance vie ou\r
          l’adhésion à un Plan Épargne Retraite (PER), vous devez fournir ces\r
          pièces justificatives :<br />\r
          <li>\r
            Le bulletin de souscription signé accompagné du règlement (par\r
            prélèvement ou virement).\r
          </li>\r
          <li>\r
            La copie d’une pièce d’identité (recto verso pour les cartes\r
            d’identité et les titre de séjour, les deux premières pages pour un\r
            passeport).\r
          </li>\r
          <li>Un RIB à votre nom.</li>\r
          <li>Une facture de téléphone mobile à votre nom.</li>\r
          <li>\r
            Un justificatif de domicile de moins de 3 mois (facture\r
            d’électricité, de gaz, de téléphonie fixe ou encore l’attestation\r
            d’assurance habitation de votre résidence principale).\r
          </li>\r
          <li>\r
            Certains assureurs demandent également, au-delà d’un certain montant\r
            investi, des justificatifs prouvant l’origine des fonds.\r
          </li>\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Que faire si la ligne de téléphone mobile n’est pas à mon nom ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Vous pouvez nous adresser la facture de téléphone mobile, accompagnée\r
          d’une attestation sur l’honneur signée par le détenteur de la ligne\r
          ainsi qu’une copie de sa pièce d’identité en cours de validité (Carte\r
          Nationale d’Identité, passeport ou encore titre de séjour). S’il\r
          s’agit d’un numéro de téléphone professionnel, contactez-nous au 01 44\r
          77 12 14 (appel non surtaxé), du lundi au vendredi de 9h à 18 h, ou\r
          par mail à l’adresse\r
          <a class="link" href="mailto: information@altaprofits.fr">information@altaprofits.fr</a>. Nous vous adresserons une attestation à compléter.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Que faire si mon justificatif de domicile n’est pas à mon nom ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Un justificatif de domicile de moins de 3 mois est nécessaire pour\r
          ouvrir un contrat d’assurance vie ou un Plan Épargne Retraite. Cela\r
          peut être la facture d’un fournisseur d’énergie, d’un abonnement de\r
          téléphone ou à internet, ou encore le justificatif de la taxe\r
          d’habitation de votre résidence. Vous n’avez aucun de ces documents à\r
          votre nom ? Vous pouvez nous faire parvenir\r
          <b>une attestation d’hébergement</b> avec le justificatif de domicile.\r
          Il faut y joindre la copie d’une pièce d’identité en cours de validité\r
          de la personne qui vous héberge (Carte Nationale d’Identité, passeport\r
          ou encore titre de séjour).\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment reprendre une souscription/adhésion en cours ?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Les informations que vous avez saisies lors du processus de\r
          souscription/adhésion sont <b>automatiquement enregistrées</b>. Vous\r
          avez donc la possibilité de\r
          <b>reprendre une souscription en cours</b>, à l’étape même où vous\r
          vous êtes arrêté, en vous connectant à votre espace client en ligne.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment exercer mon droit de renonciation ?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Vous disposez de <b>30 jours calendaires</b> pour user de votre droit\r
          de renonciation après avoir souscrit un contrat d’assurance vie, de\r
          capitalisation ou un PER. Ce délai court à partir de la date d’effet\r
          du contrat. Si ce délai expire un samedi, un dimanche ou un jour férié\r
          chômé, il n’est pas prorogé. Votre demande de renonciation,\r
          accompagnée des conditions particulières de votre contrat, doit être\r
          envoyée par <b>lettre recommandée</b> à la compagnie d’assurance. Vous\r
          pouvez retrouver les modalités de renonciation à votre contrat dans la\r
          notice d’information valant conditions générales. L’assureur dispose\r
          de 30 jours, à réception de votre lettre recommandée, pour procéder\r
          aux remboursements des sommes versées.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment être accompagné par un conseiller Altaprofits?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Nous sommes à votre disposition pour répondre à vos questions et vous\r
          accompagner dans tous vos projets par téléphone au 01 44 77 12 14, du\r
          lundi au vendredi de 9h à 18 h. Vous pouvez aussi nous écrire à\r
          <a class="link" href="mailto: information@altaprofits.fr">information@altaprofits.fr</a>.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Comment souscrire un contrat d’assurance vie pour un enfant mineur ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Vous pouvez souscrire à un contrat d’assurance vie ou adhérer à un\r
          Plan Epargne Retraite pour un enfant mineur. À la 4e étape de\r
          souscription/adhésion concernant les informations personnelles du\r
          souscripteur/adhérent du contrat, vous renseignerez les nom, prénom et\r
          informations personnelles (âge, adresse, nationalité...) du mineur.\r
          Toutefois, pour le questionnaire portant sur le patrimoine et le\r
          profil investisseur, ce sont les données des représentants légaux qui\r
          doivent être saisies. Pour les pièces d’identité, vous devrez joindre\r
          à celle du mineur, celles des deux représentants légaux. À noter, le\r
          bulletin de souscription/adhésion devra être signé par les deux\r
          parents si l’enfant est mineur et, s’il a plus de 12 ans, les deux\r
          parents et l’enfant lui-même.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment être accompagné par un conseiller Altaprofits?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Nous sommes à votre disposition pour répondre à vos questions et vous\r
          accompagner dans tous vos projets par téléphone au 01 44 77 12 14, du\r
          lundi au vendredi de 9h à 18 h. Vous pouvez aussi nous écrire à\r
          <a class="link" href="mailto: information@altaprofits.fr">information@altaprofits.fr</a>.\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
  <div class="accordion-container">\r
    <div class="accordion-container__accordion-btn">\r
      <h4>Gérer mon contrat</h4>\r
      <svg\r
        width="25"\r
        height="13"\r
        viewBox="0 0 25 13"\r
        fill="none"\r
        xmlns="http://www.w3.org/2000/svg"\r
      >\r
        <path\r
          d="M2 1.5L12.4083 10.8619C12.8053 11.2191 13.4129 11.2012 13.7883 10.8214L23 1.5"\r
          stroke="currentColor"\r
          stroke-width="3"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </div>\r
    <div class="accordion-container__content">\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment modifier mes coordonnées postales ?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Vous pouvez modifier vos coordonnées postales en vous connectant à\r
          votre espace client. Dans la rubrique <b>Mon Profil</b>, vous cliquez\r
          sur le menu <b>Gérer et modifier vos données personnelles.</b> Une\r
          fois les modifications enregistrées, un avenant de modification de\r
          données personnelles sera édité. Il est nécessaire de nous le\r
          renvoyer, accompagné d’un justificatif de domicile (facture\r
          d’électricité, de gaz, d’accès à internet…) de moins de 3 mois.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Comment modifier mes coordonnées téléphoniques fixes ou mobiles ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Vous pouvez modifier votre numéro de téléphone fixe ou mobile depuis\r
          votre espace client. Pour cela, rendez-vous dans la rubrique\r
          <b>Mon Profil</b>, puis cliquez sur le menu\r
          <b>Gérer et modifier mes données</b>. Une fois les modifications\r
          effectuées, un bordereau sera édité. Vous devez nous le renvoyer\r
          accompagné d’un justificatif (une facture de téléphone de moins de 3\r
          mois ou l’échéancier de moins de 12 mois).\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment modifier mes coordonnées bancaires ?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Vous souhaitez modifier le compte bancaire de référence que vous avez\r
          enregistré lors de la souscription de votre contrat ? Vous pouvez\r
          effectuer cette opération dans votre espace client, en cliquant sur le\r
          nom de votre contrat puis dans le menu <b>Effectuer une opération</b>,\r
          cliquez sur <b>Modification des données bancaires</b>. Saisissez les\r
          informations demandées sur le nouveau compte à enregistrer (nom du\r
          titulaire du compte, nom de l’établissement bancaire …) ainsi que l’<b\r
            >IBAN</b\r
          >\r
          et le code <b>BIC</b>, puis suivez les indications. Un avenant de\r
          modification de données bancaires va être édité, vous devez nous le\r
          renvoyer accompagné des pièces justificatives demandées (le mandat\r
          SEPA, un justificatif de domicile de moins de 3 mois, une pièce\r
          d’identité, et le RIB faisant apparaître l’IBAN et logo de la banque).\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Comment retrouver l’identifiant pour accéder à mon espace client ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          L’identifiant de votre espace client est celui que vous avez choisi\r
          lors de l’ouverture de votre compte. Si vous avez oublié votre\r
          identifiant, nous vous invitons à nous contacter au 01 44 77 12 14\r
          (appel non surtaxé), du lundi au vendredi de 9h à 18 h, ou nous écrire\r
          à\r
          <a class="link" href="mailto: information@altaprofits.fr">information@altaprofits.fr</a>. Nos conseillers vous détaillerons la démarche à suivre et feront\r
          les vérifications de sécurité nécessaires pour vous permettre\r
          d’accéder à votre espace client.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Comment retrouver le mot de passe pour accéder à mon espace client ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Vous avez oublié le mot de passe qui vous permet d’accéder à votre\r
          compte ? Sur la page d’accueil de l’espace client, cliquez sur\r
          <b>Mot de passe oublié</b>, puis renseignez votre identifiant afin\r
          qu’un lien de réinitialisation vous soit envoyé. Votre nouveau mot de\r
          passe doit contenir 12 caractères minimum, avec au moins : <br />\r
          <li>Une majuscule,</li>\r
          <li>Une minuscule,</li>\r
          <li>Un chiffre,</li>\r
          <li>Un caractère spécial.</li>\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment modifier ma clause bénéficiaire ?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Vous pouvez modifier la clause bénéficiaire de vos contrats dans votre\r
          espace client, en cliquant sur le menu <b>Effectuer une opération</b>,\r
          puis en cliquant sur <b>Clause bénéficiaire</b>. Vous pouvez consulter\r
          la clause actuellement en vigueur sur votre contrat et, pour la\r
          modifier, cliquez sur <b>Oui</b>. Une fois les modifications\r
          apportées, vous nous renvoyez le bordereau imprimé, avec un\r
          justificatif de votre identité. Si vous avez opté pour\r
          <b>le mandat de transmission d’ordres</b> (MTO), vous n’avez pas à\r
          accomplir cette formalité, la demande de modification est envoyée\r
          directement à l’assureur.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Qu’est-ce qu’un MTO ?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Le <b>Mandat de Transmission d’Ordres</b> (ou MTO) est un processus de\r
          dématérialisation des opérations de gestion de votre contrat. Les\r
          demandes sont transmises directement par internet à l’assureur grâce à\r
          des processus de signature électronique. Le <b>MTO</b> est un moyen\r
          qui vous permet de gérer plus simplement et plus rapidement votre\r
          épargne, et en toute sécurité.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment mettre en place une clause bénéficiaire démembrée ?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          La clause bénéficiaire démembrée permet de distinguer le bénéficiaire\r
          de l’usufruit du capital (qui le recevra à votre décès) et le\r
          bénéficiaire de la nue-propriété, qui recevra le capital au décès de\r
          l’usufruitier, en bénéficiant de la fiscalité successorale avantageuse\r
          de l’assurance vie. Pour la mettre en place, rendez-vous dans votre\r
          espace client, dans le menu <b>Effectuer une opération</b>, puis\r
          <b>Clause bénéficiaire : consultation et/ou modification</b>. Notre\r
          outil vous accompagne dans la rédaction de cette clause bénéficiaire,\r
          vous n’aurez plus qu’à éditer puis nous renvoyer le document. La\r
          clause bénéficiaire démembrée vous permet d’optimiser la transmission\r
          d’un capital, notamment en protégeant votre conjoint sans léser vos\r
          enfants. Nous vous conseillons de faire un point avec un conseiller\r
          patrimonial pour vous assurer que sa rédaction est adaptée à votre\r
          situation et à vos attentes. Vous pouvez nous contacter par téléphone\r
          au 01 44 77 12 14, du lundi au vendredi de 9h à 18 h, ou nous écrire à\r
          <a class="link" href="mailto: information@altaprofits.fr">information@altaprofits.fr</a>.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment modifier mon profil de risque ?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Connectez-vous à votre espace client, puis dans l’espace profil, allez\r
          dans le menu <b>Gérer et modifier mes données</b>. Ensuite, cliquez\r
          sur <b>Gérer et modifier mes données</b>. Vous devez répondre à une\r
          série de questions portant sur votre patrimoine, vos revenus, ainsi\r
          que des questions sur votre profil investisseur pour établir votre\r
          sensibilité au risque financier et évaluer vos connaissances\r
          financières. A l’issue de ce questionnaire, vous pouvez consulter\r
          votre profil de risque, établi sur vos nouvelles informations.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Comment réaliser un versement, un arbitrage ou encore un rachat ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Vous pouvez effectuer ces <b>opérations de gestion</b> de votre\r
          contrat en ligne, depuis votre espace client. Dans l’espace dédié à\r
          votre contrat, cliquez sur <b>Effectuer une opération</b> pour accéder\r
          au menu vous permettant d’effectuer un versement libre, un arbitrage,\r
          un rachat, créer un versement programmé ou encore mettre en place la\r
          gestion pilotée. Certaines opérations nécessitent l’impression d’un\r
          bulletin d’opération à nous renvoyer ou la validation par signature\r
          électronique .\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Comment obtenir un avenant d’opération (après un arbitrage, un\r
            rachat, un changement de clause bénéficiaire...) ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Ce document est disponible dans votre espace client, en cliquant sur\r
          le nom du contrat. Vous trouverez dans l’onglet\r
          <b>Documents et courriers</b>, tous les avenants d’opération au format\r
          PDF. Si nécessaire vous pouvez le télécharger et/ou l’imprimer.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>Comment obtenir un relevé de situation ?</h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Les relevés de situation sont disponibles dans votre espace en ligne,\r
          en cliquant sur le nom du contrat. Dans l’onglet\r
          <b>Documents et courriers</b>, vous disposez du\r
          <b>relevé d’information annuel</b> (ou RIA) édité au 31 décembre de\r
          chaque année. Si vous souhaitez un relevé de situation en cours\r
          d’année, rendez-vous sur la page d’accueil du contrat, puis cliquez\r
          sur le logo imprimante situé à droite. Le relevé de situation à date\r
          s’affiche, vous pouvez le télécharger et/ou l’imprimer.\r
        </div>\r
      </div>\r
      <div class="accordion-container__content__question-container">\r
        <div class="accordion-container__content__question-container__question">\r
          <h5>\r
            Quels sont les documents indispensables pour souscrire/adhérer à un\r
            contrat ?\r
          </h5>\r
          <h3>+</h3>\r
        </div>\r
        <div class="accordion-container__content__question-container__response">\r
          Pour finaliser la souscription à un contrat d’assurance vie ou\r
          l’adhésion à un Plan Épargne Retraite (PER), vous devez fournir ces\r
          pièces justificatives : Le bulletin de souscription signé accompagné\r
          du règlement (par prélèvement ou virement). La copie d’une pièce\r
          d’identité (recto verso pour les cartes d’identité et les titre de\r
          séjour, les deux premières pages pour un passeport). Un RIB à votre\r
          nom. Une facture de téléphone mobile à votre nom. Un justificatif de\r
          domicile de moins de 3 mois (facture d’électricité, de gaz, de\r
          téléphonie fixe ou encore l’attestation d’assurance habitation de\r
          votre résidence principale). Certains assureurs demandent également,\r
          au-delà d’un certain montant investi, des justificatifs prouvant\r
          l’origine des fonds.\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`,Jn=`<section class="squad-container">\r
  <h3>Les équipe Altaprofits :</h3>\r
  <div class="squad-container__cards">\r
    <div class="squad-container__cards__card">\r
      <h3>+20 ans d'expertise</h3>\r
      <p>au service de votre épargne</p>\r
    </div>\r
    <div class="squad-container__cards__card">\r
      <h3>35 ans</h3>\r
      <p>âge moyen</p>\r
    </div>\r
    <div class="squad-container__cards__card">\r
      <h3>60 collaborateurs</h3>\r
      <p>dont 45% de femmes</p>\r
    </div>\r
  </div>\r
  <div class="squad-container__different-jobs">\r
    <h3>Les différents métiers</h3>\r
    <div class="squad-container__different-jobs__graph">\r
        <p>Relation client\r
            et conseillers en \r
            gestion patrimoine</p>\r
      <img\r
        src="/assets/images/squad-schema.png"\r
        alt="graphique différents métiers"\r
      />\r
      <div class="squad-container__different-jobs__graph__right-text-container">\r
        <p>Fonction support</p>\r
        <p>Informatique</p>\r
      </div>\r
      \r
    </div>\r
  </div>\r
</section>\r
`,Qn=`<section class="alta-in-number">\r
    <h3>Altaprofits en chiffres</h3>\r
    <div class="alta-in-number__cards">\r
        <div class="alta-in-number__cards__card">\r
            <h3>60</h3>\r
            <p>dont 45% de femmes</p>\r
        </div>\r
        <div class="alta-in-number__cards__card">\r
            <h3>60.000</h3>\r
            <p>clients qui nous ont confié leur épargne</p>\r
        </div>\r
        <div class="alta-in-number__cards__card">\r
            <h3>100€</h3>\r
            <p>le montant minimum pour démarrer votre projet d’épargne</p>\r
        </div>\r
        <div class="alta-in-number__cards__card">\r
            <h3>4</h3>\r
            <p>partenaires assureurs</p>\r
        </div>\r
    </div>\r
</section>\r
`,Zn=`<section class="history-section">\r
  <h3>Notre histoire depuis 1999</h3>\r
  <div class="history-section__cards-section">\r
    <div class="history-section__cards-section__left-arrow">\r
      <svg\r
        class="left-arrow"\r
        width="14"\r
        height="25"\r
        viewBox="0 0 14 25"\r
        fill="none"\r
        xmlns="http://www.w3.org/2000/svg"\r
      >\r
        <path\r
          d="M12 2L2.63806 12.4083C2.28092 12.8053 2.29879 13.4129 2.67864 13.7883L12 23"\r
          stroke="#001329"\r
          stroke-width="3"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </div>\r
\r
    <div class="history-section__cards-section__cards">\r
    </div>\r
\r
    <div class="history-section__cards-section__right-arrow">\r
      <svg\r
        width="14"\r
        height="25"\r
        viewBox="0 0 14 25"\r
        fill="none"\r
        xmlns="http://www.w3.org/2000/svg"\r
      >\r
        <path\r
          d="M2 23L11.3619 12.5917C11.7191 12.1947 11.7012 11.5871 11.3214 11.2117L2 2"\r
          stroke="#001329"\r
          stroke-width="3"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </div>\r
  </div>\r
</section>\r
`,Wn=`<section class="reason-to-join-section">\r
  <div class="reason-to-join-section__header">\r
      <div class="reason-to-join-section__header__text-container">\r
          <h3>5 bonnes raisons de nous rejoindre</h3>\r
          <li>Des missions variées</li>\r
          <li>Une entreprise agile et engagée</li>\r
          <li>Une équipe jeune et pluridisciplinaire</li>\r
          <li>De nombreux partenaires de renom</li>\r
          <li>Des bureaux flex au cœur de Paris</li>\r
        </div>\r
        <div class="reason-to-join-section__header__overlay"></div>\r
  </div>\r
  <div class="reason-to-join-section__footer">\r
    <div class="reason-to-join-section__footer__cards">\r
      <div class="reason-to-join-section__footer__cards__card">\r
        <img src="/assets/images/join-us-img1.jpg" alt="image de l'equipe" />\r
        <p>Escape Game</p>\r
      </div>\r
      <div class="reason-to-join-section__footer__cards__card">\r
        <img src="/assets/images/join-us-img2.jpg" alt="image de l'equipe" />\r
        <p>Secret Santa</p>\r
      </div>\r
      <div class="reason-to-join-section__footer__cards__card">\r
        <img src="/assets/images/join-us-img3.jpg" alt="image de l'equipe" />\r
        <p>Afterwork</p>\r
      </div>\r
      <div class="reason-to-join-section__footer__cards__card">\r
        <img src="/assets/images/join-us-img4.jpg" alt="image de l'equipe" />\r
        <p>Crazy Quizz</p>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`,Kn=`<section class="discover-our-job">\r
  <h3>Découvrez nos métiers</h3>\r
  <div class="discover-our-job__card-section">\r
    <div class="discover-our-job__card-section__left-arrow">\r
      <svg\r
        class="left-arrow"\r
        width="14"\r
        height="25"\r
        viewBox="0 0 14 25"\r
        fill="none"\r
        xmlns="http://www.w3.org/2000/svg"\r
      >\r
        <path\r
          d="M12 2L2.63806 12.4083C2.28092 12.8053 2.29879 13.4129 2.67864 13.7883L12 23"\r
          stroke="#001329"\r
          stroke-width="3"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </div>\r
\r
    <div class="discover-our-job__card-section__cards">\r
    </div>\r
\r
    <div class="discover-our-job__card-section__right-arrow">\r
      <svg\r
        width="14"\r
        height="25"\r
        viewBox="0 0 14 25"\r
        fill="none"\r
        xmlns="http://www.w3.org/2000/svg"\r
      >\r
        <path\r
          d="M2 23L11.3619 12.5917C11.7191 12.1947 11.7012 11.5871 11.3214 11.2117L2 2"\r
          stroke="#001329"\r
          stroke-width="3"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </div>\r
  </div>\r
</section>\r
`,Xn=`<section class="join-the-team-section">\r
  <h3>Rejoindre la Team Altaprofits</h3>\r
  <div class="join-the-team-section__offer-container">\r
    <div class="join-the-team-section__offer-container__offer-btn">\r
      <h3>Chef de projet Marketing Digital (H/F)</h3>\r
      <svg\r
        width="25"\r
        height="13"\r
        viewBox="0 0 25 13"\r
        fill="none"\r
        xmlns="http://www.w3.org/2000/svg"\r
      >\r
        <path\r
          d="M2 1.5L12.4083 10.8619C12.8053 11.2191 13.4129 11.2012 13.7883 10.8214L23 1.5"\r
          stroke="currentColor"\r
          stroke-width="3"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </div>\r
    <div class="join-the-team-section__offer-container__content">\r
      <div>\r
        Altaprofits est une société de courtage d’assurance-vie en ligne\r
        multi-assureurs.<br />\r
        Société de conseil en Gestion de Patrimoine sur internet depuis 1999,\r
        Altaprofits est adossé à Generali France.<br />\r
        Notre engagement est de défendre l’épargne de nos clients en mettant à\r
        leur disposition l’expertise d’une équipe de Conseillers en Gestion de\r
        Patrimoine et une plateforme internet efficace.<br />\r
        Pour cela nous élaborons avec nos clients des solutions d’investissement\r
        pour répondre à leurs besoins patrimoniaux et financer leurs projets à\r
        moyen et long terme.<br />\r
        Nous sélectionnons pour eux des partenaires assureurs et des sociétés de\r
        gestion d’actifs de renom afin de bâtir la stratégie d’investissement\r
        optimale.<br />\r
        Vous souhaitez participer au développement d’une activité en forte\r
        croissance au sein d’une équipe dynamique et bienveillante ?\r
        Passionné(e), vous avez à cœur d’intégrer une entreprise à taille\r
        humaine, où chaque contribution joue un rôle essentiel dans la réussite\r
        des projets ?<br />\r
        Rejoignez-nous !\r
      </div>\r
      <h2>Missions :</h2>\r
      <div>\r
        <p>\r
          Au sein de la Direction Marketing et Communication et rattaché(e) à la\r
          Directrice Marketing, nous recherchons notre Chef de Projet Marketing\r
          Digital. Pour répondre aux objectifs définis par la Direction et la\r
          stratégie mise en place, vos principales missions sont les suivantes :\r
        </p>\r
\r
        <p>\r
          <strong\r
            >Mettre en œuvre et piloter les campagnes upselling et crosselling\r
            :</strong\r
          >\r
        </p>\r
\r
        <ul>\r
          <li>\r
            En lien avec les équipes Produits, Communication et Marketing, vous\r
            contribuez à la conception de la stratégie de fidélisation.\r
          </li>\r
          <li>\r
            Vous mettez en œuvre ces campagnes pour atteindre les objectifs\r
            commerciaux en fidélisation.\r
          </li>\r
          <li>Vous suivez et diffusez les résultats des opérations.</li>\r
          <li>\r
            Vous proposez et mettez en œuvre des évolutions dans les dispositifs\r
            en mode test and learn.\r
          </li>\r
          <li>\r
            Vous assurez les échanges et les validations avec l’ensemble des\r
            parties prenantes internes et externes.\r
          </li>\r
        </ul>\r
\r
        <p>\r
          <strong>Analyser la data et les campagnes réalisées :</strong>\r
        </p>\r
\r
        <ul>\r
          <li>\r
            Vous suivez et diffusez les résultats des opérations (analyse de la\r
            data dans le CRM, communication aux équipes…).\r
          </li>\r
          <li>\r
            Vous êtes force de proposition de nouvelles opérations aux vues de\r
            l’analyse réalisée sur les différents portefeuilles.\r
          </li>\r
          <li>\r
            Vous assurez une veille concurrentielle sur les thématiques de\r
            fidélisation\r
          </li>\r
        </ul>\r
\r
        <p>\r
          <strong>Maîtriser le CRM Salesforces :</strong>\r
        </p>\r
\r
        <ul>\r
          <li>\r
            Vous avez une parfaite maîtrise du CRM pour analyser les données,\r
            établir le profil des clients par portefeuille, leur parcours…\r
          </li>\r
          <li>Vous définissez et suivez les chiffres clefs : KPi’s,</li>\r
          <li>\r
            Vous élaborez des reportings d’activités (dashboard, analyse de\r
            données, rapport de campagnes…) et des analyses dans un but Roiste.\r
          </li>\r
        </ul>\r
\r
        <p>\r
          <strong>Comprendre les process et des outils internes :</strong>\r
        </p>\r
\r
        <ul>\r
          <li>\r
            Vous acquérez et entretenez une bonne compréhension des outils\r
            d’envoi des campagnes (comme Sarbacane).\r
          </li>\r
          <li>Vous savez prendre en main les process et outils internes.</li>\r
        </ul>\r
\r
        <h2>PROFIL RECHERCHE</h2>\r
\r
        <div>\r
          De formation supérieure (idéalement master en marketing), vous\r
          présentez une expérience en marketing opérationnel et en gestion de\r
          campagnes d’au moins 4 ans.<br />\r
          Vous portez de l’intérêt au secteur de l’épargne, la banque et/ou\r
          l’assurance. La maîtrise de Salesforce est indispensable. La\r
          connaissance d’un outil de gestion de campagne sera également\r
          appréciée.<br />\r
          Vous êtes curieux, dynamique et autonome, appréciez le travail en\r
          équipe, le contact humain et travailler en transverse avec de nombreux\r
          interlocuteurs. Rigoureux(se) et organisé(e), vous vous sentez capable\r
          de porter le sujet du marketing opérationnel.\r
        </div>\r
      </div>\r
      <div class="join-the-team-section__offer-container__content__btn">\r
        <a\r
          class="button button--secondary button--light-theme button--small"\r
          href="#"\r
          >Candidater</a\r
        >\r
      </div>\r
    </div>\r
  </div>\r
  <div class="join-the-team-section__offer-container">\r
    <div class="join-the-team-section__offer-container__offer-btn">\r
      <h3>Chargé(e) de Relation Client (H/F)</h3>\r
      <svg\r
        width="25"\r
        height="13"\r
        viewBox="0 0 25 13"\r
        fill="none"\r
        xmlns="http://www.w3.org/2000/svg"\r
      >\r
        <path\r
          d="M2 1.5L12.4083 10.8619C12.8053 11.2191 13.4129 11.2012 13.7883 10.8214L23 1.5"\r
          stroke="currentColor"\r
          stroke-width="3"\r
          stroke-linecap="round"\r
        />\r
      </svg>\r
    </div>\r
    <div class="join-the-team-section__offer-container__content">\r
      <div class="rtejustify text-align-justify">\r
        Altaprofits, structure à taille humaine adossée au groupe Generali, est\r
        composée d’une cinquantaine de collaborateurs et propose une offre\r
        élargie dans les domaines de la Gestion de Patrimoine (Epargne,\r
        Retraite, Prévoyance, Immobilier) avec des partenaires de renom\r
        assureurs et sociétés de gestion. Forte de son expertise phygitale avec\r
        d’un côté une plateforme internet permettant de visualiser et gérer son\r
        épargne en ligne, et, de l’autre, une équipe de conseillers en gestion\r
        de patrimoine dédiée au conseil et à l’accompagnement, Altaprofits est\r
        un des leaders de l’épargne en ligne avec aujourd’hui 3 Md€ d’encours.\r
        Altaprofits, c’est aussi une société tournée vers ses clients et la\r
        défense de leurs intérêts : conseils, innovations technologiques, et\r
        depuis sa création, mise à disposition d’offres novatrices et\r
        compétitives.\r
      </div>\r
      <div class="rtejustify text-align-justify">\r
        Vous souhaitez rejoindre une structure à forte ambition de croissance,\r
        contribuer activement à son évolution ? C’est ici !\r
      </div>\r
      <h2 class="rtejustify text-align-justify">Missions :</h2>\r
      <div class="rtejustify text-align-justify">\r
        Au sein du Développement Commercial, vous intégrez le Pôle Relation\r
        Client en tant que Chargé (e) de Relation Client.<br />\r
        A ce titre, vos principales missions seront les suivantes :&nbsp; &nbsp;\r
      </div>\r
      <ul>\r
        <li class="rtejustify text-align-justify">\r
          Vous prenez en charge et traitez les demandes des clients selon les\r
          différents canaux : appels téléphoniques et mails.&nbsp;&nbsp; &nbsp;\r
        </li>\r
        <li class="rtejustify text-align-justify">\r
          En fonction des appels, vous identifiez des opportunités et contribuez\r
          ainsi au dévelop-pement commercial&nbsp;&nbsp;\r
        </li>\r
        <li class="rtejustify text-align-justify">\r
          Vous veillez à la satisfaction des clients et au développement de\r
          l’activité\r
        </li>\r
        <li class="rtejustify text-align-justify">\r
          Vous enrichissez les bases de données pour une meilleure connaissance\r
          client\r
        </li>\r
      </ul>\r
      <h2 class="rtejustify text-align-justify">\r
        Profil &amp; Expérience :&nbsp;&nbsp; &nbsp;\r
      </h2>\r
      <div class="rtejustify text-align-justify">\r
        <ul>\r
          <li class="rtejustify text-align-justify">\r
            De formation Bac+2 minimum dans le domaine de la banque/assurance,\r
            vous justifiez d’une expérience de 2/3 ans comme chargé(e) de\r
            relation client dans ce même secteur.\r
          </li>\r
          <li class="rtejustify text-align-justify">\r
            Vous faites preuve d’aisance relationnelle et d’une très bonne\r
            capacité d’écoute pour comprendre les besoins de votre\r
            interlocuteur&nbsp;&nbsp; &nbsp;\r
          </li>\r
          <li class="rtejustify text-align-justify">\r
            Vous démontrez une appétence à la négociation commerciale, vous\r
            aimez convaincre\r
          </li>\r
          <li class="rtejustify text-align-justify">\r
            Vous possédez une bonne expression, tant à l’oral qu’à\r
            l’écrit&nbsp;&nbsp; &nbsp;\r
          </li>\r
          <li class="rtejustify text-align-justify">\r
            Vous connaissez l’univers de l’épargne, de l’assurance vie et de la\r
            Gestion de patrimoine et les actes de gestion liés à la vie des\r
            contrats d’assurance vie&nbsp;&nbsp; &nbsp;\r
          </li>\r
          <li class="rtejustify text-align-justify">\r
            Vous faites preuve de rigueur et de professionnalisme\r
          </li>\r
          <li class="rtejustify text-align-justify">\r
            Vous êtes reconnu pour votre dynamisme et votre esprit d’équipe.\r
          </li>\r
          <li class="rtejustify text-align-justify">\r
            Vous souhaitez vous investir dans une société qui vous fera évoluer\r
            et dans laquelle vous pourrez construire une carrière\r
            professionnelle.\r
          </li>\r
        </ul>\r
      </div>\r
      <h2 class="rtejustify text-align-justify">Conditions et avantages :</h2>\r
      <ul>\r
        <li class="rtejustify text-align-justify">\r
          Rémunération fixe + variable selon profil et expérience\r
        </li>\r
      </ul>\r
      <div class="join-the-team-section__offer-container__content__btn">\r
        <a\r
          class="button button--secondary button--light-theme button--small"\r
          href="#"\r
          >Candidater</a\r
        >\r
      </div>\r
    </div>\r
    <div class="join-the-team-section__offer-container__btn">\r
      <a\r
        class="button button--secondary button--light-theme button--small"\r
        href="#"\r
        >Candidature spontanée</a\r
      >\r
    </div>\r
  </div>\r
</section>\r
`,ne=`<section class="piloted-graph-section">\r
    <h2>Investissez sereinement,<br/>choisissez la gestion pilotée</h2>\r
    <p>Découvrez les performances cumulées selon le profil :</p>\r
    <div class="piloted-graph-section__btns-container">\r
\r
    <!--\r
\r
        data-content="[[{'titre': 'SUR 3 ANS','percentage': 3.1,'description': 'Profil 1<br>Lazard Frères Gestion<br>SRI 3','conditions': 'c1'}, {'titre': 'SUR 5 ANS','active': 1,'percentage': 8.4,'description': 'Profil 7<br>Lazard Frères Gestion<br>SRI 4','conditions': 'c2'}, {'titre': 'DEPUIS L'ORIGINE','percentage': 11.9,'description': 'Conviction<br>Generali Wealth Solutions<br>SRI 5','conditions': 'c3'}], [{'percentage': 5.3,'description': 'Profil 1<br>Lazard Frères Gestion<br>SRI 3'}, {'percentage': 9.4,'description': 'Profil 7<br>Lazard Frères Gestion<br>SRI 4'}, {'percentage': 15.8,'description': 'Conviction<br>Generali Wealth Solutions<br>SRI 5'}], [{'percentage': 7.3,'description': 'Profil 1<br>Lazard Frères Gestion<br>SRI 3'}, {'percentage': 10.4,'description': 'Profil 7<br>Lazard Frères Gestion<br>SRI 4'}, {'percentage': 16.9,'description': 'Conviction<br>Generali Wealth Solutions<br>SRI 5'}]]">\r
\r
        \r
                    <div class="piloted-graph-section__btns-container__btn" data-attr="0">SUR 3 ANS</div>\r
                    <div class="piloted-graph-section__btns-container__btn piloted-graph-section__btns-container__btn--active" data-attr="1">SUR 5 ANS</div>\r
                    <div class="piloted-graph-section__btns-container__btn" data-attr="2">\r
                      DEPUIS L'ORIGINE\r
                    </div>\r
                    -->\r
    </div>\r
    <div class="piloted-graph-section__graph-container">\r
        <!--\r
    <div class="piloted-graph-section__btns-container__btn" data-attr="0">SUR 3 ANS</div>\r
       <div class="piloted-graph-section__btns-container__btn piloted-graph-section__btns-container__btn--active" data-attr="1">SUR 5 ANS</div>\r
       <div class="piloted-graph-section__btns-container__btn" data-attr="2">\r
         DEPUIS L'ORIGINE\r
       </div>\r
\r
\r
        <div\r
          class="piloted-graph-section__graph-container__bar-container"\r
          data-attr="bar-1"\r
        >\r
          <div\r
            class="piloted-graph-section__graph-container__bar-container__bar-graph"\r
          >\r
            3.3%\r
          </div>\r
          <div\r
            class="piloted-graph-section__graph-container__bar-container__bar-information"\r
          >\r
            Prudent\r
          </div>\r
        </div>\r
        <div\r
          class="piloted-graph-section__graph-container__bar-container"\r
          data-attr="bar-2"\r
        >\r
          <div\r
            class="piloted-graph-section__graph-container__bar-container__bar-graph"\r
          >\r
            8.4%\r
          </div>\r
          <div\r
            class="piloted-graph-section__graph-container__bar-container__bar-information"\r
          >\r
            Equilibré\r
          </div>\r
        </div>\r
        <div\r
          class="piloted-graph-section__graph-container__bar-container"\r
          data-attr="bar-3"\r
        >\r
          <div\r
            class="piloted-graph-section__graph-container__bar-container__bar-graph"\r
          >\r
            11.9%\r
          </div>\r
          <div\r
            class="piloted-graph-section__graph-container__bar-container__bar-information"\r
          >\r
            Dynamique\r
          </div>\r
        </div> -->\r
    </div>\r
    <div class="piloted-graph-section__conditions">\r
        <p>\r
            Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie.\r
            Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en\r
            unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la\r
            hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est\r
            recommandé d’établir son profil investisseur.\r
        </p>\r
    </div>\r
\r
    <a class="button button--secondary button--light-theme button--arrow" href="#">Découvrir la gestion pilotée</a\r
    >\r
</section>\r
`,ee=`<section class="tabs-navigation-section">\r
    <div class="tabs-navigation">\r
        <a class="tab tab--active" href="#">\r
            <span class="tab__text">L'essentiel</span>\r
        </a>\r
        <a class="tab" href="#">\r
            <span class="tab__text">J'investis</span>\r
        </a>\r
        <a class="tab" href="#">\r
            <span class="tab__text">Tarification</span>\r
        </a>\r
        <a class="tab" href="#">\r
            <span class="tab__text">Fonctionnement</span>\r
        </a>\r
    </div>\r
</section>`,re=`<section class="white-book-section">\r
    <h3 class="white-book-section__title">Téléchargez nos livres blancs</h3>\r
    <div class="white-book-section__list">\r
        <div class="white-book-section__item">\r
            <div class="white-book-section__item__image">\r
                <img alt="" class="white-book-section__image image" src="/assets/images/livre-blanc-assurance-vie.png">\r
            </div>\r
            <div class="white-book-section__item__content">\r
                <h3 class="white-book-section__item__content__title">L'Assurance Vie, le placement préféré des\r
                    français !</h3>\r
                <div class="white-book-section__item__content__description"><p>Que vous souhaitiez valoriser votre\r
                    épargne, optimiser votre fiscalité, préparer votre retraite ou faciliter la transmission de votre\r
                    patrimoine, l’assurance vie vous accompagne et répond à tous vos besoins quel que soit votre projet\r
                    et à tous les moments de votre vie.</p></div>\r
                <a class="button button--secondary button--light-theme" href="#" target="_blank">Téléchargez</a>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="owl-controls">\r
        <div class="owl-nav">\r
            <div class="owl-prev">\r
                <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                    <path d="M11.5 1.5L2.13806 11.9083C1.78092 12.3053 1.79879 12.9129 2.17864 13.2883L11.5 22.5" stroke="#001329" stroke-width="3" stroke-linecap="round"/>\r
                </svg>\r
            </div>\r
            <div class="owl-next">\r
                <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
                    <path d="M1.5 22.5L10.8619 12.0917C11.2191 11.6947 11.2012 11.0871 10.8214 10.7117L1.5 1.5" stroke="#001329" stroke-width="3" stroke-linecap="round"/>\r
                </svg>\r
            </div>\r
        </div>\r
        <div class="owl-dots" style="display: none;"></div>\r
    </div>\r
</section>`,te=`<section class="capital-calculator-section" data-content="">\r
  <div class="capital-calculator-section__title">\r
    <h2>Et vous, quel capital souhaitez-vous obtenir&nbsp;?</h2>\r
  </div>\r
  <div class="capital-calculator-section__cursors-container">\r
    <div class="capital-calculator-section__cursors-container__cursor-container">\r
      <p>Quel est votre investissement initial&nbsp;?</p>\r
      <label for="first-range">40 000€</label>\r
      <input type="range" id="first-range" name="first-range" \r
         min="1000" max="100000" value="40000" step="1000" data-attr="€">\r
    </div>\r
    <div class="capital-calculator-section__cursors-container__cursor-container">\r
      <p>Quels seront vos versements mensuels&nbsp;?</p>\r
      <label for="second-range">200€</label>\r
      <input type="range" id="second-range" name="second-range" \r
         min="0" max="1000" value="200" step="50" data-attr="€">\r
    </div>\r
    <div class="capital-calculator-section__cursors-container__cursor-container">\r
      <p>Pendant combien de temps&nbsp;?</p>\r
      <label for="third-range">4 ans</label>\r
      <input type="range" id="third-range" name="third-range" \r
         min="1" max="20" value="4" step="1" data-attr="ans">\r
    </div>\r
    <div class="capital-calculator-section__cursors-container__cursor-container">\r
      <p>Quel est le rendement annuel souhaité&nbsp;?</p>\r
      <label for="fourth-range">6%</label>\r
      <input type="range" id="fourth-range" name="fourth-range" \r
         min="0.05" max="15" value="6" step="0.05" data-attr="%">\r
    </div>\r
  </div>\r
  <h2 class="capital-calculator-section__result-value">\r
    60 000€\r
  </h2>\r
  <div class="capital-calculator-section__btns-container">\r
    <a class="button button--secondary button--light-theme" href="#">Demander un conseil</a>\r
    <a class="button button--primary" href="#">Faire une simulation</a>\r
  </div>\r
</section>\r
`,se=`<section class="lexique-section">\r
    <ul class="letters scroll-links" origin="filter">\r
        <li class="first"><a class="link" href="#">A</a></li>\r
        <li><a class="link" href="#">B</a></li>\r
        <li><a class="link" href="#">C</a></li>\r
        <li><a class="link" href="#">D</a></li>\r
        <li><a class="link" href="#">E</a></li>\r
        <li><a class="link" href="#">F</a></li>\r
        <li><a class="link" href="#">G</a></li>\r
        <li><a class="link" href="#">H</a></li>\r
        <li><a class="link" href="#">I</a></li>\r
        <li><a class="link" href="#">J</a></li>\r
        <li><a class="link" href="#">K</a></li>\r
        <li><a class="link" href="#">L</a></li>\r
        <li><a class="link" href="#">M</a></li>\r
        <li><a class="link" href="#">N</a></li>\r
        <li><a class="link" href="#">O</a></li>\r
        <li><a class="link" href="#">P</a></li>\r
        <li><a class="link" href="#">Q</a></li>\r
        <li><a class="link" href="#">R</a></li>\r
        <li><a class="link" href="#">S</a></li>\r
        <li><a class="link" href="#">T</a></li>\r
        <li><a class="link" href="#">U</a></li>\r
        <li><a class="link" href="#">V</a></li>\r
        <li><a class="link" href="#">W</a></li>\r
        <li><a class="link" href="#">X</a></li>\r
        <li><a class="link" href="#">Y</a></li>\r
        <li class="last"><a class="link" href="#">Z</a></li>\r
    </ul>\r
    <div id="lexique">\r
        <div class="clear">\r
            <div class="letter row col-md-4" id="a">\r
                <div class="row">\r
                    <div class="col-md-1"><h2>A</h2>\r
                        <ul>\r
                            <li><a href="#">Action</a></li>\r
                            <li><a class="link" href="#">Agircarrco</a></li>\r
                            <li><a class="link" href="#">Ascendant</a></li>\r
                            <li><a class="link" href="#">Assurance-vie</a></li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="letter row col-md-4" id="b">\r
                <div class="row">\r
                    <div class="col-md-1"><h2>B</h2>\r
                        <ul>\r
                            <li><a class="link" href="#">Bourse</a></li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="letter row col-md-4" id="c">\r
                <div class="row">\r
                    <div class="col-md-1"><h2>C</h2>\r
                        <ul>\r
                            <li><a class="link" href="#">CAC 40</a></li>\r
                            <li><a class="link" href="#">Chiffre d'affaires</a></li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
        <div class="clear">\r
            <div class="letter row col-md-4" id="d">\r
                <div class="row">\r
                    <div class="col-md-1"><h2>D</h2>\r
                        <ul>\r
                            <li class="first"><a class="link" href="#">DAX</a></li>\r
                            <li><a class="link" href="#">Dow Jones</a></li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="letter row col-md-4" id="e">\r
                <div class="row">\r
                    <div class="col-md-1"><h2>E</h2>\r
                        <ul>\r
                            <li><a class="link" href="#">EuroStoxx50</a></li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
            <div class="letter row col-md-4" id="f">\r
                <div class="row">\r
                    <div class="col-md-1"><h2>F</h2>\r
                        <ul>\r
                            <li><a class="link" href="#">FFSA</a></li>\r
                            <li><a href="#">FIP</a></li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
</section>`,ae=`<section class="stay-informed-section">\r
    <div class="stay-informed-section__container">\r
        <h3 class="stay-informed-section__title">Restez-informé</h3>\r
        <div class="stay-informed-section__subtitle">\r
            <p>\r
                Nous décryptons pour vous l’actualité économique et financière et vous donnons des conseils d’investissement pour votre épargne. Abonnez vous à notre newsletter.\r
            </p>\r
        </div>\r
        <div class="stay-informed-section__content">\r
\r
                <form class="sf-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead" method="POST" novalidate="novalidate" data-once="form-updated" data-drupal-form-fields="salutation,first_name,last_name,email,00N6900000LAsxxTODOajuster1">\r
                    <input type="hidden" name="oid" value="00D1r000001mTbk">\r
                    <input type="hidden" name="lead_source" value="Site Internet">\r
                    <p><input name="retURL" type="hidden" value="https://www.altaprofits.com/documentation/nos-conseils/remerciement-optin"> <input name="00N3O000005Unfj" type="hidden" value="formulaire CONSEIL"></p>\r
\r
                    <div class="gvnJqy">\r
                        <div class="style-groupform form-civilite"><label class="style-label hidden" for="salutation">Civilité</label>\r
\r
                            <div class="style-form-select"><select class="btnselect no-Sumo" id="salutation" name="salutation"><option disabled="disabled" hidden="" selected="selected" value="">Civilité</option><option value="1">Monsieur</option><option value="2">Madame</option><option value="3">Mademoiselle</option> </select></div>\r
                        </div>\r
\r
                        <div class="style-groupform form-prenom"><label class="style-label hidden" for="first_name">Prénom*</label>\r
\r
                            <div class="style-form"><input alt="Prénom" autocomplete="Off" class="styleinput" data-msg-required="Ce champ est requis" data-rule-required="true" id="first_name" maxlength="80" name="first_name" placeholder="Prénom*" size="20" style="text-align: left;" title="Prenom" type="text" aria-required="true"></div>\r
                        </div>\r
\r
                        <div class="style-groupform form-nom"><label class="style-label hidden" for="last_name">Nom*</label>\r
\r
                            <div class="style-form"><input alt="Nom" autocomplete="Off" class="styleinput_form" data-msg-required="Ce champ est requis" data-rule-required="true" id="last_name" maxlength="40" name="last_name" placeholder="Nom*" size="20" style="text-align: left;" title="Nom" type="text" aria-required="true"></div>\r
                        </div>\r
\r
                        <div class="style-groupform form-email"><label class="style-label hidden" for="email">Adresse e-mail *</label>\r
\r
                            <div class="style-form"><input alt="e-mail" autocomplete="Off" class="styleinput" data-msg-required="Ce champ est requis" data-rule-email="true" data-rule-required="true" id="email" maxlength="80" name="email" placeholder="Adresse e-mail *" required="" size="20" style="text-align: left;" title="e-mail" type="email" aria-required="true"></div>\r
                        </div>\r
\r
                        <div class="style-groupform" style="width: 100%; text-align: left; margin-bottom: 0;">\r
                            <div class="label-checkbox"><label for="" style="font-size: 12px; margin-left: 29px;">J’accepte de recevoir par email, de la part d'Altaprofits, des informations et offres commerciales concernant des offres d'épargne.</label></div>\r
\r
                            <div class="label-checkbox"><input class="checkbox" id="00N6900000LAsxxTODOajuster1" name="00N6900000LAsxxTODOajuster1" style="left: 0px;" type="checkbox" value="1"></div>\r
                        </div>\r
                        <!--div class="g-recaptcha" data-sitekey="6LdbsqkeAAAAAMRfKREScFqDAYK3PhDojs3V59a3">&nbsp;</div-->\r
\r
                        <div class="g-recaptcha" data-sitekey="6LdbsqkeAAAAAMRfKREScFqDAYK3PhDojs3V59a3">&nbsp;</div>\r
\r
                        <div class="input-button">\r
                            <input class="button button--center button--primary button--arrow" type="submit" value="Envoyer"/>\r
                        </div>\r
                        <div class="col-md-12">\r
                            <p class="donnee-perso">Pour toute information sur le traitement des données personnelles vous concernant, consultez la section « Vos données personnelles »<br>\r
                                accessible à l’adresse suivante: <a href="/information/vos-donnees-personnelles" target="_blank">https://www.altaprofits.com/information/vos-donnees-personnelles</a></p>\r
                        </div>\r
                    </div>\r
                </form>\r
                <script type="text/javascript">\r
                    function isNumeric(value) {\r
                        return /^-?\\d+$/.test(value);\r
                    }\r
\r
                    ($(function(){\r
                        var convertedPhoneNumber;\r
                        $('.sf-form').each(function(){\r
                            $(this).validate({\r
                                rules: {\r
                                    phone: {\r
                                        phoneNumberFormatCtrl: {\r
                                            paysIso2 : "fr",\r
                                            fixeMobile: "fixe_mobile",\r
                                            obligatoire: true\r
                                        }\r
                                    }\r
                                },\r
                                submitHandler: function(form,event) {\r
                                    var phoneNumber = $(form).find('input[name="phone"]');\r
                                    var phoneNumberVal = phoneNumber.val();\r
\r
                                    console.log('not starting with +33',phoneNumberVal.indexOf('+33') == -1);\r
                                    console.log('starting with 0',phoneNumberVal.indexOf('0') == 0);\r
                                    console.log('length 10',phoneNumberVal.length == 10);\r
\r
                                    //important check : the number must be valid before conversion\r
                                    if(phoneNumberVal.indexOf('+33') == -1 &&\r
                                        phoneNumberVal.indexOf('0') == 0 &&\r
                                        phoneNumberVal.length == 10){\r
                                        convertedPhoneNumber = '+33' + phoneNumberVal.substring(1);\r
                                        firstloop = false;\r
                                    }\r
\r
                                    phoneNumber.val(convertedPhoneNumber);\r
\r
                                    $(form).submit();\r
                                }\r
\r
                            });\r
                        })\r
                    }));\r
                <\/script>\r
\r
        </div>\r
\r
        <form class="sf-form" action="servlet/servlet.WebToLead" method="POST" novalidate="novalidate" data-once="form-updated" data-drupal-form-fields="">\r
            <input type="hidden" name="oid" value="">\r
            <input type="hidden" name="lead_source" value="Site Internet">\r
        </form>\r
        <script type="text/javascript">\r
            function isNumeric(value) {\r
                return /^-?\\d+$/.test(value);\r
            }\r
\r
            ($(function () {\r
                var convertedPhoneNumber;\r
                $('.sf-form').each(function () {\r
                    $(this).validate({\r
                        rules: {\r
                            phone: {\r
                                phoneNumberFormatCtrl: {\r
                                    paysIso2: "fr",\r
                                    fixeMobile: "fixe_mobile",\r
                                    obligatoire: true\r
                                }\r
                            }\r
                        },\r
                        submitHandler: function (form, event) {\r
                            var phoneNumber = $(form).find('input[name="phone"]');\r
                            var phoneNumberVal = phoneNumber.val();\r
\r
                            console.log('not starting with +33', phoneNumberVal.indexOf('+33') == -1);\r
                            console.log('starting with 0', phoneNumberVal.indexOf('0') == 0);\r
                            console.log('length 10', phoneNumberVal.length == 10);\r
\r
                            //important check : the number must be valid before conversion\r
                            if (phoneNumberVal.indexOf('+33') == -1 &&\r
                                phoneNumberVal.indexOf('0') == 0 &&\r
                                phoneNumberVal.length == 10) {\r
                                convertedPhoneNumber = '+33' + phoneNumberVal.substring(1);\r
                                firstloop = false;\r
                            }\r
\r
                            phoneNumber.val(convertedPhoneNumber);\r
\r
                            $(form).submit();\r
                        }\r
\r
                    });\r
                })\r
            }));\r
        <\/script>\r
    </div>\r
</section>`,ie=`<section class="contact-us-section">\r
    <div class="contact-us-section__container">\r
        <h3 class="contact-us-section__title">Contactez-nous</h3>\r
        <div class="contact-us-section__subtitle">\r
            <p>Vous avez besoin de conseils ou des questions complémentaires ?<br/>\r
                Nous sommes à votre disposition !</p>\r
        </div>\r
        <div class="contact-us-section__content">\r
            <form class="sf-form" action="#" method="POST"\r
                  data-once="form-updated"\r
                  data-drupal-form-fields="salutation,first_name,last_name,phone,email,motif,00N6900000LAsxx,00N6900000LAsxxTODOajuster1,00N6900000LAsxxTODOajuster2"\r
                  novalidate="novalidate">\r
                <input type="hidden" name="oid" value="00D1r000001mTbk">\r
                <input type="hidden" name="lead_source" value="Site Internet">\r
                <input name="retURL" type="hidden"\r
                       value="https://www.altaprofits.com/documentation/nos-conseils/remerciement-optin">\r
                <input name="00N3O000005Unfj" type="hidden" value="formulaire CONSEIL">\r
\r
                <div class="style-groupform form-civilite"><p><label class="style-label hidden"\r
                                                                     for="salutation">Civilité</label></p>\r
                    <div class="style-form-select"><select class="btnselect no-Sumo" id="salutation"\r
                                                           name="salutation">\r
                        <option disabled="disabled" hidden="" selected="selected" value="">Civilité</option>\r
                        <option value="1">Monsieur</option>\r
                        <option value="2">Madame</option>\r
                        <option value="3">Mademoiselle</option>\r
                    </select></div>\r
                </div>\r
                <div class="style-groupform form-prenom"><p><label class="style-label hidden"\r
                                                                   for="first_name">Prénom*</label>\r
                </p>\r
                    <div class="style-form"><input class="styleinput" style="text-align:left;" alt="Prénom"\r
                                                   autocomplete="Off" data-msg-required="Ce champ est requis"\r
                                                   data-rule-required="true" id="first_name" maxlength="80"\r
                                                   name="first_name" placeholder="Prénom*" size="20"\r
                                                   title="Prenom" type="text" aria-required="true"></div>\r
                </div>\r
                <div class="style-groupform form-nom"><p><label class="style-label hidden"\r
                                                                for="last_name">Nom*</label></p>\r
                    <div class="style-form"><input class="styleinput_form" style="text-align:left;" alt="Nom"\r
                                                   autocomplete="Off" data-msg-required="Ce champ est requis"\r
                                                   data-rule-required="true" id="last_name" maxlength="40"\r
                                                   name="last_name" placeholder="Nom*" size="20" title="Nom"\r
                                                   type="text" aria-required="true"></div>\r
                </div>\r
                <div class="style-groupform form-telephone"><p><label\r
                        class="style-label hidden">Téléphone*</label></p>\r
                    <div class="style-form"><input class="styleinput" style="text-align:left;"\r
                                                   autocomplete="Off"\r
                                                   data-msg-maxlength="Veuillez saisir un n° de 10 chiffres"\r
                                                   data-msg-minlength="Veuillez saisir un n° de 10 chiffres"\r
                                                   data-msg-required="Ce champ est requis"\r
                                                   data-rule-required="true" font-size="small" id="phone"\r
                                                   maxlength="12" minlength="10" name="phone"\r
                                                   placeholder="Téléphone*" size="20" type="text"\r
                                                   aria-required="true"></div>\r
                </div>\r
                <div class="style-groupform form-email">\r
                    <div class="style-form"><input class="styleinput" style="text-align:left;" alt="e-mail"\r
                                                   autocomplete="Off" id="email" maxlength="80" name="email"\r
                                                   placeholder="Adresse e-mail *" size="20" title="e-mail"\r
                                                   type="email"></div>\r
                </div>\r
                <div class="style-groupform form-motif"><p><label class="style-label hidden" for="motif">Motifs\r
                    de contact</label></p>\r
                    <div class="style-form-select"><select class="btnselect no-Sumo" id="motif" name="motif">\r
                        <option disabled="disabled" hidden="" selected="selected" value="">Motifs de contact\r
                        </option>\r
                        <option value="Assurance vie">Assurance vie</option>\r
                        <option value="Retraite">Retraite</option>\r
                        <option value="Immobilier">Immobilier</option>\r
                        <option value="Défiscalisation">Défiscalisation</option>\r
                    </select></div>\r
                </div>\r
                <div class="style-groupform form-message"><p><label class="style-label hidden"\r
                                                                    for="00N6900000Koc74">Décrivez nous votre\r
                    projet*</label><em><label class="style-label hidden" for="00N6900000Koc74"><span\r
                        style="font-size:12px;">(ne renseigner aucune information personnelle)&nbsp;</span></label></em>\r
                </p>\r
                    <div class="style-form">\r
                            <textarea class="styletext-area" style="text-align:left;" cols="33"\r
                                      name="00N6900000Koc74" placeholder="Votre message"\r
                                      rows="1">\r
                            </textarea>\r
                    </div>\r
                </div>\r
                <div class="style-groupform" style="margin-bottom:0;text-align:left;width:100%;">\r
                    <div class="label-checkbox"><label style="font-size:12px;margin-left:29px;" for="">J'accepte\r
                        d’être appelé par Altaprofits, en vue d’obtenir des informations et conseils relatifs à\r
                        des solutions d’épargne.</label></div>\r
                    <div class="label-checkbox"><input class="checkbox" style="left:0px;" id="00N6900000LAsxx"\r
                                                       name="00N6900000LAsxx" type="checkbox" value="1"></div>\r
                </div>\r
                <div class="style-groupform" style="margin-bottom:0;text-align:left;width:100%;">\r
                    <div class="label-checkbox"><label style="font-size:12px;margin-left:29px;" for="">J’accepte\r
                        de recevoir par email, de la part d'Altaprofits, des informations et offres commerciales\r
                        concernant des offres d'épargne.</label></div>\r
                    <div class="label-checkbox"><input class="checkbox" style="left:0px;"\r
                                                       id="00N6900000LAsxxTODOajuster1"\r
                                                       name="00N6900000LAsxxTODOajuster1" type="checkbox"\r
                                                       value="1"></div>\r
                </div>\r
                <div class="style-groupform" style="margin-bottom:0;text-align:left;width:100%;">\r
                    <div class="label-checkbox"><label style="font-size:12px;margin-left:29px;" for="">J’accepte\r
                        de recevoir par SMS, de la part d’Altaprofits; des informations et offres commerciales\r
                        concernant des offres d’épargne.</label></div>\r
                    <div class="label-checkbox"><input class="checkbox" style="left:0px;"\r
                                                       id="00N6900000LAsxxTODOajuster2"\r
                                                       name="00N6900000LAsxxTODOajuster2" type="checkbox"\r
                                                       value="1"></div>\r
                </div>\r
                <div class="input-button">\r
                    <input class="button button--center button--primary button--arrow" type="submit"\r
                           value="Envoyer"/>\r
                </div>\r
                <div class="g-recaptcha" data-sitekey="6LdbsqkeAAAAAMRfKREScFqDAYK3PhDojs3V59a3">&nbsp;</div>\r
                <div class="contact-us-section__personal_data">\r
                    <!--<p class="donnee-perso">Pour toute information sur le traitement des\r
                    données personnelles vous concernant, consultez la section « Vos données personnelles »&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>accessible\r
                    à l’adresse suivante: <a href="/information/vos-donnees-personnelles" target="_blank">https://www.altaprofits.com/information/vos-donnees-personnelles</a>\r
                </p>-->\r
                    <p>Vos données personnelles sont collectées par Altaprofits, en sa qualité de responsable de\r
                        traitements, à des fins de prospection commerciale. Dans les conditions prévues par la\r
                        réglementation en vigueur en matière de protection des données personnelles, vous disposez d’un\r
                        droit d’accès, de rectification, d’opposition, de retrait de consentement à la prospection\r
                        commerciale, de suppression de vos données personnelles, que vous pouvez exercer en adressant\r
                        votre demande par mail à : mes-données-personnelles@altaprofits.fr ou par courrier à :\r
                        Altaprofits Conformité 35, rue de Rome, 75008 Paris.</p>\r
                    <p>Nous vous rappelons en outre que si vous ne souhaitez pas faire l’objet de prospection\r
                        commerciale par voie téléphonique, vous pouvez vous inscrire gratuitement sur la liste\r
                        d’opposition au démarchage téléphonique sur le site internet www.bloctel.gouv.fr.</p>\r
                    <p>Pour toute information complémentaire sur le traitement de vos données personnelles, <a class="link" href="#" target="_blank">consultez\r
                        notre politique de données personnelles</a></p>\r
                </div>\r
\r
\r
            </form>\r
\r
        </div>\r
\r
        <script type="text/javascript">\r
            function isNumeric(value) {\r
                return /^-?\\d+$/.test(value);\r
            }\r
\r
            ($(function () {\r
                var convertedPhoneNumber;\r
                $('.sf-form').each(function () {\r
                    $(this).validate({\r
                        rules: {\r
                            phone: {\r
                                phoneNumberFormatCtrl: {\r
                                    paysIso2: "fr",\r
                                    fixeMobile: "fixe_mobile",\r
                                    obligatoire: true\r
                                }\r
                            }\r
                        },\r
                        submitHandler: function (form, event) {\r
                            var phoneNumber = $(form).find('input[name="phone"]');\r
                            var phoneNumberVal = phoneNumber.val();\r
\r
                            console.log('not starting with +33', phoneNumberVal.indexOf('+33') == -1);\r
                            console.log('starting with 0', phoneNumberVal.indexOf('0') == 0);\r
                            console.log('length 10', phoneNumberVal.length == 10);\r
\r
                            //important check : the number must be valid before conversion\r
                            if (phoneNumberVal.indexOf('+33') == -1 &&\r
                                phoneNumberVal.indexOf('0') == 0 &&\r
                                phoneNumberVal.length == 10) {\r
                                convertedPhoneNumber = '+33' + phoneNumberVal.substring(1);\r
                                firstloop = false;\r
                            }\r
\r
                            phoneNumber.val(convertedPhoneNumber);\r
\r
                            $(form).submit();\r
                        }\r
\r
                    });\r
                })\r
            }));\r
        <\/script>\r
\r
        <form class="sf-form" action="servlet/servlet.WebToLead" method="POST" novalidate="novalidate"\r
              data-once="form-updated" data-drupal-form-fields="">\r
            <input type="hidden" name="oid" value="">\r
            <input type="hidden" name="lead_source" value="Site Internet">\r
        </form>\r
        <script type="text/javascript">\r
            function isNumeric(value) {\r
                return /^-?\\d+$/.test(value);\r
            }\r
\r
            ($(function () {\r
                var convertedPhoneNumber;\r
                $('.sf-form').each(function () {\r
                    $(this).validate({\r
                        rules: {\r
                            phone: {\r
                                phoneNumberFormatCtrl: {\r
                                    paysIso2: "fr",\r
                                    fixeMobile: "fixe_mobile",\r
                                    obligatoire: true\r
                                }\r
                            }\r
                        },\r
                        submitHandler: function (form, event) {\r
                            var phoneNumber = $(form).find('input[name="phone"]');\r
                            var phoneNumberVal = phoneNumber.val();\r
\r
                            console.log('not starting with +33', phoneNumberVal.indexOf('+33') == -1);\r
                            console.log('starting with 0', phoneNumberVal.indexOf('0') == 0);\r
                            console.log('length 10', phoneNumberVal.length == 10);\r
\r
                            //important check : the number must be valid before conversion\r
                            if (phoneNumberVal.indexOf('+33') == -1 &&\r
                                phoneNumberVal.indexOf('0') == 0 &&\r
                                phoneNumberVal.length == 10) {\r
                                convertedPhoneNumber = '+33' + phoneNumberVal.substring(1);\r
                                firstloop = false;\r
                            }\r
\r
                            phoneNumber.val(convertedPhoneNumber);\r
\r
                            $(form).submit();\r
                        }\r
\r
                    });\r
                })\r
            }));\r
        <\/script>\r
    </div>\r
</section>`,oe=`<section class="scpi-selector">\r
  <div class="scpi-selector__title">\r
    <h3>Notre sélection de SCPI</h3>\r
  </div>\r
  <div class="scpi-selector__selectors-container">\r
    <div\r
      class="scpi-selector__selectors-container__initial-investissement-container"\r
    >\r
      <h4>Quel est votre investissement initial&nbsp;?</h4>\r
      <label for="first-range">7 000€</label>\r
      <input\r
        type="range"\r
        id="first-range"\r
        name="first-range"\r
        min="500"\r
        max="20000"\r
        value="7000"\r
        step="500"\r
        data-attr="€"\r
      />\r
    </div>\r
    <div class="scpi-selector__selectors-container__geographicalArea">\r
        <h4>Zone géographique</h4>\r
        <div class="scpi-selector__selectors-container__geographicalArea__btns-container">\r
            <div class="scpi-selector__selectors-container__geographicalArea__btns-container__btn" data-attr="France">France</div>\r
            <div class="scpi-selector__selectors-container__geographicalArea__btns-container__btn" data-attr="Europe">Europe</div>\r
        </div>\r
    </div>\r
    <div class="scpi-selector__selectors-container__sectoralCategory">\r
        <h4>Catégorie sectorielle</h4>\r
        <div class="scpi-selector__selectors-container__sectoralCategory__btns-container">\r
            <div class="scpi-selector__selectors-container__sectoralCategory__btns-container__btn" data-attr="Diversifiée">Diversifiée</div>\r
            <div class="scpi-selector__selectors-container__sectoralCategory__btns-container__btn" data-attr="Bureaux">Bureaux</div>\r
            <div class="scpi-selector__selectors-container__sectoralCategory__btns-container__btn" data-attr="Commerces">Commerces</div>\r
            <div class="scpi-selector__selectors-container__sectoralCategory__btns-container__btn" data-attr="Santé">Santé</div>\r
            <div class="scpi-selector__selectors-container__sectoralCategory__btns-container__btn" data-attr="Résidentiel">Résidentiel</div>\r
            <div class="scpi-selector__selectors-container__sectoralCategory__btns-container__btn" data-attr="Logistique">Logistique</div>\r
        </div>\r
    </div>\r
  </div>\r
  <div class="scpi-selector__selectors-container__resultsCards">\r
    <div class="scpi-selector__selectors-container__resultsCards__card">\r
      <div class="scpi-selector__selectors-container__resultsCards__card__header">\r
        <h3>ÉPARGNE PIERRE</h3>\r
      </div>\r
      <div class="scpi-selector__selectors-container__resultsCards__card__body">\r
        <div class="scpi-selector__selectors-container__resultsCards__card__body__descriptions">\r
          <p>Capitalisation : <span>1 774 M€</span></p>\r
          <p>Zone géographique : <span>Ile-de-France</span></p>\r
          <p>Prix de souscription : <span>208 €</span></p>\r
          <p>Taux de distribution en 2021 : <span>5,36%</span></p>\r
        </div>\r
        <img src="./assets/logos/la_française--fit.png" alt="logo">\r
        <div class="scpi-selector__selectors-container__resultsCards__card__body__btns-container">\r
          <a class="button button--secondary button--light-theme button--small" href="#">En savoir plus</a>\r
          <a class="button button--primary button--small" href="#">Souscrire avec un conseiller</a>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`,ce=[{name:"header",template:cn},{name:"footer",template:ln},{name:"wrapper (66/33) (50/50) (33/66)",template:dn},{name:"homeHeroBanner",template:pn},{name:"promoBanner",template:un},{name:"tabsNavigationSection",template:ee},{name:"companyValueSection",template:_n},{name:"adviceIntroSection",template:mn},{name:"advicesSection",template:vn},{name:"insurancePartnersSection",template:gn},{name:"investmentDisclaimerSection",template:hn},{name:"awardsSection",template:fn},{name:"reviewsSection",template:bn},{name:"partnerNewsSection",template:wn},{name:"heroBanner (Default, Catchline, Product)",template:yn},{name:"productIntroSection",template:An},{name:"productAdvantagesSection",template:Sn},{name:"productManagementSection",template:Pn},{name:"productInsurancePartnerSection",template:xn},{name:"brochureSection",template:Ln},{name:"sincePartnerSection",template:Cn},{name:"premiumPartnerSection",template:kn},{name:"linksSection",template:qn},{name:"productContractualDocumentationSection",template:En},{name:"productFeesSection",template:zn},{name:"faqRedirectionSection",template:Rn},{name:"managementAdvantagesSection",template:In},{name:"managementPlusSection",template:Vn},{name:"managementOthersOverviewSection",template:Tn},{name:"managementGuidedOverviewSection",template:jn},{name:"managementGuidedPartnersSection",template:Mn},{name:"contractsPilotedSection",template:Fn},{name:"contractsSupportSection",template:Nn},{name:"altaNewsTalkingAboutSection",template:Bn},{name:"webconferencesSection",template:Un},{name:"kitPressSection",template:Gn},{name:"contactPressSection",template:Dn},{name:"pressSection",template:On},{name:"expertsVoiceSection",template:$n},{name:"discoverIntegrationProgramSection",template:Hn},{name:"questionsSection",template:Yn},{name:"squadSection",template:Jn},{name:"altaInNumberSection",template:Qn},{name:"altaprofitHistorySection",template:Zn},{name:"reasonToJoinSection",template:Wn},{name:"discoverOurJobSection",template:Kn},{name:"joinTheTeamSection",template:Xn},{name:"pilotedGraphSection",template:ne},{name:"whiteBookSection",template:re},{name:"capitalCalculatorSection",template:te},{name:"lexiqueSection",template:se},{name:"stayInformedSection",drupalTemplate:"paragraph--ap-content--restez-informe",template:ae},{name:"contactUsSection",drupalTemplate:"paragraph--ap-content--contactez-nous",template:ie},{name:"scpiSelectorSection",template:oe}],le=[{name:"components",value:J},{name:"patterns",value:on},{name:"blocks",value:ce}];le.forEach(e=>{const n=document.createElement("section");n.classList.add("ads",e.name);const a=document.createElement("h3");a.innerText=e.name.toUpperCase(),n.appendChild(a),e.value.forEach(s=>{const r=document.createElement("div");r.id=s.name,r.classList.add("section","ads");const c=document.createElement("h4");c.innerText=s.name,r.appendChild(c);const t=document.createElement("div");t.innerHTML=s.template,t.classList.add("sub-section","ads"),r.appendChild(t),n.appendChild(r)}),document.querySelector("main.ads").appendChild(n)});const R=document.querySelectorAll(".management-others-card");if(R){let e=0;R.forEach(n=>{const a=n.querySelectorAll(".management-others-card__explaination");for(let r=0;r<a.length;r++){const t=a[r].offsetHeight;t>e&&(e=t)}e>0&&n.querySelector(".management-others-card__explainations").style.setProperty("height",`calc(${e}px + var(--spacing-8))`),n.querySelectorAll(".management-others-card__link").forEach(r=>{let c=r.dataset.name,t=n.querySelector(".management-others-card__explaination[data-name="+c+"]");r.addEventListener("mouseenter",()=>{t.classList.add("active")}),r.addEventListener("mouseleave",()=>{t.classList.remove("active")})})}),window.addEventListener("resize",function(n){const a=document.querySelectorAll(".management-guided-card"),s=document.querySelectorAll(".management-others-card");a.length&&s.length&&a[0].offsetHeight!=s[0].offsetHeight&&(a[0].offsetHeight>s[0].offsetHeight?s[0].style.height=a[0].offsetHeight+"px":a[0].style.height=s[0].offsetHeight+"px")},!0),document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".management-guided-card"),a=document.querySelectorAll(".management-others-card");n.length&&a.length&&n[0].offsetHeight!=a[0].offsetHeight&&(n[0].offsetHeight>a[0].offsetHeight?a[0].style.height=n[0].offsetHeight+"px":n[0].style.height=a[0].offsetHeight+"px")})}const q=document.querySelector(".header");if(q){let r=function(){x(e),c(e),t()},c=function(o){o.forEach(u=>{u.querySelector(".menu__name").addEventListener("click",m=>{m.preventDefault(),v(u)})})},t=function(){s.addEventListener("click",()=>{p()})},p=function(){const o=document.querySelector(".menu__item.active");o&&(o.classList.remove("active"),s.classList.remove("active"))},v=function(o){const u=document.querySelector(".menu__item.active");u===o?(o.classList.remove("active"),s.classList.remove("active")):u?(u.classList.remove("active"),o.classList.add("active")):(o.classList.add("active"),s.classList.add("active"))},_=function(o){const u=o.getBoundingClientRect(),m=q.getBoundingClientRect();return u.left-m.left},g=function(o){const u=o.getBoundingClientRect(),m=q.getBoundingClientRect();return u.right-m.left},x=function(o){const u=parseInt(window.getComputedStyle(q).getPropertyValue("padding-left"),10);parseInt(window.getComputedStyle(a).getPropertyValue("padding-left"),10),o.forEach(m=>{const f=m.querySelector(".expand-menu");if(m.classList.contains("menu__item--full")){const w=_(m),y=document.querySelector(".header__content"),b=_(y);f.style.left=`${-(w-b)}px`}else q.offsetWidth-g(f)<u?(m.classList.add("menu__item--right"),m.classList.remove("menu__item--left")):(m.classList.remove("menu__item--right"),m.getAttribute("data-position")==="left"&&m.classList.add("menu__item--left"))})};var init=r,displayExpandMenuItems=c,handleOverlayClick=t,closeMenu=p,toogleMenuItem=v,getElementLeftPosition=_,getElementRightPosition=g,positionMenuItems=x;const e=document.querySelectorAll(".menu__item"),n=document.querySelectorAll(".expand-menu__sub-menu"),a=document.querySelector(".header__menu"),s=document.querySelector(".header__overlay");window.addEventListener("resize",()=>{x(e)}),r(),n&&n.forEach(o=>{o.querySelectorAll(".link--arrow").forEach(m=>{let f=m.dataset.name,w=o.querySelector(".link--arrow[data-name="+f+"]");m.addEventListener("click",()=>{o.querySelector(".link--arrow").classList.remove("active"),m.classList.remove("active"),w.classList.add("active"),$(".expand-menu__sub-item").classList.remove("visible"),$(".expand-menu__sub-item[data-name="+f+"]").classList.add("visible")})})})}const I={speed:200},V=document.querySelectorAll(".awards-section");V&&V.forEach(e=>{const n=e.querySelector(".awards-section__content"),a=n.cloneNode(!0);n.classList.add("primary"),a.classList.add("secondary"),n.parentNode.appendChild(a);const s=n.querySelectorAll(".award-item").length;n.style.setProperty("animation",`awards-section--primary ${s*1e3/I.speed}s linear infinite`),a.style.setProperty("animation",`awards-section--secondary ${s*1e3/I.speed}s linear infinite`)});if(document.querySelector(".contracts-piloted-section-container")){let o=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const l=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${l}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var me=o;const e={assuranceVie:{titresVie:{prudent:[{title:"Carte Blanche",srri:8,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.13%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:7,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-4.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 3",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-9.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalViePrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},espaceLuxVie:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 2",srri:3,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-3%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"},{title:"Profil 1",srri:6,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-5.53%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},capitalisation:{titreCapi:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},altaprofitsCapitalisation:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]},digitalCapiPrime:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}},planEpargneRetraite:{titrePER:{prudent:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],balanced:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}],dynamic:[{title:"Carte Blanche",srri:5,ytd:"",nOne:"",perfThreeYears:"",perfFiveYears:"",perf:"",volatility:"",name:"Lazard Frères Gestion",percentageRate:"-7.33%",informations:"Performances cumulées sur 5 ans",iconUrl:"./assets/logos/lazard_freres_gestion--fit.svg"}]}}},n=document.querySelectorAll(".btns-container__first-choice-container__btn"),a=document.querySelector(".btns-container__second-choice-container"),s=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container__btn"),r=document.querySelectorAll(".filters-container__btns-container__btn"),c=document.querySelectorAll(".btns-container__second-choice-container__btns-type-second-choice-container"),t=document.querySelector(".results-container"),p=document.querySelectorAll(".toggle-button"),v=document.querySelectorAll(".card-container, .grid-row-body"),_=document.querySelector(".cards-display-container"),g=document.querySelector(".array-display-container");document.querySelectorAll(".grid-row-body"),document.querySelector(".distribution-funds-array-section__btn").addEventListener("click",o);const u={firstChoice:"",secondChoice:"",thirdChoice:"prudent"};n.forEach(l=>l.addEventListener("click",()=>m(l))),s.forEach(l=>l.addEventListener("click",()=>f(l))),r.forEach(l=>l.addEventListener("click",()=>w(l))),p.forEach(l=>l.addEventListener("click",()=>L())),v.forEach(l=>l.addEventListener("click",()=>E(l)));const m=l=>{u.secondChoice="",s.forEach(i=>i.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),n.forEach(i=>i.classList.remove("btns-container__first-choice-container__btn--active")),c.forEach(i=>i.classList.add("hidden")),l.classList.add("btns-container__first-choice-container__btn--active"),u.firstChoice=l.getAttribute("data-attr"),a.classList.remove("hidden"),document.querySelector(`.${l.getAttribute("data-attr")}`).classList.remove("hidden"),y()},f=l=>{s.forEach(i=>i.classList.remove("btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),u.secondChoice=l.getAttribute("data-attr"),l.classList.add("btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),y()},w=l=>{u.thirdChoice=l.getAttribute("data-attr"),r.forEach(i=>i.classList.remove("filters-container__btns-container__btn--active")),l.classList.add("filters-container__btns-container__btn--active"),y()},y=()=>{u.firstChoice!==""&&u.secondChoice!==""?t.classList.remove("hidden"):t.classList.add("hidden"),g.innerHTML="",_.innerHTML="";const l=e[u.firstChoice][u.secondChoice][u.thirdChoice];l.map(i=>_.innerHTML+=`
            <div class="card-container">
              <div class="card-container__card-header">
                <p class="card-container__card-header__title">${i.title}</p>
                <div class="card-container__card-header__numbers-rating-container">
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${i.srri===1?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">1</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${i.srri===2?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">2</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${i.srri===3?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">3</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${i.srri===4?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">4</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${i.srri===5?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">5</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${i.srri===6?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">6</p>
                  </div>
                  <div class="card-container__card-header__numbers-rating-container__number-rating-container ${i.srri===7?"card-container__card-header__numbers-rating-container__number-rating-container--active":""}">
                    <p class="card-container__card-header__numbers-rating-container__number-rating-container__number-rating">7</p>
                  </div>
                </div>
              </div>
              <div class="card-container__card-informations">
                <p class="card-container__card-informations__percentage-rate">${i.percentageRate}</p>
                <p class="card-container__card-informations__card-information-text">
                  ${i.informations}
                </p>
                <svg class="card-container__card-informations__logo">
                    <use href="${i.iconUrl}#logo"></use>
                </svg>
              </div>
            </div>
    `),g.innerHTML+=`
                <div class="grid-container">
                  <div class="grid-container__grid-header">
                    <div>
                      <p></p>
                    </div>
                    <div>
                      <p>SRRI</p>
                    </div>
                    <div>
                      <p>YTD</p>
                    </div>
                    <div>
                      <p>N-1</p>
                    </div>
                    <div>
                      <p>Perf. 3ans</p>
                      <p>cumulé</p>
                    </div>
                    <div>
                      <p>Perf. 5ans</p>
                      <p>cumulé</p>
                    </div>
                    <div>
                      <p>Perf.</p>
                      <p>depuis création</p>
                    </div>
                    <div>
                      <p>Volatilité</p>
                      <p>depuis création</p>
                    </div>
                  </div>
                </div>
    `,l.map(i=>g.innerHTML+=`
                <div class="grid-row-body">
                  <div class="grid-row-body__grid-profil-item-container">
                    <h3>${i.title}</h3>
                    <p>Lazard Frère Gestion</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-srri-item-container">
                    <p>${i.srri}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-ytd-item-container">
                    <p>${i.ytd}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-n1-item-container">
                    <p>${i.nOne}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf3year-item-container">
                    <p>${i.perfThreeYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf5year-item-container">
                    <p>${i.perfFiveYears}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-perf-item-container">
                    <p>${i.perf}</p>
                  </div>
                  <div class="grid-row-body__grid-profil-item-container__grid-volatility-item-container">
                    <p>${i.volatility}</p>
                  </div>
                </div>
    `),g.innerHTML+=`
        <div class="grid-container-mobile">
          <div class="grid-container-mobile__grid-header">
            <div class="grid-container-mobile__grid-header__whiteLabel">
              <p></p>
            </div>
            <div class="grid-container-mobile__grid-header__items">
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>SRRI</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>YTD</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>N-1</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Perf. 3ans</p>
                        <p>cumulé</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Perf. 5ans</p>
                        <p>cumulé</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Perf.</p>
                        <p>depuis création</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
                <div class='grid-container-mobile__grid-header__items__label-container'>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00016 12L7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 -1.23266e-07L0.000156927 6L6.00016 12Z" fill="black"/>
</svg></div>
                    <div class='grid-container-mobile__grid-header__items__label-container__label'>
                        <p>Volatilité</p>
                        <p>depuis création</p>
                    </div>
                    <div><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="black"/>
</svg></div>
                </div>
            </div>
          </div>
        </div>
`,l.map(i=>g.innerHTML+=`
              <div class="grid-row-body-mobile">
                <div class="grid-row-body-mobile__grid-profil-label-container">
                  <h3>${i.title}</h3>
                  <p>${i.name}</p>
                </div>
                <div class='grid-row-body-mobile__grid-profil-items-container'>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container grid-row-body-mobile__grid-profil-items-container__item-container--srri">
                        <p>${i.srri}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${i.ytd}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${i.nOne}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${i.perfThreeYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${i.perfFiveYears}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${i.perf}</p>
                    </div>
                    <div class="grid-row-body-mobile__grid-profil-items-container__item-container">
                        <p>${i.volatility}</p>
                    </div>
                </div>
                
              </div>
  `),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:first-child").forEach(i=>i.addEventListener("click",()=>C("prev"))),document.querySelectorAll(".grid-container-mobile__grid-header__items div div:last-child").forEach(i=>i.addEventListener("click",()=>C("next"))),document.querySelectorAll(".card-container, .grid-row-body").forEach(i=>i.addEventListener("click",()=>E(i)))};let b=0;const C=l=>{l==="prev"&&b!==0?b+=100:l==="prev"&&b===0&&(b=-600,console.log(b)),l==="next"&&b>-600?b-=100:l==="next"&&b<=-600&&(b=0),console.log(`translate(${b}%)`),document.querySelectorAll(".grid-container-mobile__grid-header__items__label-container").forEach(d=>d.style.transform=`translate(${b}%)`),document.querySelectorAll(".grid-row-body-mobile__grid-profil-items-container__item-container").forEach(d=>d.style.transform=`translate(${b}%)`)},L=l=>{p.forEach(i=>{i.classList.toggle("toggle-button--active")}),P()},E=l=>{P(),document.querySelectorAll(".card-container, .grid-row-body").forEach(i=>i.classList.remove("card-container--active")),l.classList.add("card-container--active")},P=()=>{p.forEach(l=>{l.classList.contains("btn-parameter1")&&l.classList.contains("toggle-button--active")?_.classList.remove("hidden"):l.classList.contains("btn-parameter1")&&!l.classList.contains("toggle-button--active")&&_.classList.add("hidden"),l.classList.contains("btn-parameter2")&&l.classList.contains("toggle-button--active")?g.classList.remove("hidden"):l.classList.contains("btn-parameter2")&&!l.classList.contains("toggle-button--active")&&g.classList.add("hidden")})}}if(document.querySelector(".contracts-support-section-container")){const e={assuranceVie:{titresVie:{euro:[{title:"Fonds euros SwissLife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalViePrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"PPerformances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-6.83%",informations:"Performances nettes⁽¹⁾;en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},altaprofitsVie:{euro:[{title:"Netissima",percentageRate:"Jusqu'à&nbsp;3.06%",informations:"Performances nettes⁽¹⁾ en 2022 <br />Voir les conditions d'accès",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"1.30%(3)<br/>1.35%(4)",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},espaceLuxVie:{euro:[{title:"Fonds Général",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]}},capitalisation:{altaprofitsCapitalisation:{euro:[{title:"Netissima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"},{title:"Eurossima",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/generali--fit.svg"}]},titreCapi:{euro:[{title:"Fonds euros Swisslife",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]},digitalCapiPrime:{euro:[{title:"Suravenir Opportunité 2",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"},{title:"Suravenir Rendement 2",percentageRate:"-5.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}},planEpargneRetraite:{titrePER:{euro:[{title:"Fonds euros SwissLife spécial PER",percentageRate:"-7.83%",informations:"Performances nettes⁽¹⁾ en 2022",iconUrl:"./assets/logos/swisslife--fit.svg"}]}}},n={firstChoice:"",secondChoice:"",thirdChoice:""},a=document.querySelectorAll(".support-btns-container__first-choice-container__btn"),s=document.querySelector(".support-btns-container__second-choice-container"),r=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container"),c=document.querySelector(".btns-third-choice-container"),t=document.querySelectorAll(".support-btns-container__second-choice-container__btns-type-second-choice-container__btn"),p=document.querySelectorAll(".btns-third-choice-container__btn"),v=document.querySelectorAll(".account-unit-container__btns-container__btn"),_=document.querySelector(".euro-fund-container"),g=document.querySelector(".growth-fund-container"),x=document.querySelector(".euro-fund-container__netissima-container"),o=document.querySelector(".growth-container"),u=document.querySelectorAll(".grid-row-body"),m=document.querySelector(".structured-fund-container"),f=document.querySelector(".account-unit-container"),w=document.querySelector(".tunnel-array-container"),y=document.querySelector(".euro-fund-container__cards-container"),b=document.querySelectorAll(".support-card-container");document.querySelector(".white-card-container"),document.querySelector(".array-container"),a.forEach(d=>d.addEventListener("click",()=>C(d))),t.forEach(d=>d.addEventListener("click",()=>L(d))),p.forEach(d=>d.addEventListener("click",()=>E(d))),v.forEach(d=>d.addEventListener("click",()=>P(d))),b.forEach(d=>d.addEventListener("click",()=>z(d))),u.forEach(d=>d.addEventListener("click",()=>setActiveRow(d)));const C=d=>{a.forEach(h=>h.classList.remove("support-btns-container__first-choice-container__btn--active")),t.forEach(h=>h.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),p.forEach(h=>h.classList.remove("btns-third-choice-container__btn--active")),_.classList.add("hidden"),f.classList.add("hidden"),g.classList.add("hidden"),c.classList.add("hidden"),d.classList.add("support-btns-container__first-choice-container__btn--active"),s.classList.remove("hidden"),r.forEach(h=>h.classList.add("hidden")),n.secondChoice="",n.thirdChoice="",n.firstChoice=d.getAttribute("data-attr"),s.classList.remove("hidden"),document.querySelector(`.support-btns-container__second-choice-container__btns-type-second-choice-container.${d.getAttribute("data-attr")}`).classList.remove("hidden"),l()},L=d=>{p.forEach(h=>h.classList.remove("btns-third-choice-container__btn--active")),c.classList.add("hidden"),_.classList.add("hidden"),f.classList.add("hidden"),g.classList.add("hidden"),t.forEach(h=>h.classList.remove("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active")),n.secondChoice=d.getAttribute("data-attr"),d.classList.add("support-btns-container__second-choice-container__btns-type-second-choice-container__btn--active"),c.classList.remove("hidden"),l(),S()},E=d=>{n.thirdChoice=d.getAttribute("data-attr"),p.forEach(h=>h.classList.remove("btns-third-choice-container__btn--active")),d.classList.add("btns-third-choice-container__btn--active"),i(d.getAttribute("data-attr")),S()},P=d=>{v.forEach(h=>h.classList.remove("account-unit-container__btns-container__btn--active")),d.classList.add("account-unit-container__btns-container__btn--active"),d.getAttribute("data-attr")!=="structured-funds"?(w.classList.remove("hidden"),m.classList.add("hidden")):(w.classList.add("hidden"),m.classList.remove("hidden"))},z=d=>{document.querySelectorAll(".support-card-container").forEach(h=>h.classList.remove("support-card-container--active")),d.classList.add("support-card-container--active"),d.getAttribute("data-attr")==="Netissima"?x.classList.remove("hidden"):x.classList.add("hidden"),d.getAttribute("data-attr")==="growth-netissima"?o.classList.remove("hidden"):o.classList.add("hidden")},l=()=>{n.firstChoice==="assuranceVie"&&n.secondChoice==="altaprofitsVie"||n.firstChoice==="capitalisation"&&n.secondChoice==="altaprofitsCapitalisation"?document.querySelector(".btns-third-choice-container__btn.growth").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.growth").classList.add("hidden"),n.firstChoice!=="planEpargneRetraite"&&n.secondChoice!=="titrePER"?document.querySelector(".btns-third-choice-container__btn.unit").classList.remove("hidden"):document.querySelector(".btns-third-choice-container__btn.unit").classList.add("hidden")},i=d=>{d==="euro"?(_.classList.remove("hidden"),S()):_.classList.add("hidden"),d==="growth"?g.classList.remove("hidden"):g.classList.add("hidden"),d==="unit"?f.classList.remove("hidden"):f.classList.add("hidden")},S=()=>{y.innerHTML="";const d=e[n.firstChoice][n.secondChoice][n.thirdChoice];d==null||d.map(h=>y.innerHTML+=`
    <div class="support-card-container" data-attr="${h.title}">
      <div class="support-card-container__card-header">
        <p class="support-card-container__card-header__title">${h.title}</p>
      </div>
      <div class="support-card-container__informations">
        <p class="support-card-container__informations__percentage-rate">${h.percentageRate}</p>
        <p class="support-card-container__informations__information-text">${h.informations}</p>
        
        <svg class="card-container__card-informations__logo">
          <use href="${h.iconUrl}#logo"></use>
        </svg>
      </div>
    </div>
  `),document.querySelectorAll(".support-card-container").forEach(h=>h.addEventListener("click",()=>z(h)))}}if(document.querySelector(".alta-news-talking-about-container")){let c=function(t){s.forEach(p=>{p.getAttribute("data-attr")===t&&p.classList.add("activePage")}),r.innerHTML="",e.slice((t-1)*4,t*4).forEach(p=>r.innerHTML+=`
        <div class="alta-news-talking-about-container__left-container__card">
        <div
        class="alta-news-talking-about-container__left-container__card__logo-container"
        >
            <img src="${p.logoUrl}" alt="logo">
        </div>
        <div
        class="alta-news-talking-about-container__left-container__card__informations-container"
        >
            <p>${p.date}</p>
            <h3><span class="alta-news-talking-about-container__left-container__card__informations-container__underline">${p.title}</h3></span>
            <p>${p.description}</p>
        </div>
    </div>  
`)};var displayNews=c;const e=[{date:"22 Juillet 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"21 Juin 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"2 Juin 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"15 Mai 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"10 Mai 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"26 Avril 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"31 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"11 Mars 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"10 Mars 2022",title:"Quelle stratégie pour créer de la performance dans un contexte inflationniste ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/bfm_business.png"},{date:"22 Février 2022",title:"Assurance vie : comment profiter des rendements du non coté",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/capital.png"},{date:"12 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/money_vox.png"},{date:"10 Février 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"},{date:"9 Janvier 2022",title:"Assurance vie : peut-on craindre un blocage des retraits ?",description:"“L'année 2022 ne sera pas celle du fonds en euros de l'assurance vie ! Alors que le taux du Livret A sera de 2% au 1er août, peu de fonds à capital... ",logoUrl:"./assets/logos/le_revenu.png"}],n=document.querySelector(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers"),a=Math.ceil(e.length/4);n.innerHTML="";for(let t=1;t<=a;t++)n.innerHTML+=`
        <p class='alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn ${t===1?"activePage":""}' data-attr="${t}" >${t}</p>
        `;const s=document.querySelectorAll(".alta-news-talking-about-container__left-container__pages-navigation__pages-numbers__btn");s.forEach(t=>t.addEventListener("click",p=>{s.forEach(v=>v.classList.remove("activePage")),c(p.target.getAttribute("data-attr"))}));const r=document.querySelector(".alta-news-talking-about-container__left-container__news-container");c(1)}if(document.querySelector(".experts-voice-section")){let c=function(p){s.forEach(v=>{v.getAttribute("data-attr")===p&&v.classList.add("active")}),r.innerHTML="",e.slice((p-1)*3,p*3).forEach(v=>r.innerHTML+=`
        <a class="article-card article-card--horizontal article-card--large" href="#">
            <img class="article-card__image" src="/assets/images/article_default.jpg">
            <div class="article-card__content">
                <p class="article-card__date">Publié le <span>${v.date}</span></p>
                <div class="article-card__title">
                    <h5 class="link">${v.title}</h5>
                </div>
                <p class="article-card__excerpt">${v.description}</p>
                <p class="article-card__author">${v.author}</p>
            </div>
        </a>
`)};var displayNews=c;const e=[{date:"13 novembre 2022",title:"Investissement responsable : quelle est la valeur ajoutée des ETF intégrant les considérations ESG ?",description:"Les stratégies d'investissement intégrant des critères environnementaux, sociaux et de gouvernance dits “ESG” sont devenues incontournables. ",author:"Par <b>Cyrille Chambron</b>, Gérant allocataire chez Amundi",logoUrl:"/assets/images/parole-d-expert.png"},{date:"21 novembre 2022",title:"SCPI : en quoi l’immobilier en région est source d’opportunités ?",description:"Jean-Marie Souclier, Président chez Sogenial Immobilier, nous explique pourquoi les régions françaises constituent des zones d’investissement recherchées pour les investisseurs en quête de rendement et de diversification.",author:"Par <b>Jean-Marie Souclier</b>, Président chez Sogenial",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"},{date:"13 décembre 2022",title:"Pourquoi choisir un fonds à échéance pour s’exposer à la classe d’actifs obligataire ?",description:"Avec la remontée des taux, les rendements des obligations sont redevenus attractifs. Pourquoi cela constitue un environnement favorable pour les fonds à échéance ?",author:"Par <b>Emmanuel de Sinety</b>, Gérant obligataire chez Sycomore AM",logoUrl:"/assets/images/parole-d-expert.png"}],n=document.querySelector(".experts-voice-section__pagination"),a=Math.ceil(e.length/3);n.innerHTML="";for(let p=1;p<=a;p++)n.innerHTML+=`
        <p class='experts-voice-section__page ${p===1?"active":""}' data-attr="${p}" >${p}</p>
        `;const s=document.querySelectorAll(".experts-voice-section__page");s.forEach(p=>p.addEventListener("click",v=>{s.forEach(_=>_.classList.remove("active")),c(v.target.getAttribute("data-attr"))}));const r=document.querySelector(".experts-voice-section__content");c(1)}if(document.querySelector(".questions-container")){let a=function(r){this.nextElementSibling.style.maxHeight?(this.nextElementSibling.style.maxHeight="",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="+",this.nextElementSibling.style.opacity="0",this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`):(this.lastElementChild.style.transform="rotate(0deg)",this.style.backgroundColor="",this.style.color="")):(this.nextElementSibling.style.maxHeight=`${this.nextElementSibling.scrollHeight}px`,this.nextElementSibling.style.opacity="1",this.className==="accordion-container__content__question-container__question"?(this.lastElementChild.textContent="-",setTimeout(()=>{this.parentElement.parentElement.style.maxHeight=`${this.parentElement.parentElement.scrollHeight+500}px`},200)):(this.lastElementChild.style.transform="rotate(-180deg)",console.dir(this),this.style.backgroundColor="#002853",this.style.color="#F7FAFD"))};var me=a;const e=document.querySelectorAll(".accordion-container__accordion-btn");document.querySelectorAll(".accordion-container__content__question-container__question").forEach(r=>r.addEventListener("click",a)),e.forEach(r=>r.addEventListener("click",a))}if(document.querySelector(".history-section")){let c=function(){let t=0;window.screen.width<1280?t=(a.length-1)*-100:t=(a.length-4)*-100,this.classList.contains("history-section__cards-section__right-arrow")&&r>t?r-=100:this.classList.contains("history-section__cards-section__right-arrow")&&r<=t?r=0:this.classList.contains("history-section__cards-section__left-arrow")&&r<0?r+=100:this.classList.contains("history-section__cards-section__left-arrow")&&r===0&&(r=t),a.forEach(p=>p.style.transform=`translateX(${r}%)`)};var handleArrowClick=c;const e=[{year:"1999",description:`Création d’Altaprofits S.A.
    <b>1er courtier en ligne spécialisé en assurance vie en France</b>`},{year:"2000",description:"Création et développement de sa propre plate-forme technologique"},{year:"2000",description:"Création et développement de son robo-advisor"},{year:"2000",description:"Le 1er contrat d’assurance vie en ligne sans frais supplémentaire"},{year:"2001",description:`Altaprofits reçoit un label ANVAR (Agence Nationale pour la Valorisation de la Recherche
      devenue Oséo) pour la création du premier « front-office (finance) de gestion de contrats
      d’assurance vie online » et le développement de son robo-advisor, deux outils qu’ANVAR
      considère comme les plus avancés <br/> <b>Altaprofits.com</b>`},{year:"2001",description:`Le 1er contrat d’assurance vie en ligne sans frais supplémentaire et le 1er robo-advisor
    (algorithme d’allocation d’actifs en OPCVM, basé sur la théorie moderne du portefeuille développé par Harry Markowitz, 
      prix Nobel en 1990, avec William Sharpe et Merton Miller),  sont <b>mis à disposition du grand public</b> <br/> 
      <b>Altaprofits Vie</b> <br/> <b>Fédération Continentale / Groupe Generali France</b><br/> <b>Asset Allocator</b>`},{year:"2006",description:"1ère Gestion Pilotée <br/> <b>Lazard Frères Gestion</b>"},{year:"2009",description:"Les obligations en direct pour les particuliers dans un contrat d’assurance vie"},{year:"2011",description:"1er contrat d’assurance vie proposant des titres vifs en direct & 1er contrat d’assurance vie multi-poches <br/> <b>Titres@Vie</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2015",description:"1er contrat d’assurance vie 100 % digital<br/>Signature électronique <br/> <b>Digital Vie</b><br/> <b>Suravenir</b>"},{year:"2015",description:"1er contrat d’assurance vie de droit luxembourgeois accessible sur Internet et à tarifs négociés <br/> <b>Generali Espace Lux Vie</b><br/> <b>Generali Luxembourg</b>"},{year:"2020",description:`Naissance d’un acteur majeur en gestion de Patrimoine sur Internet
    Altaprofits, standard du marché de l’assurance vie en ligne, et Cosevad, spécialisé dans la vente Directe en assurance vie et conseil en gestion de patrimoine, réalisent leur fusion 
    <br/> <b>Altaprofits</b><br/> <b>Société de Conseil en Gestion de Patrimoine sur Internet</b>
    `},{year:"2020",description:"1er Plan Épargne Retraite (PER) 100 % numérique <br/> <b>Titres@PER</b> <br/> <b>SwissLife Assurance et Patrimoine</b>"},{year:"2020",description:"Proposition de parts de SCPI de rendement en direct accessibles aux investisseurs particuliers"},{year:"2022",description:"Enrichissement des contrats historiques d’assurance vie et de capitalisation "},{year:"2022",description:" Contrats « nouvelle génération » (accessibilité à un fonds croissance, à des ETF, abaissement du seuil d’accès aux actions européennes du SBF 120 et de l’Euro Stoxx 50)"},{year:"2022",description:"Intégration d’une nouvelle gestion pilotée associant gestion indicielle (ETF) et gestion thématique <br/> <b>Altaprofits Vie & Altaprofits Capitalisation</b><br/> <b>Generali Vie</b><br/> <b>Generali Wealth Solutions</b>"}];e.reverse();const n=document.querySelector(".history-section__cards-section__cards");e.forEach(t=>{n.innerHTML+=`
    <div class="history-section__cards-section__cards__card">
      <div class="history-section__cards-section__cards__card__header">
        <h3>${t.year}</h3>
      </div>
      <div class="history-section__cards-section__cards__card__body">
        <p>
          ${t.description}
        </p>
      </div>
    </div>
  `});const a=document.querySelectorAll(".history-section__cards-section__cards__card");document.querySelectorAll(".history-section__cards-section__right-arrow, .history-section__cards-section__left-arrow").forEach(t=>t.addEventListener("click",c));let r=0}if(document.querySelector(".discover-our-job")){let r=function(){let t=0;t=(n.length-1)*-100,this.classList.contains("discover-our-job__card-section__right-arrow")&&s>t?s-=100:this.classList.contains("discover-our-job__card-section__right-arrow")&&s<=t?s=0:this.classList.contains("discover-our-job__card-section__left-arrow")&&s<0?s+=100:this.classList.contains("discover-our-job__card-section__left-arrow")&&s===0&&(s=t),n.forEach(p=>p.style.transform=`translateX(${s}%)`)};var handleArrowClick=r;[{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"},{name:"Jules",job:"Conseiller Patrimonial",description:"“Ce qui me challenge tous les jours ? <br/> La satisfaction client”",photoUrl:"/assets/images/jules-portrait.png"}].forEach(t=>{document.querySelector(".discover-our-job__card-section__cards").innerHTML+=`
  <div class="discover-our-job__card-section__cards__card">
  <div class="discover-our-job__card-section__cards__card__text-container">
    <div class="discover-our-job__card-section__cards__card__text-container__title">
      <h3>${t.name}</h3>
      <p>${t.job}</p>
    </div>
    <div class="discover-our-job__card-section__cards__card__text-container__description">
      ${t.description}
    </div>
    <div class="discover-our-job__card-section__cards__card__profile-container">
    <img src="${t.photoUrl}" alt="">
  </div>
  </div>
  
</div>
  `}),document.querySelector(".discover-our-job__card-section__cards");const n=document.querySelectorAll(".discover-our-job__card-section__cards__card");document.querySelectorAll(".discover-our-job__card-section__right-arrow, .discover-our-job__card-section__left-arrow").forEach(t=>t.addEventListener("click",r));let s=0}if(document.querySelector(".join-the-team-section")){let n=function(){if(console.dir(this),this.nextElementSibling.style.maxHeight)console.dir(this.nextElementSibling),this.nextElementSibling.style.maxHeight="",this.lastElementChild.style.transform="rotate(0deg)";else{const s=this.nextElementSibling.scrollHeight;this.nextElementSibling.style.maxHeight=`${s}px`,this.lastElementChild.style.transform="rotate(180deg)"}};var me=n;document.querySelectorAll(".join-the-team-section__offer-container__offer-btn").forEach(s=>s.addEventListener("click",n))}document.addEventListener("DOMContentLoaded",function(){if(document.querySelector(".piloted-graph-section")){let _=function(){p.innerHTML="",v.forEach(w=>w.classList.remove("piloted-graph-section__btns-container__btn--active")),this.classList.add("piloted-graph-section__btns-container__btn--active");const o=this.getAttribute("data-attr"),u=e[o][e[o].length-2].percentage,m=e[0][o].condition,f=document.querySelector(".piloted-graph-section__conditions p");switch(f.textContent=m,e[o].forEach((w,y)=>{if(y===3)return;const b=w.percentage*100/u;p.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph piloted-graph-section__graph-container__bar-container__bar-graph--${y}"

      >
        ${w.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${w.description}
      </div>
    </div>`;const C=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${y}`);C.style.maxHeight="0",C.style.opacity="0",setTimeout(()=>{const L=document.querySelector(`.piloted-graph-section__graph-container__bar-container__bar-graph--${y}`);L.style.maxHeight=`${b}%`,L.style.opacity="1",g(L,w.percentage,500)},10)}),o){case"0":f.textContent=e[0][3].conditions;break;case"1":f.textContent=e[1][3].conditions;break;case"2":f.textContent=e[2][3].conditions;break}},g=function(o,u,m){const y=m/10;let b=0;const C=(u-0)/y;function L(){b+=C,b>=u?o.textContent=`${u} %`:(o.textContent=`${b.toFixed(1)} %`,setTimeout(L,10))}L()};var n=_,a=g;const s=[[{titre:"Sur 3 ans",percentage:3.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3",condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{titre:"Sur 5 ans",percentage:8.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4",active:!0,condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{titre:"depuis l'origine",percentage:11.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5",condition:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."},{conditions:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 3 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}],[{percentage:5.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:9.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:15.8,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"},{conditions:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : 5 ans annualisés courant de 2018 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}],[{percentage:7.3,description:"Profil 1<br>Lazard Frères Gestion<br>SRI 3"},{percentage:10.4,description:"Profil 7<br>Lazard Frères Gestion<br>SRI 4"},{percentage:16.9,description:"Conviction<br>Generali Wealth Solutions<br>SRI 5"},{conditions:"Profils de gestion pilotée, sur les conseils de Lazard Frères Gestion, pour le contrat Altaprofits Vie. Période de performances : performances des profils depuis l’origine de 2006 à 2021. L’investissement sur les supports en unités de compte supporte un risque de perte en capital puisque leur valeur est sujette à fluctuation à la hausse comme à la baisse dépendant notamment de l’évolution des marchés financiers. Avant d’investir, il est recommandé d’établir son profil investisseur."}]],r=JSON.stringify(s),c=document.querySelector(".piloted-graph-section__btns-container");if(c.hasAttribute("data-content")){const o=JSON.parse(c.getAttribute("data-content").replace(/\\r\\n/g,""));var e=JSON.parse(o)}else{c.setAttribute("data-content",r);var e=s}let t=e[0];const p=document.querySelector(".piloted-graph-section__graph-container");c.innerHTML="",t.forEach((o,u)=>{if(u===3)return;let m=o.active==1?"piloted-graph-section__btns-container__btn--active":"";c.innerHTML+='<div class="piloted-graph-section__btns-container__btn '+m+'" data-attr="'+u+'">'+o.titre+"</div>"}),document.querySelector(".piloted-graph-section__conditions p");const v=document.querySelectorAll(".piloted-graph-section__btns-container__btn");v.forEach((o,u)=>{u!==3&&(o.innerHTML=e[0][u].titre)}),v.forEach(o=>o.addEventListener("click",_));const x=e[1][e[1].length-2].percentage;e[1].forEach((o,u)=>{if(u===3)return;const m=o.percentage*100/x;p.innerHTML+=`
    <div
      class="piloted-graph-section__graph-container__bar-container"

    >
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-graph"
        style="max-height: ${m}%"
      >
        ${o.percentage}%
      </div>
      <div
        class="piloted-graph-section__graph-container__bar-container__bar-information"
      >
       ${o.description}
      </div>
    </div>
        `})}});if(document.querySelector(".capital-calculator-section")){let t=function(){let _=a.valueAsNumber;const g=r.valueAsNumber,x=c.valueAsNumber/100,o=s.valueAsNumber;for(let m=0;m<g;m++)for(let f=0;f<12;f++){const w=x*_;_+=w*(1/12)+o}_=Math.round(_/1e3)*1e3,_.toString().split("").splice(-3,0," "),p(e,_,500)},p=function(_,g,x){const m=x/10;let f=0;const w=(g-0)/m;function y(){f+=w,f>=g?_.textContent=`${v(g)} €`:(_.textContent=`${v(f.toFixed(0))} €`,setTimeout(y,10))}y()},v=function(_){return _.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};var calculateResult=t,animateNumber=p,numberWithSpaces=v;const e=document.querySelector(".capital-calculator-section__result-value"),n=document.querySelectorAll(".capital-calculator-section__cursors-container__cursor-container input"),a=document.querySelector("#first-range"),s=document.querySelector("#second-range"),r=document.querySelector("#third-range"),c=document.querySelector("#fourth-range");n.forEach(_=>_.addEventListener("input",function(){const g=(this.value-this.min)/(this.max-this.min)*100,x=_.value.split("");x.splice(-3,0," "),(_.name="first-range")&&(_.labels[0].textContent=`${x.join("")} ${_.getAttribute("data-attr")}`),this.style.background=`linear-gradient(to right, #ff6442 0%, #ff6442 ${g}%, #fbe1da ${g}%, #fbe1da 100%)`,t()})),t()}const de=document.querySelectorAll(".promo-banner-section");de.forEach(e=>{e.querySelector(".promo-banner-section__items-section__items");const n=e.querySelectorAll(".promo-banner-section__items-section__items__item"),a=e.querySelector(".promo-banner-section__items-section__left-arrow"),s=e.querySelector(".promo-banner-section__items-section__right-arrow");let r=0;n.length>1&&(s.style.display="block",a.style.display="block",s.addEventListener("click",()=>{r=(r+1)%n.length,c(r)},{passive:!0}),a.addEventListener("click",()=>{r=(r-1+n.length)%n.length,c(r)},{passive:!0}));function c(t){n.forEach(p=>{p.style.transform=`translateX(-${t*100}%)`})}c(r)});const pe=[{title:"PIERVAL SANTE",sector:"Santé",capitalization:"1 774 M€",geographicalArea:{areas:["Europe"],name:"Europe"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:1020,logoUrl:"./assets/logos/la_francaise.png"},{title:"LF AVENIR SANTE",sector:"Santé",capitalization:"1 774 M€",geographicalArea:{areas:["Europe","France"],name:"Europe, Ile-de-France"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:300,logoUrl:"./assets/logos/la_francaise.png"},{title:"PRIMOVIE",sector:"Santé",capitalization:"1 774 M€",geographicalArea:{areas:["Europe"],name:"Europe"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:2030,logoUrl:"./assets/logos/la_francaise.png"},{title:"PF HOSPITALITE EUROPE",sector:"Santé",capitalization:"1 774 M€",geographicalArea:{areas:["Europe"],name:"Europe"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:1e3,logoUrl:"./assets/logos/la_francaise.png"},{title:"PRIMOFAMILY",sector:"Résidentiel",capitalization:"1 774 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:2040,logoUrl:"./assets/logos/la_francaise.png"},{title:"VENDOME REGIONS",sector:"Diversifiée",capitalization:"1 774 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:3350,logoUrl:"./assets/logos/la_francaise.png"},{title:"INTERPIERRE France",sector:"Diversifiée",capitalization:"1 774 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:5250,logoUrl:"./assets/logos/la_francaise.png"},{title:"CŒUR DE REGION",sector:"Diversifiée",capitalization:"1 774 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:659,logoUrl:"./assets/logos/la_francaise.png"},{title:"ESG PIERRE CAPITALE",sector:"Diversifiée",capitalization:"1 774 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:1025,logoUrl:"./assets/logos/la_francaise.png"},{title:"EPARGNE FONCIERE",sector:"Bureaux",capitalization:"5 061 394 250 €",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"835 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"4,40%"},minimumAccessAmount:835,logoUrl:"./assets/logos/la_francaise.png"},{title:"EPARGNE PIERRE",sector:"Bureaux",capitalization:"1 774 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"5,36%"},minimumAccessAmount:2080,logoUrl:"./assets/logos/atland_voisin.png"},{title:"LF EUROPIMMO",sector:"Bureaux",capitalization:"103 289 055 €",geographicalArea:{areas:["Europe"],name:"Europe"},subscriptionPrice:"1045 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"4,02%"},minimumAccessAmount:1045,logoUrl:"./assets/logos/la_francaise.png"},{title:"EFIMMO 1",sector:"Bureaux",capitalization:"1 876 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"237 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"4,91%"},minimumAccessAmount:2370,logoUrl:"./assets/logos/la_francaise.png"},{title:"PRIMOPIERRE",sector:"Bureaux",capitalization:"3,9 Mds €",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"208 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"4,77%"},minimumAccessAmount:2080,logoUrl:"./assets/logos/primonial.png"},{title:"PFO2",sector:"Bureaux",capitalization:"2 848 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"196 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"4,59%"},minimumAccessAmount:5880,logoUrl:"./assets/logos/perial.png"},{title:"PF GRAND PARIS",sector:"Bureaux",capitalization:"1 228 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"544 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"4,42%%"},minimumAccessAmount:5440,logoUrl:"./assets/logos/perial.png"},{title:"IMMORENTE",sector:"Commerces",capitalization:"1 228 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"544 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"4,42%%"},minimumAccessAmount:1360,logoUrl:"./assets/logos/perial.png"},{title:"ACTIVIMMO",sector:"Logistique",capitalization:"1 228 M€",geographicalArea:{areas:["France"],name:"Ile-de-France"},subscriptionPrice:"544 €",payoutRatio:{name:"Taux de distribution en 2021 :",value:"4,42%%"},minimumAccessAmount:3100,logoUrl:"./assets/logos/perial.png"}],A={initialInvestissement:1e5,selectedBtns:["France","Europe","Commerces"]},T=document.querySelector(".scpi-selector__selectors-container__resultsCards"),j=document.querySelectorAll(".scpi-selector__selectors-container__sectoralCategory__btns-container__btn, .scpi-selector__selectors-container__geographicalArea__btns-container__btn"),k=document.querySelector(".scpi-selector__selectors-container__initial-investissement-container input"),ue=document.querySelector(".scpi-selector__selectors-container__initial-investissement-container label");k.addEventListener("input",_e);j.forEach(e=>e.addEventListener("click",n=>me(n,A.selectedBtns)));function _e(){A.initialInvestissement=k.value;const e=(k.value-k.min)/(k.max-k.min)*100,n=k.value.split("");n.splice(-3,0," "),ue.textContent=`${n.join("")} €`,k.style.background=`linear-gradient(to right, #ff6442 0%, #ff6442 ${e}%, #fbe1da ${e}%, #fbe1da 100%)`,F(N(A))}function me(e,n){const a=e.target.getAttribute("data-attr");ve(n,a)}function ve(e,n){const a=e.indexOf(n);a!==-1?e.splice(a,1):e.push(n),M()}function M(){j.forEach(e=>{const n=A.selectedBtns.includes(e.getAttribute("data-attr"));e.style.background=n?"#ff6442":"#f3f5f6",e.style.color=n?"#f3f5f6":"#001329"}),F(N(A))}function F(e){T.innerHTML="",e.forEach(n=>{T.innerHTML+=`
    <div class="scpi-selector__selectors-container__resultsCards__card">
      <div class="scpi-selector__selectors-container__resultsCards__card__header">
        <h3>${n.title}</h3>
      </div>
      <div class="scpi-selector__selectors-container__resultsCards__card__body">
        <div class="scpi-selector__selectors-container__resultsCards__card__body__descriptions">
          <p>Capitalisation : <span>${n.capitalization}</span></p>
          <p>Zone géographique : <span>${n.geographicalArea.name}</span></p>
          <p>Prix de souscription : <span>${n.subscriptionPrice}</span></p>
          <p>${n.payoutRatio.name} : <span>${n.payoutRatio.value}</span></p>
        </div>
        <img src="${n.logoUrl}" alt="logo">
        <div class="scpi-selector__selectors-container__resultsCards__card__body__btns-container">
          <a class="button button--secondary button--light-theme button--small" href="#">En savoir plus</a>
          <a class="button button--primary button--small" href="#">Souscrire avec un conseiller</a>
        </div>
      </div>
    </div>
    `})}function N(e){return pe.filter(n=>n.minimumAccessAmount<=e.initialInvestissement).filter(n=>e.selectedBtns.includes(n.sector)).filter(n=>n.geographicalArea.areas.map(a=>e.selectedBtns.includes(a)).every(Boolean))}M();
