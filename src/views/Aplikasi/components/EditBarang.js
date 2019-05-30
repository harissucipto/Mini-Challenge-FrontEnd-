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
  Col
} from 'reactstrap';

class EditBarang extends Component {
  state = {
    isOpen: false
  };

  componentWillMount() {
    const { id, nama, stok, satuan, deskripsi } = this.props.barang;

    this.setState({
      id,
      nama,
      stok,
      satuan,
      deskripsi
    });
  }

  onChange = e => this.setState({ [e.target.id]: e.target.value });

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  submit = () => {
    const { id, nama, stok, satuan, deskripsi } = this.state;
    this.props.aksi({
      id,
      nama,
      stok,
      satuan,
      deskripsi
    });
  };

  render() {
    const { isOpen, nama, stok, satuan, deskripsi } = this.state;

    return (
      <>
        <Button onClick={this.toggle} className="mr-1" color="warning">
          <i className="fa fa-edit" />
          &nbsp;Edit
        </Button>
        <Modal
          size="big"
          isOpen={isOpen}
          toggle={this.toggle}
          className="modal-warning"
        >
          <ModalHeader toggle={this.toggle}>Edit Data Barang</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label htmlFor="nama">Nama Barang</Label>
              <Input
                type="text"
                id="nama"
                placeholder="Masukan Nama Barang"
                value={nama}
                onChange={this.onChange}
              />
            </FormGroup>

            <FormGroup row className="my-0">
              <Col md="8">
                <FormGroup>
                  <Label htmlFor="stok">Stok Barang</Label>
                  <Input
                    value={stok}
                    type="number"
                    id="stok"
                    placeholder="Stok Barang Yang Tersedia"
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label htmlFor="satuan">Satuan</Label>
                  <Input
                    value={satuan}
                    type="text"
                    id="satuan"
                    placeholder="Satuan"
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="deskripsi">Deskripsi</Label>
              <Input
                value={deskripsi}
                type="textarea"
                name="deskripsi"
                id="deskripsi"
                rows="9"
                placeholder="Masukan Informasi Tentang Barang tersebut"
                onChange={this.onChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={this.submit}>
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
