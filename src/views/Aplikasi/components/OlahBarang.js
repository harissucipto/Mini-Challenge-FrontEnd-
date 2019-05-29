import { Container } from 'unstated';
import { stokBarang } from '../data';

class OlahBarang extends Container {
  state = {
    data: [],
    loading: false
  };

  fetch = () => {
    this.setState({ loading: true });
    this.setState({ data: stokBarang, loading: false });
  };

  tambahData = baru => {
    console.log(baru, 'ini baru');
    this.setState({
      data: [...this.state.data, baru]
    });
  };

  hapusData = id => {
    this.setState({ loading: true });
    this.setState({
      data: this.state.data.filter(item => item.id !== id),
      loading: false
    });
  };

  editData = newData => {
    this.setState({ loading: true });
    const data = this.state.data.filter(item => item.id !== newData.id);
    this.setState({
      data: [...data, newData],
      loading: false
    });
  };
}

export default OlahBarang;
