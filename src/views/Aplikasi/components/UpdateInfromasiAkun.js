import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Spinner
} from 'reactstrap';

class EditBarang extends Component {
  state = {
    isOpen: false,
    loading: false
  };

  componentWillMount() {
    const { name, email } = this.props.data;

    this.setState({
      name,
      email
    });
  }

  onChange = e => this.setState({ [e.target.id]: e.target.value });

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  submit = async () => {
    const { name, email } = this.state;
    this.setState({ loding: true });

    const resp = await this.props.aksi({
      name,
      email
    });

    console.log(resp);
    this.setState({ loading: false });
  };

  render() {
    const { isOpen, name, email, loading } = this.state;

    return (
      <>
        <Button onClick={this.toggle} className="mr-1 btn-pill" color="success">
          Update Informasi
        </Button>
        <Modal
          size="big"
          isOpen={isOpen}
          toggle={this.toggle}
          className="modal-success"
        >
          <ModalHeader toggle={this.toggle}>Edit Informasi Akun</ModalHeader>
          <ModalBody>
            {loading && <Spinner title="loading..." />}
            <FormGroup>
              <Label htmlFor="name">Nama Pengguna</Label>
              <Input
                type="text"
                id="name"
                required
                placeholder="Masukan Nama Pengguna"
                value={name}
                onChange={this.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                required
                placeholder="Masukan Email"
                value={email}
                onChange={this.onChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.submit}>
              Simpan
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Batal
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default EditBarang;
