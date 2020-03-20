(function () {
  const api = axios.create({
    baseURL: 'api/',
    timeout: 1000
  })

  document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.clear()
    location.assign('index.html')
  })

  /*   function createLessons(lesson) {
    const lessonsUL = document.getElementById('lessonsUL')
    const lessonLI = document.createElement('li')
    lessonLI.innerHTML = `
    <div class="d-flex bg-white shadow shadow mt-5">
        <div class="col-2 ml bg-warning d-flex justify-content-center align-items-center"><h1 class="font-weight-bold display-2">${lessons.title}</h1></div>
        <div id="info" class="col-10">
          <h4 class="card-title font-weight-bold" id="title">${lessons.title}</h4>
          <p id="description">${lessons.description}</p>
          <span class="d-flex align-items-center mb-3">
            <span class="glyphicon glyphicon-dashboard mr-2 mb-1"></span><h5 class="mr-5" id="hours">Hours ${lessons.duration}</h5>
            <span class="glyphicon glyphicon-signal mr-2 mb-1"></span><h5 id="difficulty">${lessons.difficult}</h5>
            <div class="col d-flex justify-content-end"><button type="button" class="btn btn-warning pl-5 pr-5 text-dark">Add</button></div>
          </span>
        </div>
      </div>`
      lessonsUL.appendChild(lessonLI)
  }

  api.get('lessons')
      .then(res => res.data.forEach(lesson => {
       createLessons(lesson)
  }) */
})()
