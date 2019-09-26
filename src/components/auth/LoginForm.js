import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const LoginForm = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [errors, setError] = useState([]);

  const [fieldErrors, setFieldErrors] = useState({
    emailField: {
      isError: false,
      msg: ""
    },
    passwordField: {
      isError: false,
      msg: ""
    }
  });

  const { getPage } = props;

  const { email, password } = user;

  const { emailField, passwordField } = fieldErrors;

  useEffect(() => {
    if (!_.isEmpty(props.errors)) {
      props.errors.map(error => {
        console.log(error.param == "email");

        if (error.param === "email") {
          setFieldErrors({
            ...fieldErrors,
            emailField: { emailField, isError: true, msg: error.msg }
          });
        }

        if (error.param == "password") {
          setFieldErrors({
            ...fieldErrors,
            passwordField: { passwordField, isError: true, msg: error.msg }
          });
        }
      });
    } else {
      setFieldErrors({
        ...fieldErrors,
        emailField: { isError: false, msg: "" },
        passwordField: { isError: false, msg: "" }
      });
    }

    console.log(fieldErrors);
  }, [props.errors]);

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
    props.login(user);
    console.log("Email Field ", emailField);
    console.log("Password Field", passwordField);
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
              error={emailField.isError}
              value={email}
              onChange={onChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              error={passwordField.isError}
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
  console.log(state);
  return {
    user: state.auth.user,
    errors: state.auth.errors
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
