import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Purpose } from './components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Purpose/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
