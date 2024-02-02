const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODZiZTBjZDAyYjk3MDczMDQwOGI5ZWZkNGU5N2RkMiIsInN1YiI6IjY0Y2FhMjM3ZTA0ZDhhMDBhZDhmZWZiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.us9gPko1eJKU-NyFpcHKvQxDN1eyeMzL1SycMgab5Bs'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  