import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledDiv = styled.div`
  width: 12rem;
  background-color: #233554;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.01rem;
  border: 1px solid ${rgba('#233554', 0.6)};
`;

const MovieItem = ({ movie }) => {
  return (
    <div>
      <StyledDiv className="movie-item">
        <img src={movie.Poster} className alt={movie.Title} />
        <div className="overlay">
          <span>{movie.Year}</span>
        </div>
      </StyledDiv>
    </div>
  );
};

export default MovieItem;
