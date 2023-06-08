if (document.querySelector(".join-the-team-section")) {

    const allOfferBtns = document.querySelectorAll(".join-the-team-section__offer-container__offer-btn")

    allOfferBtns.forEach(btn => btn.addEventListener("click",
        handleClick))

    function handleClick() {
        console.dir(this)
        if (this.nextElementSibling.style.maxHeight) {

            console.dir(this.nextElementSibling)
            this.nextElementSibling.style.maxHeight = ""
            this.lastElementChild.style.transform = "rotate(0deg)"
        } else {
            const contentHeight = this.nextElementSibling.scrollHeight
            this.nextElementSibling.style.maxHeight = `${contentHeight}px`
            this.lastElementChild.style.transform = "rotate(180deg)"

        }
    }
}