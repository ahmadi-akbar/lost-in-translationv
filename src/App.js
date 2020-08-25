import React, { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { amber, purple } from '@material-ui/core/colors';
import Login from './components/Login';
import Box from '@material-ui/core/Box';
import { setStorageItem, getStorageItem } from './utils/storage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: amber[300],
    },
    secondary: {
      main: purple[300],
    },
  },
});

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  useEffect(() => {
    const storage = getStorageItem('name');
    if (storage) {
      setIsLoggedIn(true);
      setName(storage);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Box>
          <TitleBar title='Lost in translation' username={name} />
          {!isLoggedin && (
            <Login
              readyToLogin={(message) => {
                console.log(message);
                setName(message);
                setStorageItem('name', message);
                setIsLoggedIn(true);
              }}
            ></Login>
          )}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
