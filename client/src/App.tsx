import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Home} from './pages';
import { NavBar } from './components';
import { Testando } from './pages/home/styles';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <NavBar/>
        <GlobalStyle/>
      </ThemeProvider>
      
  );
}

export default App;
