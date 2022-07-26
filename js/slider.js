const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

let wrapperEl = document.querySelector('.slider .slides-wrapper')

// PER OGNI stringa dell'array slides
for (let i = 0; i < slides.length; i++) {
    let img = document.createElement('img')
    img.src = slides[i]
    

    let liElement = document.createElement('li')
    liElement.className = 'slide'

    if (i === 0) {
        liElement.classList.add('active')
    }

    liElement.append(img)
    wrapperEl.append(liElement)
}
    //creare un tag img 
    // assegnarli um src
    // creare un li e assegnargli la classe .slide
        //SE è il primo 
            //allora assegnarli la classe .active




