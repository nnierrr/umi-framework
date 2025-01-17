import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import { alert } from "../../actions/alertActions";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message
} from "semantic-ui-react";

const LoginForm = ({ getPage, login, errors }) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [errorMsg, setMsgError] = useState([]);

  const { email, password } = user;

  useEffect(() => {
    if (!_.isEmpty(errors)) {
      errors.map(error => {
        setMsgError(msg => [...msg, error.msg]);
      });
      console.log(errorMsg);
    } else {
      setMsgError([]);
    }
  }, [errors]);

  const changePage = () => {
    getPage("register");
  };

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(user);
  };

  return (
      <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
      >
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h1" color="standard" inverted textAlign="center">
                  umiSoda | Framework
              </Header>

              <Form onSubmit={onSubmit} size="large">
                  <Segment stacked>
                      <Form.Input
                          fluid
                          icon="user"
                          iconPosition="left"
                          placeholder="E-mail Address"
                          name="email"
                          type="email"
                          value={email}
                          onChange={onChange}
                      />
                      <Form.Input
                          fluid
                          icon="lock"
                          iconPosition="left"
                          placeholder="Password"
                          type="password"
                          name="password"
                          value={password}
                          onChange={onChange}
                      />
                      <Button color="yellow" fluid size="large">
                          Login
                      </Button>
                  </Segment>
              </Form>

              {!_.isEmpty(errorMsg) && (
                  <Message error header="Oopsie!" list={errorMsg} />
              )}

              <Header as="h4" color="satndard" inverted textAlign="center">
                  No Account?{" "}
                  <span
                      className="ui yellow small header"
                      style={{ cursor: 'grab' }}
                      onClick={changePage}
                  >
                      Register
                  </span>
              </Header>
          </Grid.Column>
      </Grid>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    errors: state.auth.errors
  };
};

export default connect(
    mapStateToProps,
    { login, alert }
)(LoginForm);
