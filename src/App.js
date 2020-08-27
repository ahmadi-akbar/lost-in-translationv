import React, { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { amber, purple } from '@material-ui/core/colors';
import Login from './Views/Login';
import Box from '@material-ui/core/Box';
import { setStorageItem, getStorageItem } from './utils/storage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Translate from './Views/Translate';
import Profile from './Views/Profile';

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
  const [isLoggedIn, setIsLoggedIn] = useState(
    getStorageItem('name') ? true : false
  );
  const [name, setName] = useState(getStorageItem('name'));

  useEffect(() => {
    const name = getStorageItem('name');
    if (name) {
      setName(name);
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, name]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div>
          <Box>
            <TitleBar title='Lost in translation' username={name} />
            <Switch>
              <Route path='/translate'>
                <Translate isLoggedIn={isLoggedIn} />
              </Route>
              <Route path='/login'>
                <Login
                  readyToLogin={(message) => {
                    setName(message);
                    setStorageItem('name', message);
                    setIsLoggedIn(true);
                  }}
                  isLoggedIn={isLoggedIn}
                  name={name}
                />
              </Route>
              <Route path='/profile'>
                <Profile isLoggedIn={isLoggedIn} />
              </Route>
              <Route exact path='/'>
                <div>
                  <p>asdjklf</p>
                </div>
              </Route>
            </Switch>
          </Box>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
