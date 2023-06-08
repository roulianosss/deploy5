if (document.querySelector(".questions-container")) {

    const accordionBtns = document.querySelectorAll(
        ".accordion-container__accordion-btn"
    )
    const questionResponseContainers = document.querySelectorAll(
        ".accordion-container__content__question-container__question"
    )
    questionResponseContainers.forEach((question) =>
        question.addEventListener("click",
            handleClick)
    )
    accordionBtns.forEach((question) =>
        question.addEventListener("click",
            handleClick)
    )

    function handleClick(e) {
        if (this.nextElementSibling.style.maxHeight) {
            this.nextElementSibling.style.maxHeight = ``
            if (
                this.className ===
                "accordion-container__content__question-container__question"
            ) {
                this.lastElementChild.textContent = "+"
                this.nextElementSibling.style.opacity = `0`
                this.parentElement.parentElement.style.maxHeight = `${
                    this.parentElement.parentElement.scrollHeight + 500
                }px`
            } else {
                this.lastElementChild.style.transform = "rotate(0deg)"
                this.style.backgroundColor = ""
                this.style.color = ""
            }

        } else {
            this.nextElementSibling.style.maxHeight = `${this.nextElementSibling.scrollHeight}px`
            this.nextElementSibling.style.opacity = `1`

            if (
                this.className ===
                "accordion-container__content__question-container__question"
            ) {
                this.lastElementChild.textContent = "-"
                setTimeout(() => {
                        this.parentElement.parentElement.style.maxHeight = `${
                            this.parentElement.parentElement.scrollHeight + 500
                        }px`
                    },
                    200)
            } else {
                this.lastElementChild.style.transform = "rotate(-180deg)"

                console.dir(this)
                this.style.backgroundColor = "#002853"
                this.style.color = "#F7FAFD"
            }
        }
    }
}
