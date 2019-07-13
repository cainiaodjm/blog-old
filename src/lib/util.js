import Cookies from 'js-cookie';
import { Base64 } from 'js-base64';

const TOKEN_KEY = 'token';
export default {

  getToken() {
    const token = Cookies.get(TOKEN_KEY);
    if (token) return token;
    return false;
  },
  encode() {
    const token = this.getToken();
    const base64 = Base64.encode(`${token}:`);
    return `Basic ${base64}`;
  },

};
