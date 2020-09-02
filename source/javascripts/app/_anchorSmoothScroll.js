//= require ../lib/_jquery

;(function() {
  $(document).ready(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      const href = anchor.getAttribute('href')
      
      console.log('click')

      if (/#.+/.test(href)) {
        anchor.addEventListener('click', event => {
          event.preventDefault()

          const element = document.querySelector(href)
          element.scrollIntoView({
            behavior: 'smooth',
          })
        })
      }
    })
  })
})();
