import { api } from './api';

export default {
  postsByUser: (body) => api.get('posts', body),
};
