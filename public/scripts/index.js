(function () {
  if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('firstName')
  } else {
    location.href = 'index.html'
  }
})()
