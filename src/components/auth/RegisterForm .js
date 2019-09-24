import React, { useState } from "react";
import {
    Button,
    Form,
    Grid,
    Header,
    Segment
} from "semantic-ui-react";

const LoginForm = props => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        user_role: ""
    });

    const user_roles = [
        'Blogger',
        'CMS Admin'
    ]

    const { name, email, password, user_role } = user;

    const { getPage } = props;

    const changePage = () => {
        getPage("login");
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
                            icon="user outline"
                            iconPosition="left"
                            placeholder="Username"
                            name="name"
                            value={name}
                            onChange={onChange}
                        />
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="E-mail address"
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
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Confirm Password"
                            type="password2"
                            name="password2"
                            value={password}
                            onChange={onChange}
                        />
                        <Form.Select
                            fluid
                            options={user_roles}
                            placeholder='User Role'
                            value={user_role}
                        />
                        <Button color="yellow" fluid size="large">
                            Register
                        </Button>
                    </Segment>
                </Form>
                <Header as="h4" color="standard" inverted textAlign="center">
                    <span className="ui yellow small header" onClick={changePage}>
                        Back to Login
                    </span>
                </Header>
            </Grid.Column>
        </Grid>
    );
};

export default LoginForm;
