import { Container } from 'unstated';

const resetPengguna = {
  jwt: '',
  _id: '',
  name: '',
  email: '',
  berhasilText: '',
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

  register = async (email, password, name) => {
    this.setState({ loading: true });
    const loggedIn = await fetch(`${API}api/users`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ email, password, name })
    }).catch(err => {
      this.setState({ loading: false, erorText: 'Koneksi Gangguan!' });
    });

    const respon = await loggedIn.json();

    if (loggedIn.status === 200) {
      this.login(email, password);
    }

    this.setState({ loading: false, erorText: respon.error });
  };

  logout = async () => {
    await fetch(`${API}auth/signout`);
    this.setState({
      ...resetPengguna
    });
  };
}

export default OlahAkun;
