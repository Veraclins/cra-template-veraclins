import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import routes from 'routes';
import { pxToRem } from 'styles';

const App: React.FunctionComponent = () => {
  return (
    <MainContainer>
      <BrowserRouter>{routes}</BrowserRouter>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: ${pxToRem(80)};
  font-size: inherit;
  width: 100%;
  box-sizing: border-box;

  @media screen and (min-width: ${pxToRem(480)}) {
    padding-top: ${pxToRem(100)};
  }
`;
export default App;
