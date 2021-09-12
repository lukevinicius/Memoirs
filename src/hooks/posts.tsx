import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback
} from 'react';

import { api } from '../services/api';

interface User {
  _id: string;
  email: string;
  name: string;
  username: string;
}

interface Post {
  user: User;
  title: string;
  body: string;
  category: string;
}

interface ReadPost {
  userId: string;
}

interface PostContextData {
  createPost: (post: Post) => Promise<void>
  readPost: (body: ReadPost) => Promise<void>
  /* updatedUser: (user: User) => Promise<void>; */
}

interface PostProviderProps {
  children: ReactNode;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

function PostProvider({ children } : PostProviderProps) {
  const [data, setData] = useState<Post>({} as Post);

  async function readPost({ userId } : ReadPost) {
    try{
      const {data: {  }}
      const response = await api.get('posts', {
        userId
      });

      const { accessToken, user } = response.data;
      api.defaults.headers.authorization = `Bearer ${accessToken}`;

      const userLogged = {
        id: user._id,
        email: user.email,
        name: user.name,
        username: user.username,
        /* photo: user.picture, */
        token: accessToken
      };

      /* setData(userLogged);
      await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged)) */
    }catch(error){
      throw new Error(error);
    }
  }

  return (
    <PostContext.Provider
      value={{
        posts: data,
        readPost
        /* updatedUser */
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

function usePost(): PostContextData {
  const context = useContext(PostContext);

  return context;
}

export default { PostProvider, usePost }
