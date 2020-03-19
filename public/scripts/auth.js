// eslint-disable-next-line no-undef
const api = axios.create({
  baseURL: 'api/',
  timeout: 1000
})

document.getElementById('btn-signup').addEventListener('click', (event) => {
  const newUser = {
    firstName: document.getElementById('signup_firstName').value,
    lastName: document.getElementById('signup_lastName').value,
    email: document.getElementById('signup_email').value,
    password: document.getElementById('signup_password').value
  }

  api
    .post('auth/signup', newUser)
    //
    // Aqui es donde el backend crea el usuario
    // crea el token y me lo devuelve
    //
    .then(function (response) {
      localStorage.clear()
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('email', response.data.email)
      localStorage.setItem('firstName', response.data.firstName)
      location.assign('explore.lessons.html')
    })
    .catch(function (error) {
      console.log(error.response)
    })
})

document.getElementById('btn-login').addEventListener('click', (event) => {
  const newUser = {
    user_email: document.getElementById('login_email').value,
    user_password: document.getElementById('login_password').value
  }

  api
    .post('auth/login', newUser)
    .then(function (response) {
      if (response.data.error) {
        alert('WRONG PASSWORD')
      } else {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('name', response.data.username)
        localStorage.setItem('email', response.data.email)
        location.assign('todos.html')
      }
    })
    .catch(function (error) {
      console.log(error.response)
    })
})

// document.getElementById('btn-api').addEventListener('click', (event) => {
//   api
//     .get('whoami', { headers: { token: localStorage.getItem('token') } })
//     .then(function (response) {
//       console.log(response.data)
//     })
//     .catch(function (error) {
//       console.log(error.response)
//     })
// })
