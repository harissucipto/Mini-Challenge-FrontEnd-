import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditBarang extends Component {
  state = {
    isOpen: false
  };

  componentWillMount() {
    const { id, nama } = this.props.barang;

    this.setState({
      id,
      nama
    });
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  submit = () => {
    this.props.aksi(this.state.id);
  };

  render() {
    const { isOpen, nama } = this.state;

    return (
      <>
        <Button onClick={this.toggle} className="mr-1">
          Hapus
        </Button>
        <Modal
          size="sm"
          isOpen={isOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit Data Barang</ModalHeader>
          <ModalBody>
            <p>
              Yakin Akan Menghapus Item{' '}
              <span className="text-danger">{nama}</span> ini ?{' '}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submit}>
              Hapus
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
