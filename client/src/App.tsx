import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Footer} from './components';

import { Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
