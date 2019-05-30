import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Alert
} from 'reactstrap';
import { Redirect } from 'react-router-dom';

import { Subscribe } from 'unstated';
import OlahAkun from '../../Aplikasi/components/OlahAkun';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  submitLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    const { password, email } = this.state;

    const { state } = this.props;

    if (state.uid) return <Redirect to="/app" />;
    console.log(state, 'ini belum terdaftar');

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card>
                <CardBody>
                  <Form onSubmit={this.submitLogin}>
                    <h1>Login</h1>

                    <p className="text-muted">Masuk Ke dalam Aplikasi</p>
                    {state.erorText && (
                      <Alert color="danger">{state.erorText}</Alert>
                    )}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">
                          Login
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <p>
                    Atau <Link to="/register">daftar</Link> jika belum punya
                    Akun
                  </p>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const FormLogin = () => {
  return <Subscribe to={[OlahAkun]}>{data => <Login {...data} />}</Subscribe>;
};

export default FormLogin;
