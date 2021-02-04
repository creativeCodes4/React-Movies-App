import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Wrapper from './Components/Wrapper';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f371876d`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) setMovies(responseJson.Search);
    // if (responseJson.Search) console.log(responseJson.Search);
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <>
      <Header />
      <hr />
      <Wrapper
        movies={movies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </>
  );
};

export default App;
