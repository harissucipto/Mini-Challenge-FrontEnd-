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
import shortid from 'shortid';

class TambahBarang extends Component {
  state = {
    isOpen: false,
    nama: '',
    stok: 0,
    satuan: '',
    deskripsi: ''
  };

  onChange = e => this.setState({ [e.target.id]: e.target.value });

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  submit = () => {
    const { nama, stok, satuan, deskripsi } = this.state;
    this.props.aksi({
      id: shortid(),
      nama,
      stok,
      satuan,
      deskripsi
    });
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, nama, stok, satuan, deskripsi } = this.state;

    return (
      <>
        <Button color="primary" onClick={this.toggle} className="mb-4">
          <i className="fa fa-plus" />
          &nbsp;Tambah Data Barang
        </Button>

        <Modal
          size="big"
          isOpen={isOpen}
          toggle={this.toggle}
          className="modal-primary"
        >
          <ModalHeader toggle={this.toggle}>Tambah Data Barang</ModalHeader>
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

export default TambahBarang;
