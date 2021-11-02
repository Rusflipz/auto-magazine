const headerButton = document.querySelector('.header__button')
const logo = document.querySelector('.header__logo')
const headerLinks = document.querySelector('.header__links')
const leftArrow = document.querySelector('.gallery__button_left')
const rightArrow = document.querySelector('.gallery__button_right')
const galleryImage = document.querySelector('.gallery__image')
let curNumGallery = 0
let curNumDot = 0
const dotLeft = document.querySelector('.press__dot_left')
const dotRight = document.querySelector('.press__dot_right')
const textContent = document.querySelector('.press__right-conteiner')
const pressButton = document.querySelector('.press__button')
const form = document.querySelector('.footer__form')
const formButton = document.querySelector('.footer__button')
const galerryFoto = [('./images/gallery1.png'), ('./images/gallery2.png'), ('./images/gallery3.png')];
const text = [(`<p class="press__text"><span class="press__text-bold">Engadget:</span> VW’s e-BULLI concept shows how your classic van can become an EV.</p>
`), (`<p class="press__text"><span class="press__text-bold">Drive.ru:</span> Вэн Volkswagen e-Bulli скрестил классику с современной техникой.</p>
`)];



headerButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('header__button_close');
    logo.classList.toggle('header__logo_hidden');
    headerLinks.classList.toggle('header__links_hidden');
})

leftArrow.addEventListener('click', function() {
    if (curNumGallery === 0) {
        curNumGallery = 2
    } else {
        curNumGallery = curNumGallery - 1;
    }
    galleryImage.src = galerryFoto[curNumGallery]
})

rightArrow.addEventListener('click', function() {
    if (curNumGallery === 2) {
        curNumGallery = 0
    } else {
        curNumGallery = curNumGallery + 1;
    }
    galleryImage.src = galerryFoto[curNumGallery]
})

dotLeft.addEventListener('click', function() {
    if (curNumDot === 0) {
        return false
    } else {
        const pressText = document.querySelector('.press__text')
        curNumDot = curNumDot - 1;
        dotLeft.classList.add('press__dot_active')
        dotRight.classList.remove('press__dot_active')
        pressText.remove()
        textContent.insertAdjacentHTML('afterBegin', text[curNumDot])

    }
})

dotRight.addEventListener('click', function() {
    if (curNumDot === 1) {
        return false
    } else {
        const pressText = document.querySelector('.press__text')
        curNumDot = curNumDot + 1;
        dotLeft.classList.remove('press__dot_active')
        dotRight.classList.add('press__dot_active')
        pressText.remove()
        textContent.insertAdjacentHTML('afterBegin', text[curNumDot])
    }
})

pressButton.addEventListener('click', function() {
    if (curNumDot === 0) {
        window.location.href = 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html'
    } else {
        window.location.href = 'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html'
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    formButton.textContent = "Готово!"
    return false
})