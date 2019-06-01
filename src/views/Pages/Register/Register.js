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

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  submitRegister = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.register(email, password, name);
  };

  render() {
    const { name, email, password } = this.state;

    const { state } = this.props;

    if (state._id) return <Redirect to="/app" />;

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.submitRegister}>
                    <h1>Register</h1>
                    <p className="text-muted">Buat Akun Baru</p>
                    {state.erorText && (
                      <Alert color="danger">{state.erorText}</Alert>
                    )}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        required
                        type="text"
                        placeholder="Nama Pengguna"
                        autoComplete="name"
                        value={name}
                        onChange={e => this.setState({ name: e.target.value })}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        required
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        required
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        value={password}
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </InputGroup>

                    <Button color="success" block>
                      Buat Akun
                    </Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <p>
                    Sudah Punya Akun ? Silahkan <Link to="/login">Login</Link>.
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

const FormRegister = () => {
  return (
    <Subscribe to={[OlahAkun]}>{data => <Register {...data} />}</Subscribe>
  );
};

export default FormRegister;
