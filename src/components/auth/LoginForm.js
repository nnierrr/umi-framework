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

const LoginForm = ( getPage, errors, login, alert) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [emailError, setEmailError] = useState({
    isError: false,
    msg: ""
  });
  const [passwordError, setPasswordError] = useState({
    isError: false,
    msg: ""
  });

  const [invalidCredential, setInvalidCredential] = useState(false);

  const { email, password } = user;

  useEffect(() => {
    if (_.isArray(errors)) {
      if (!_.isEmpty(errors)) {
        errors.map(error => {
          error.param === "email" &&
            alert(error.msg, 'red');
            setEmailError({ ...emailError, isError: true });
          error.param === "password" &&
            alert(error.msg, 'red');
            setPasswordError({
              ...passwordError,
              isError: true
            });
        });
      }
    } else {
      setInvalidCredential(true);
      console.log(invalidCredential);
    }
  }, [errors]);

  const changePage = () => {
    getPage("register");
  };

  const onChange = e => {
    clearAlert(e.target.name);
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const clearAlert = field => {
    setInvalidCredential(false);

    field === "email" &&
      setEmailError({ ...emailError, isError: false, msg: "" });
    field === "password" &&
      setPasswordError({ ...passwordError, isError: false, msg: "" });
  };

  const onSubmit = e => {
    e.preventDefault();
    login(user);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
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
              error={emailError.isError}
              value={email}
              onChange={onChange}
            />
            {emailError.isError && (
              <span className="ui red small header" onClick={changePage}>
                {emailError.msg}
              </span>
            )}
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              error={passwordError.isError}
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
        <Header as="h4" color="satndard" inverted textAlign="center">
          No Account?{" "}
          <span className="ui yellow small header" onClick={changePage}>
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
