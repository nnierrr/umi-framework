import React, { useState } from 'react'
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

    return (
        <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h1" color="standard" inverted textAlign="center">
                    UMI | Framework
                </Header>
                <Form size="large">
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
}

export default LoginForm
