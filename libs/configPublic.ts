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
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxNjA2NTUzLCJleHAiOjE3MDQxOTg1NTN9.vgulVkS8_XjSqasn7_bt_En6_RGLYoCevOQMrJ8sifA";

  // if (token) config.headers.authorization = `Bearer ${token}`;

  config.params = config.params ?? {};

  return config;
};
