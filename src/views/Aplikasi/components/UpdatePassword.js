import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class EditBarang extends Component {
  state = {
    isOpen: false
  };

  componentWillMount() {
    const { uid, nama, alamat, nomorTelepon } = this.props.data;

    this.setState({
      uid,
      nama,
      alamat,
      nomorTelepon
    });
  }

  onChange = e => this.setState({ [e.target.id]: e.target.value });

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  submit = () => {
    const { uid, nama, alamat, nomorTelepon } = this.state;
    this.props.aksi({
      uid,
      nama,
      alamat,
      nomorTelepon
    });

    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, nama, nomorTelepon } = this.state;

    return (
      <>
        <Button onClick={this.toggle} className="mr-1">
          Update Password
        </Button>
        <Modal
          size="big"
          isOpen={isOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit Informasi Akun</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label htmlFor="nama">Password Lama</Label>
              <Input
                type="text"
                id="nama"
                placeholder="Masukan Nama Pengguna"
                value={nama}
                onChange={this.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="nama">Password Baru</Label>
              <Input
                type="text"
                id="nomorTelepon"
                placeholder="Masukan Nomor Telepon"
                value={nomorTelepon}
                onChange={this.onChange}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="nama">Ulangi Password Baru</Label>
              <Input
                type="text"
                id="nomorTelepon"
                placeholder="Masukan Nomor Telepon"
                value={nomorTelepon}
                onChange={this.onChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submit}>
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
