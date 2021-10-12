import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  emailConfirm: boolean;
  token: string;
}

interface UserCreate {
  email: string;
  name: string;
  username: string;
  password: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signUp: (user: UserCreate) => Promise<void>
  signOut: () => Promise<void>;
  /* updatedUser: (user: User) => Promise<void>; */
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children } : AuthProviderProps) {
  const [data, setData] = useState<User>({} as User);
  const [userStorageLoading, setUserStorageLoading] = useState(true);
  const userStorageKey = '@memoirs:user';

  async function signIn({ email, password } : SignInCredentials) {
    try{
      const response = await api.post('sessions', {
        email,
        password
      });

      const { accessToken, user } = response.data;
      api.defaults.headers.authorization = `Bearer ${accessToken}`;

      const userLogged = {
        id: user._id,
        email: user.email,
        name: user.name,
        username: user.username,
        /* photo: user.picture, */
        emailConfirm: user.emailConfirm,
        token: accessToken
      };

      setData(userLogged);
      await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
    }catch(error){
      throw new Error(error);
    }
  }

  const signOut = useCallback(async () => {
    setData({} as User);
    await AsyncStorage.removeItem('@memoirs:user');
  },[setData]);

  async function signUp({ email, name, username, password } : UserCreate) {
    try {
      await api.post('user', {
        email: email,
        name: name,
        username: username,
        password: password
      })
    } catch (error) {
      throw new Error(error);
    }
  }

  /* async function updatedUser(user: User) {
    try {
      const userCollection = database.get<ModelUser>('users');
      await database.action(async () => {
        const userSelected = await userCollection.find(user.id);
        await userSelected.update(( userData ) => {
          userData.name = user.name,
          userData.driver_license = user.driver_license,
          userData.avatar = user.avatar
        });
      });

      setData(user);

    } catch (error) {
      throw new Error(error);
    }
  } */

  useEffect(() => {
    async function loadUserStorageDate() {
      const userStoraged = await AsyncStorage.getItem('@memoirs:user');

      if(userStoraged){
        const userLogged = JSON.parse(userStoraged) as User;
        setData(userLogged);
      }

      setUserStorageLoading(false);
    }

    loadUserStorageDate();
  },[]);

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signIn,
        signUp,
        signOut,
        /* updatedUser */
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
