import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { NavBar, Purpose, Catalog, Footer } from './components';


function App() {
  return (

      <ThemeProvider theme={theme}>
        <NavBar/>
        <Purpose/>
        <Catalog/>
        <Footer/>
        <GlobalStyle/>
      </ThemeProvider>
      
  );
}

export default App;
