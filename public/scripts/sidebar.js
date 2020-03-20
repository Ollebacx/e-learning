document.getElementById('resize').addEventListener('click', function (event) {
  document.querySelectorAll('.menu-text').forEach(elem => {
    elem.classList.toggle('hidden-text')
  })
  document.getElementsByClassName('sidebar')[0].classList.toggle('sidebar-collapsed')
})
