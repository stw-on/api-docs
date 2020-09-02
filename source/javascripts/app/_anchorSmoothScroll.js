//= require ../lib/_jquery

;(function() {
  $(document).ready(function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      const href = anchor.getAttribute('href')

      if (/#.+/.test(href)) {
        anchor.addEventListener('click', function(event) {
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
