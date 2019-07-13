import axios from './index';

class Post {
  static getPostById(id) {
    return axios.request({
      url: '/v1/post/detail',
      method: 'get',
      params: {
        id,
      },
    });
  }
}
export default Post;
