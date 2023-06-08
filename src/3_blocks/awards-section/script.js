const params = {
    speed: 200
}

const awardsSection = document.querySelectorAll(".awards-section")

if (awardsSection) {
    awardsSection.forEach((element) => {
        const sliderContent = element.querySelector(".awards-section__content")

        const sliderContentClone = sliderContent.cloneNode(true)
        sliderContent.classList.add("primary")
        sliderContentClone.classList.add("secondary")
        sliderContent.parentNode.appendChild(sliderContentClone)

        const awardsNumber = sliderContent.querySelectorAll(".award-item").length
        sliderContent.style.setProperty("animation",
            `awards-section--primary ${(awardsNumber * 1000) / params.speed}s linear infinite`)
        sliderContentClone.style.setProperty("animation",
            `awards-section--secondary ${(awardsNumber * 1000) / params.speed}s linear infinite`)

    })
}
