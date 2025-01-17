export default () => {
  const covers = document.querySelectorAll('.header__cover')

  let index = 0
  display(index)
  window.setInterval(() => {
    index = (index + 1) % covers.length
    display(index)
  }, 3000)

  function display (index) {
    if (index < 0) index = covers.length - 1
    if (index > covers.length - 1) index = 0

    for (let i = 0; i < covers.length; i++) {
      covers[i].classList.toggle('is-hidden', i !== index)
    }
  }
}
