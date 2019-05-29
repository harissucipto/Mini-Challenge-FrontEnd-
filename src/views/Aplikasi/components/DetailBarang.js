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
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Detail Informasi Barang
          </ModalHeader>
          <ModalBody>
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
