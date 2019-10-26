import React, { useState, useEffect } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message
} from "semantic-ui-react";

const LoginForm = ({ getPage, login }) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

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
  console.log(state.auth);
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
