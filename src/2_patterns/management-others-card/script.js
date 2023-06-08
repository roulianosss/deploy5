const managementOthersCards = document.querySelectorAll('.management-others-card');

if (managementOthersCards) {
    let maxHeight = 0;
    managementOthersCards.forEach((element) => {
        const explanations = element.querySelectorAll('.management-others-card__explaination');

        for (let i = 0;
             i < explanations.length;
             i++) {
            const explanation = explanations[i];
            const explanationHeight = explanation.offsetHeight;
            if (explanationHeight > maxHeight) {
                maxHeight = explanationHeight;
            }
        }
        if (maxHeight > 0) {
            element.querySelector('.management-others-card__explainations').style.setProperty(
                'height',
                `calc(${maxHeight}px + var(--spacing-8))`,
            );
        }

        const links = element.querySelectorAll('.management-others-card__link');

        links.forEach((link) => {
            let name = link.dataset.name;
            let explaination = element.querySelector('.management-others-card__explaination[data-name=' + name + ']');

            link.addEventListener('mouseenter',
                () => {
                    explaination.classList.add('active');
                });

            link.addEventListener('mouseleave',
                () => {
                    explaination.classList.remove('active');
                });
        });
    });

    window.addEventListener('resize', function (event) {
        //console.log('resized');
        const managementGuidedCards = document.querySelectorAll('.management-guided-card');
        const managementOthersCards = document.querySelectorAll('.management-others-card');
        // const productManagementCards = document.querySelectorAll('.product-management-section__content');
        if (managementGuidedCards.length && managementOthersCards.length
            && managementGuidedCards[0].offsetHeight != managementOthersCards[0].offsetHeight) {
            //managementGuidedCards[0].style.height = productManagementCards[0].offsetHeight+ "px";
            //managementOthersCards[0].style.height = productManagementCards[0].offsetHeight+ "px";
            if (managementGuidedCards[0].offsetHeight > managementOthersCards[0].offsetHeight) {
                managementOthersCards[0].style.height = managementGuidedCards[0].offsetHeight + "px";
                // console.log('managementOthersCards resized to '+ managementOthersCards[0].style.height );
            } else {
                managementGuidedCards[0].style.height = managementOthersCards[0].offsetHeight + "px";
                // console.log('managementGuidedCards resized to '+ managementGuidedCards[0].style.height );
            }
        }
    }, true);
    document.addEventListener("DOMContentLoaded", () => {
        const managementGuidedCards = document.querySelectorAll('.management-guided-card');
        const managementOthersCards = document.querySelectorAll('.management-others-card');
        // const productManagementCards = document.querySelectorAll('.product-management-section__content');
        if (managementGuidedCards.length && managementOthersCards.length
            && managementGuidedCards[0].offsetHeight != managementOthersCards[0].offsetHeight) {
            //managementGuidedCards[0].style.height = productManagementCards[0].offsetHeight+ "px";
            //managementOthersCards[0].style.height = productManagementCards[0].offsetHeight+ "px";
            if (managementGuidedCards[0].offsetHeight > managementOthersCards[0].offsetHeight) {
                managementOthersCards[0].style.height = managementGuidedCards[0].offsetHeight+ "px";
                // console.log('managementOthersCards resized to '+ managementOthersCards[0].style.height );
            } else {
                managementGuidedCards[0].style.height = managementOthersCards[0].offsetHeight + "px";
                // console.log('managementGuidedCards resized to '+ managementGuidedCards[0].style.height );
            }
        }
    });
}