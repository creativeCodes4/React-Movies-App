import React from 'react';
import styled from 'styled-components';
import { RiMovie2Line } from 'react-icons/ri';

const StyledHeader = styled.header`
  display: flex;
  width: 80%;
  margin: auto;
  color: whitesmoke;
  font-family: 'Source Sans Pro', sans-serif;
  padding: 0 2rem;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  color: #ff6464;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>&nbsp;Movie Search</StyledH1>
      <StyledH1>
        <RiMovie2Line />
      </StyledH1>
    </StyledHeader>
  );
};

export default Header;
