import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages/home';  
import { Purpose } from './pages/purpose';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Purpose/>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
