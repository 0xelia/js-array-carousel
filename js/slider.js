const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

let wrapperEl = document.querySelector('.slider .slides-wrapper')
let liDom = []
let liElement
//MILESTONE 1

for (let i = 0; i < slides.length; i++) {
    let img = document.createElement('img')
    img.src = slides[i]   

    liElement = document.createElement('li')
    liElement.className = 'slide'

    if (i === 0) {
        liElement.classList.add('active')
    }

    liElement.append(img)
    wrapperEl.append(liElement)

    liDom.push(liElement)
}

console.dir(liDom[0])
let i = 0

//MILESTONE 2

//AL CLICK di una delle freccette:
    //PER OGNI click



let nextButton = document.querySelector('.arrow-next')
nextButton.addEventListener('click', function() {
    
    let currentSlide = liDom[i]
    currentSlide.classList.remove('active')
    let nextSlide = liDom[i + 1] 
    nextSlide.classList.add('active')
    i++
    console.log(i)

})

let prevButton = document.querySelector('.arrow-prev')
prevButton.addEventListener('click', function() {
    
    liDom[i].classList.remove('active')
    let nextSlide = liDom[i - 1] 
    nextSlide.classList.add('active')
    i--
    console.log(i)
})
