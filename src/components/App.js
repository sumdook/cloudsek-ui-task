import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'rebass';

import { GlobalStyle } from '../styles/globalStyle';
import theme from '../styles/theme';

import Main from './Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>
          <Flex width={[1 / 2]}>
            <Main />
          </Flex>
        </Container>
      </ThemeProvider>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

export default App;
