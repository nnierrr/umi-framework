import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions'
import {
    Button,
    Form,
    Grid,
    Header,
    Segment
} from "semantic-ui-react";


const LoginForm = (props) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const { email, password } = user;

    const { getPage } = props;
    
    const changePage = () => {
        getPage('register');
    }

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        props.login(user);
    }

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

const mapStateToProps = state => {
    return { user: state.user };
};

export default connect(mapStateToProps, { login })(LoginForm);
