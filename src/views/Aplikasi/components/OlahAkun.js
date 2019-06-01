import { Container } from 'unstated';

const resetPengguna = {
  jwt: '',
  _id: '',
  name: '',
  email: '',
  loading: false
};

const API = 'http://localhost:3000/';

class OlahAkun extends Container {
  state = {
    ...resetPengguna
  };

  login = async (email, password) => {
    this.setState({ loading: true });
    const loggedIn = await fetch(`${API}auth/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    }).catch(err => {
      this.setState({ loading: false, erorText: 'Koneksi Gangguan!' });
    });

    const respon = await loggedIn.json();

    if (loggedIn.status === 200) {
      const { user, token } = respon;
      this.setState({ jwt: token, uid: user._id, ...user });
    }

    this.setState({ loading: false, erorText: respon.error });
  };

  updateAkun = data => {
    this.setState({ loading: true });
    this.setState({ ...data, loading: false });
  };

  updatePassword = password => {
    this.setState({ password });
  };

  logout = () => {
    this.setState({
      ...resetPengguna
    });
  };
}

export default OlahAkun;
