//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

// API KEY: c86be0cd02b970730408b9efd4e9
// API Read ACCESS TOKEN: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODZiZTBjZDAyYjk3MDczMDQwOGI5ZWZkNGU5N2RkMiIsInN1YiI6IjY0Y2FhMjM3ZTA0ZDhhMDBhZDhmZWZiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.us9gPko1eJKU-NyFpcHKvQxDN1eyeMzL1SycMgab5Bs

// Components:
// filterable movie table
//   search bar and filters
// 
//   MOVIE TABLE 
//     Movie Row: picture, title, director, actors, genre, year
//     
// const MOVIES = [
//     {
//       "adult": false,
//       "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
//       "genre_ids": [
//         35,
//         12,
//         14
//       ],
//       "id": 346698,
//       "original_language": "en",
//       "original_title": "Barbie",
//       "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
//       "popularity": 3545.441,
//       "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
//       "release_date": "2023-07-19",
//       "title": "Barbie",
//       "video": false,
//       "vote_average": 7.5,
//       "vote_count": 2010
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
//       "genre_ids": [
//         28,
//         12,
//         878
//       ],
//       "id": 298618,
//       "original_language": "en",
//       "original_title": "The Flash",
//       "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
//       "popularity": 3531.771,
//       "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
//       "release_date": "2023-06-13",
//       "title": "The Flash",
//       "video": false,
//       "vote_average": 6.9,
//       "vote_count": 1903
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg",
//       "genre_ids": [
//         12,
//         10751,
//         14,
//         10749
//       ],
//       "id": 447277,
//       "original_language": "en",
//       "original_title": "The Little Mermaid",
//       "overview": "The youngest of King Triton's daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
//       "popularity": 2445.382,
//       "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
//       "release_date": "2023-05-18",
//       "title": "The Little Mermaid",
//       "video": false,
//       "vote_average": 6.5,
//       "vote_count": 1320
//     }
//   ]

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODZiZTBjZDAyYjk3MDczMDQwOGI5ZWZkNGU5N2RkMiIsInN1YiI6IjY0Y2FhMjM3ZTA0ZDhhMDBhZDhmZWZiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.us9gPko1eJKU-NyFpcHKvQxDN1eyeMzL1SycMgab5Bs'
  //   }
  // };
  // fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  //   .then(response => response.json())
  //   .then(response => MOVIES)
  //   .catch(err => console.error(err));

  // async function getMovies() {

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODZiZTBjZDAyYjk3MDczMDQwOGI5ZWZkNGU5N2RkMiIsInN1YiI6IjY0Y2FhMjM3ZTA0ZDhhMDBhZDhmZWZiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.us9gPko1eJKU-NyFpcHKvQxDN1eyeMzL1SycMgab5Bs'
  //     }
  //   };
  //   try {
  //     let response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
  //     let data = await response.json();
  //     return data.results;

  //   } catch (error){
  //     console.log(error)
  //   }
    
  // }


function SearchBar() {
  return (
    <form>
      <input type= 'text' placeholder='Search...'/>
      <label>
        <input type='checkbox'/>
        {' '}
        Only show cool Movies!
      </label>
    </form>
  );
}

function MovieRow({movie}) {

  const poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <tr>
      <td><img className= "poster" src={poster} alt="Poster"/></td>
      <td>{movie.title}</td>
    </tr>
  );

 }

 function MovieTable({movies}) {
  const rows = [];

  movies.forEach((movie) => {
    rows.push(
      <MovieRow movie={movie} key={movie.id}/>
      );
  });


  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Poster</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
 }



 function FilterableMovieTable({movies}) {
  return(
    <div>
      <SearchBar />
      <MovieTable movies = {movies}/>
    </div>
  );
 }

function App() {

  const [movies, setMovies] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODZiZTBjZDAyYjk3MDczMDQwOGI5ZWZkNGU5N2RkMiIsInN1YiI6IjY0Y2FhMjM3ZTA0ZDhhMDBhZDhmZWZiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.us9gPko1eJKU-NyFpcHKvQxDN1eyeMzL1SycMgab5Bs'
    }
  };

  const fetchMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchMovies()
  })

  return (
    <FilterableMovieTable movies = {movies.slice(0,20)}/>
  );
}

export default App;
