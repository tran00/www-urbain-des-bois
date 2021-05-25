export default () => {
  const slides = document.querySelectorAll('.slideshow__slide')
  display(0)

  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i]
    const prev = slide.querySelector('button[data-action=prev]')
    const next = slide.querySelector('button[data-action=next]')
    prev.addEventListener('click', () => display(i - 1))
    next.addEventListener('click', () => display(i + 1))
  }

  function display (index) {
    if (index < 0) index = slides.length - 1
    if (index > slides.length - 1) index = 0

    for (let i = 0; i < slides.length; i++) {
      // /!\ toggle second argument doesn't work on ie11
      // slides[i].classList.toggle('is-hidden', i !== index)
      if(i !== index) {
        slides[i].classList.add('is-hidden');
      } else {
        slides[i].classList.remove('is-hidden');
      }
    }
  }
}
