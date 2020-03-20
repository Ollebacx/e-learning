$(function () {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content, #name, #explore, #lessons, #logout, img').toggleClass('active')
  })
})
/* $(function () {
  // Sidebar toggle behavior
  $('#sidebarCollapse').on('click', function () {
    $('#name, #explore, #lessons, #logout').toggleClass('active')
  })
})
document.getElementById('sidebarCollapse').addEventListener('click', function (event) {
  const hidden = document.querySelectorAll('.menu-text')
  hidden.forEach(elem => {
  elem.classList.toggle('hidden-text')
  })
document.getElementsByClassName('sidebar')[0].classList.toggle('sidebar-collapsed')
}) */
