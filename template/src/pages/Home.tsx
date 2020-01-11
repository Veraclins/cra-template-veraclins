import React from 'react';
import styled from 'styled-components';
import { pxToRem } from 'styles';

const Home: React.FunctionComponent = () => {
  return <Container>Home page</Container>;
};

const Container = styled.div`
  margin: ${pxToRem(20)} auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export default Home;
