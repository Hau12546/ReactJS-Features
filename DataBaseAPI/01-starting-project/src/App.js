import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import axios from 'axios';
import { movieAPI } from './MoviesAPI';

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];
  const [movies, setMoviesList] = useState(dummyMovies);
  const [isLoading,setLoadingStatus] = useState(false);
  const [isError,setError] = useState(false)
  let content = <MoviesList movies={movies}/>;
  const fetchMovies = useCallback((()=>{
    setLoadingStatus(true);
    axios.get(`${movieAPI.get}/films/`).then((response)=>{
      return response['data']['results'];
    }).then((list)=>{
      const transformedList = list.map((value)=>{
        return {
          id:value.episode_id,
          title:value.title,
          openingText:value.opening_crawl,
          releaseDate:value.release_date
        };
      }); 
      setMoviesList((preState)=>{
        setLoadingStatus(false);
        return [...transformedList,...preState]
      });
    }).catch((error)=>{
      setError(true);
    });
  }),[]);

  useEffect(()=>{
    fetchMovies();
  },[fetchMovies])

  if(isError){
    content = <p>ST went wrong</p>;
  }

  if(isLoading){
    content = <p>loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {/* { !isLoading && movies.length>0 && <MoviesList movies={movies} />}
        { !isLoading && movies.length === 0 && <p>No movies found</p>}
        { isLoading && <p>Loading...</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
