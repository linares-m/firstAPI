//Based on tutorial by Tania Rascia (taniarasciadotcom)
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    const movies = [];
    data.forEach((movie) => {
      movies.push([{'title': movie.title},{'description': movie.description}]);
    })
    document.querySelector('#getRecced').addEventListener('click', ()=>{
      var rand = Math.floor(Math.random() * (movies.length));
      var reccTitle = movies[rand][0].title;
      var reccDescription = movies[rand][1].description;
      console.log(reccTitle, reccDescription);
      document.querySelector('#reccMe').innerHTML =  reccTitle;
      document.querySelector('#reccMe2').innerHTML = reccDescription;
    })sc
  } else {
    console.log('error')
  }
}
// Send request
request.send()
