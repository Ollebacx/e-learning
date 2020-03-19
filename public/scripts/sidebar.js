document.getElementById('resize').addEventListener('click', function (event) {
  const hidden = document.querySelectorAll('.menu-text')
  hidden.forEach(elem => {
  elem.classList.toggle('hidden-text')
  })
document.getElementsByClassName('sidebar')[0].classList.toggle('sidebar-collapsed')
})
