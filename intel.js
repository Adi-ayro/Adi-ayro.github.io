// Text animation

function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      // Passing the options object to the addObserver function
      addObserver(el, options)
    })
  }
  // Receiving options passed from the scrollTrigger function
  function addObserver(el, options) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('fade-in')
          observer.unobserve(entry.target)
        }
      })
    }, options) // Passing the options object to the observer
    observer.observe(el)
  }
  // Example usage 1:
  // scrollTrigger('.scroll-reveal')
  // Example usage 2:
  scrollTrigger('.ex2', {})
  scrollTrigger('.ex3', {})
  scrollTrigger('.ex4', {})
  scrollTrigger('.ex5', {})
  scrollTrigger('.ex6', {})
  scrollTrigger('.ex7', {})


// Cursor

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 5) + "px;" +  "left: " + (e.pageX - 5) + "px;")

})