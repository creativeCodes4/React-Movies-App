import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 1rem;
  transition: 0.5s ease;
`;
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  padding: 0.5rem 2rem;
  background-color: #ff6464;
  font-size: 1.5rem;
  cursor: pointer;
`;

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <StyledSearchBar>
      <input
        type="text"
        value={searchValue}
        placeholder="Search Movies Here..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <StyledButton>
        <IoSearchSharp />
      </StyledButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
