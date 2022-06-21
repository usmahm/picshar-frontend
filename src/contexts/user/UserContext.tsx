/* eslint-disable no-underscore-dangle */
import React, { createContext, useReducer, useRef } from 'react';
import { initialState, userContextReducer } from './UserContextReducer';
import api from '../../api';

type UserType = {
  email: string,
  emailVerified: boolean,
  fullName: string,
  refreshToken: string,
  updatedAt: string,
  _id: string
}

type ApiLoginResponse = {
  refreshToken: string,
  user: UserType,
}

type ApiLoginPayloadType = {
  email: string,
  password: string,
}

type ApiSignupPayloadType = {
  email: string,
  password: string,
  confirmPassword: string,
  fullName: string,
  username: string,
}

type Replace = {
  [key: string]: any
}

export const userContext = createContext<Replace>({});

const UserContextProvider = ({ children }: {children: any}) => {
  const [state, dispatch] = useReducer(userContextReducer, initialState);
  const tokenRefreshTimeout = useRef<null | ReturnType<typeof setTimeout>>(null);
  const tokenRefreshTime = 600000;

  const updateState = (payload: any) => {
    dispatch({ type: 'update_state', payload });
  };

  const refreshToken = async () => {
    const token = localStorage.getItem('messageNew');
    const response = await api.post('auth/refresh', {
      refreshToken: token,
    });

    console.log('refreshhh', response.data.refreshToken);
    localStorage.setItem('messageNew', response.data.refreshToken);
    tokenRefreshTimeout.current = setTimeout(refreshToken, tokenRefreshTime);
  };

  const login = async (payload: ApiLoginPayloadType) => {
    try {
      const result = await api.post<ApiLoginResponse>('auth/login', payload);

      // console.log(result);
      dispatch({ type: 'login_success', user: result.data.user });
      localStorage.setItem('messageNew', result.data.user.refreshToken);
      tokenRefreshTimeout.current = setTimeout(refreshToken, tokenRefreshTime);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await api.post('auth/logout', { refreshToken: localStorage.getItem('messageNew'), userId: state.user._id });
      updateState({ loggedIn: false, user: {} });
      if (tokenRefreshTimeout.current) {
        clearTimeout(tokenRefreshTimeout.current);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (payload: ApiSignupPayloadType) => {
    try {
      const result = await api.put('auth/signup', payload);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    ...state,
    login,
    logout,
    signup,
  };

  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  );
};

export default UserContextProvider;
