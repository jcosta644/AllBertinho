import React from 'react';
import { Navbar, Nav, FormControl, Button, Form, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { createBrowserHistory } from 'history';
import store from '../../store';
//import history from '../../services/history';

function Header () {
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const { signed } = store.getState().auth;

  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.signInFailure());

    history.push("/");
    window.location.reload();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <h1>ALLBERTINHO</h1>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/product/5fc4259a4f542400176bf749">
            <Nav.Link>Detalhes Produto</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          {signed &&
            <LinkContainer to="/" onClick={handleLogout}>
              <Nav.Link>Sair</Nav.Link>
            </LinkContainer>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;
