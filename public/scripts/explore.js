(function () {
  const api = axios.create({
    baseURL: 'api/',
    timeout: 1000
  })

  if (localStorage.getItem('token')) {
    document.getElementById('username').innerText = localStorage.getItem('firstName')
  } else {
    location.href = 'auth.html'
  }

  document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('index.html')
  })
})()
