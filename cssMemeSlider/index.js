const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

let currentIndex = 0

function currentSlide(index) {
  showSlide(index - 1)
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex)
  })
}

function showSlide(index) {
  currentIndex = index
  const width = slides[0].clientWidth
  slider.style.transform = `translateX(-${width * index}px)`
  updateDots()
}

showSlide(currentIndex)
