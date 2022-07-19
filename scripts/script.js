let questions = document.querySelectorAll('.card-faq-question')
let firstOpen = false
let lastClass = 0
let lastQuestion
let lastArrow
let i = 0

questions.forEach(mapQuestions) 

function mapQuestions() {
    questions[i].statusControl = false
    questions[i].addEventListener('click', showAnswer)
    i++
}

function showAnswer () {
    if (!this.statusControl) {
        if(lastClass != 0) {
            let cln = document.getElementById(lastClass)
            cln.style.display = 'none'

            lastQuestion.classList.remove('card-faq-question-focus')
            lastArrow.classList.remove('card-faq-question-img-arrow-upsidedown')

            lastQuestion.statusControl = false
        }

        let clss = this.classList
        lastClass = clss[clss.length -1]
        let asw = document.getElementById(lastClass)
        asw.style.display = 'block'
        this.classList.add('card-faq-question-focus')
        let arrow = document.getElementById('arrow-' + lastClass)
        arrow.classList.add('card-faq-question-img-arrow-upsidedown')

        lastArrow = arrow
        lastQuestion = this
        this.statusControl = true
    }
    else {
        this.classList.remove('card-faq-question-focus')
        lastArrow.classList.remove('card-faq-question-img-arrow-upsidedown')

        let clss = this.classList
        lastClass = clss[clss.length -1]
        let clean = document.getElementById(lastClass)
        clean.style.display = 'none'

        lastClass = 0
        this.statusControl = false
    }
}