import axios from './index';

class User {
  static login(account, secret) {
    return axios.request({
      url: '/v1/token',
      method: 'post',
      data: {
        account,
        secret,
        type: 101
      }
    });
  }
}

export default User;
