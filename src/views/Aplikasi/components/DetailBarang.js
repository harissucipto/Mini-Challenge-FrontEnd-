import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class DetailBarang extends Component {
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

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen, nama, stok, satuan, deskripsi } = this.state;

    return (
      <>
        <Button onClick={this.toggle} className="mr-1 btn-ghost-info">
          {nama}
        </Button>
        <Modal
          size="md"
          isOpen={isOpen}
          toggle={this.toggle}
          className="text-white"
        >
          <ModalHeader toggle={this.toggle} className="bg-info">
            Detail Informasi Barang
          </ModalHeader>
          <ModalBody className="bg-info">
            <ul>
              <li>Nama: {nama}</li>
              <li>
                Stok: {stok} {satuan}
              </li>
              <li>Deskripsi: {deskripsi}</li>
            </ul>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default DetailBarang;
