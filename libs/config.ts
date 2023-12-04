/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import Cookies from 'js-cookie';

export const config = {
  apiBase: process.env.NEXT_PUBLIC_API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getInterceptorsRequest = (config: any) => {
  const token = Cookies.get('token');

  if (token) config.headers.authorization = `Bearer ${token}`;

  config.params = config.params ?? {};

  return config;
};
