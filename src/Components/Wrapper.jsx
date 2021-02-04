import React from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import SearchBar from './SearchBar';

// Styled Components

const StyledWrapper = styled.section`
  width: 100%;
  min-height: 300px;
  margin: auto;
  color: white;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MovieWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 6rem;
  flex-wrap: wrap;
`;

const Wrapper = ({ movies, searchValue, setSearchValue }) => {
  return (
    <StyledWrapper className="wrapper">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieWrapper>
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </MovieWrapper>
    </StyledWrapper>
  );
};

export default Wrapper;
