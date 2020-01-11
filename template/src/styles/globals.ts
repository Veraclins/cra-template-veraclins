import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import { white, grey, dark } from 'styles/colors';
import { baseSize, rem } from 'styles';

const globalStyles = createGlobalStyle`
  ${styledNormalize}
  @import url('https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,700|Playfair+Display:400,700');

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    background-color: ${white};
    color: ${grey};
    margin: 0 auto;
    padding: 0 ${rem(50)};
    font-size: ${rem(baseSize)};
    line-height: 150%;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Open Sans', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
    min-height: 100%;
    @media screen and (max-width: ${rem(480)}) {
      padding: 0 ${rem(20)};
    }
  }

  h1 {
    color: ${dark};
    font-size: ${rem(48)};
    line-height: 150%;
    font-family: 'PlayFair Display', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  }

  h2 {
    color: ${dark};
    font-size: ${rem(24)};
    line-height: 150%;
    font-family: Montserrat, 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  }

  h3 {
    color: ${dark};
    font-size: ${rem(16)};
    line-height: 150%;
    font-family: Montserrat, 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  #root {
    display: flex;
    min-height: 100%;
  }
`;

export default globalStyles;
