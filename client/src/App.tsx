import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { NavBar, Purpose, Catalog, Footer, About, Contact } from './components';



function App() {
  return (

      <ThemeProvider theme={theme}>
        
        <About/>
        <Contact/>
        <GlobalStyle/>
       
      </ThemeProvider>
      
  );
}

export default App;
