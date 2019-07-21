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

  static getPostList(start = 0, count = 5) {
    return axios.request({
      url: '/v1/post/list',
      method: 'get',
      params: {
        start,
        count,
      },
    });
  }
}
export default Post;
