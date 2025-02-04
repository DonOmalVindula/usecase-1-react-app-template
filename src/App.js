// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
// import './App.css';
//  import './App.scss';
// import { Nav, Navbar, Container }  from 'react-bootstrap';
import { Menu, Container, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { useAuthContext } from "@asgardeo/auth-react";

import Catalog from './components/Catalog/Catalog.js';
import MyCart from './components/MyCart/Cart.js';
import Admin from './components/Admin/Admin.js';

// Component to render the login/signup/logout menu
const RightLoginSignupMenu = () => {
  const { state, signIn, signOut, isAuthenticated, getBasicUserInfo } = useAuthContext();

  const [isAuth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const checkSession = async () => {
    const auth = await isAuthenticated();
    if (auth) {
      const userInfo = await getBasicUserInfo();
      setUserInfo(userInfo);
    }
    setAuth(auth);
  }

  useEffect(() => {
    checkSession();
  }, [state.isAuthenticated]);
     

  // Based on Asgardeo SDK, set a variable like below to check and conditionally render the menu
  // Host the menu content and return it at the end of the function
  let menu;

  // Conditionally render the following two links based on whether the user is logged in or not
  if (isAuth) {
    menu = (
      <Menu.Item position="right">
        <Button primary onClick={() => signOut()}>
          Logout
        </Button>
        <Menu.Item>
          <FontAwesomeIcon icon={faUser} /> Hi!{" "}
          {userInfo.username ? userInfo.username : ""}
        </Menu.Item>
      </Menu.Item>
    );
  } else {
    menu = (
      <Menu.Item position="right">
        <Button primary onClick={() => signIn()}>
          Login
        </Button>
        <Menu.Item>
          <a href="https://accounts.asgardeo.io/t/ayeshaecomm/accountrecoveryendpoint/register.do?client_id=jA1feJUbpfcLfBmOfBgFfvdIrJwa">
            Sign Up
          </a>
        </Menu.Item>
      </Menu.Item>
    );
  }
  return menu;
}

// Component to render the navigation bar
const PetStoreNav = () => {
  const history = useHistory();

  return (
    <>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          PetStore
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item onClick={() => history.push("/")} name="Catalog" />
          <Menu.Item onClick={() => history.push("/mycart")} name="My Cart" />
          <Menu.Item onClick={() => history.push("/admin")} name="Admin" />
          <RightLoginSignupMenu />
        </Menu.Menu>
      </Container>
    </Menu>
    </>
  );
};

// Main app component
const App = () => {
  useEffect(() => {
    document.title = 'PetStore';
  }, []);
  return (
    <>
    <BrowserRouter>
    <PetStoreNav />
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/mycart" component={MyCart} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;