(function () {
  if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('firstName')
  } else {
    location.href = 'index.html'
  }

  document.getElementById('resize').addEventListener('click', function (event) {
    document.querySelectorAll('.menu-text').forEach(elem => {
      elem.classList.toggle('hidden-text')
    })
    document.getElementsByClassName('sidebar')[0].classList.toggle('sidebar-collapsed')
  })

  document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('index.html')
  })
})()
