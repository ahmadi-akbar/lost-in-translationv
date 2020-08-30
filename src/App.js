import React, { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { amber, purple } from '@material-ui/core/colors';
import Login from './Views/Login';
import Box from '@material-ui/core/Box';
import { getStorageItem } from './utils/storage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Translate from './Views/Translate';
import Profile from './Views/Profile';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from './store/actions/auth';
import Welcome from './Views/Welcome';

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

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setAuth({
        isLoggedIn: getStorageItem('name') ? true : false,
        name: getStorageItem('name'),
      })
    );
  }, [dispatch]);

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
            <TitleBar />
            <Switch>
              <Route exact path='/'>
                <Welcome />
              </Route>
              <Route path='/translate'>
                <Translate isLoggedIn={auth.isLoggedIn} />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/profile'>
                <Profile isLoggedIn={auth.isLoggedIn} />
              </Route>
              <Route path='/'>
                <div>
                  <p>404 NOT FOUND</p>
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
