import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { NavBar, Purpose, Catalog, Footer, About } from './components';


function App() {
  return (

      <ThemeProvider theme={theme}>
        
        <About/>
       
      </ThemeProvider>
      
  );
}

export default App;
