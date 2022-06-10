import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { NavBar, Purpose, Catalog, Footer, About, Contact } from './components';



function App() {
  return (

      <ThemeProvider theme={theme}>

        <NavBar/>
        <About/>
        <Purpose/>
        <Catalog/>
        <Contact/>
        <Footer/>

        <GlobalStyle/>
       
      </ThemeProvider>
      
  );
}

export default App;
