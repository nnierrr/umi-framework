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

const LoginForm = props => {
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

  const { getPage, errors } = props;

  const { email, password } = user;

  useEffect(() => {
    if (_.isArray(errors)) {
      if (!_.isEmpty(errors)) {
        errors.map(error => {
          error.param === "email" &&
            setEmailError({ ...emailError, isError: true, msg: error.msg });
          error.param === "password" &&
            setPasswordError({
              ...passwordError,
              isError: true,
              msg: error.msg
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

<<<<<<< HEAD
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
                        <Header as="h4" color="satndard" color="yellow" textAlign="left" style={{ marginTop: '14px'}}>
                            Forget Password
                        </Header>
                        <Button color="yellow" fluid size="large">
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Header as="h4" color="satndard" inverted textAlign="center">
                    No Account?{" "}
                    <span
                        className="ui yellow small header"
                        onClick={changePage}
                    >
                        Register
                    </span>
                </Header>
            </Grid.Column>
        </Grid>
    );
}
=======
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
    props.login(user);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1" color="standard" inverted textAlign="center">
          umiSoda | Framework
        </Header>
        <Form onSubmit={onSubmit} size="large">
          <Segment stacked>
            {invalidCredential && (
              <Message
                error
                header="Invalid Credentail"
                content="Your input a wrong email/password"
              />
            )}
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
            {passwordError.isError && (
              <span className="ui red small header" onClick={changePage}>
                {passwordError.msg}
              </span>
            )}
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
>>>>>>> b592f29be0dca8ae235cff5022671c0d517742cb

const mapStateToProps = state => {
  console.log(state.auth);
  return {
    user: state.auth.user,
    errors: state.auth.errors
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
